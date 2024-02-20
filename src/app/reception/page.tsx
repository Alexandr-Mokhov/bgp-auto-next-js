"use client"
import processEnv from 'next/config';
import { FormEvent, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import backgroundAboutAs from '../../../public/background-about-as.jpg';
import './reception.css';
import Registration from '@/components/Registration/Registration';
import Preloader from '@/components/Preloader/Preloader';
import Form from '@/components/Form/Form';
import { useFormWithValidation } from '../../utils/formValidator';
import { ReceptionContext } from '@/components/Providers/ReceptionProvider';

type LocalStorageType = {
  work: string,
  auto: string,
  surname: string,
  name: string,
  phone: string,
  date: string,
  time: string,
  registeredDate: string,
  registrationDone: boolean,
}

export default function Reception() {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState<LocalStorageType>({} as LocalStorageType);
  const [currentDate, setCurrentDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isInscribed, setIsInscribed, date, setDate, time, setTime } = useContext(ReceptionContext);
  const { work, auto, surname, name, phone }: LocalStorageType = dataFromLocalStorage!;
  const NEXT_TOKEN = processEnv;
  // const axios = require('axios');

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    setCurrentDate(`${year}-${month <= 9 ? `0${month}` : month}-${day <= 9 ? `0${day}` : day}`);
  }, [])

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('reception-BGP-AUTO') as string);

    if (localData) {
      const today = new Date().getTime();
      const { date, time, registrationDone } = localData;
      const registrationYear = Number(date.slice(0, 4));
      const registrationMonth = Number(date.slice(5, 7)) - 1;
      const registrationDay = Number(date.slice(8, 10));
      const registrationHours = Number(time.slice(0, 2));
      const registrationMinutes = Number(time.slice(3, 5));
      const registrationDate = new Date(registrationYear, registrationMonth, registrationDay, registrationHours, registrationMinutes).getTime();

      if (today < registrationDate) {
        setDataFromLocalStorage(localData);
        setDate(date);
        setTime(time);
        setIsInscribed(registrationDone);
      } else {
        localStorage.removeItem('reception-BGP-AUTO');
        setDataFromLocalStorage({} as LocalStorageType);
        setIsInscribed(false);
        setDate('');
        setTime('');
      }
    } else {
      setIsInscribed(false);
    }
  }, [setDate, setIsInscribed, setTime])

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    evt.preventDefault();
    const dataReception = {
      work: values['work'] || work,
      auto: values['auto'] || auto,
      date: values['date'] || date,
      time: values['time'] || time,
      surname: values['surname'] || surname,
      name: values['name'] || name,
      phone: values['phone'] || phone,
      registeredDate: currentDate,
      registrationDone: true
    }

    const url = `https://api.telegram.org/bot${NEXT_TOKEN}/sendMessage`;

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataReception)
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('Error:', err));

    localStorage.setItem('reception-BGP-AUTO', JSON.stringify(dataReception));
    console.log(dataReception);

    return new Promise((resolve, reject) => {
      return resolve(setTimeout(() => {
        setDataFromLocalStorage(dataReception);
        setDate(dataReception.date);
        setTime(dataReception.time);
        setIsInscribed(true);
        setIsLoading(false);
      }, 3000));
    })
  }

  function handleEdit() {
    setIsInscribed(!isInscribed);
  }

  function handleReset() {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      return resolve(setTimeout(() => {
        localStorage.removeItem('reception-BGP-AUTO');
        setDataFromLocalStorage({} as LocalStorageType);
        setIsInscribed(false);
        setIsLoading(false);
        resetForm();
        setDate('');
        setTime('');
      }, 2000));
    })
  }

  return (
    <main className="main">
      <Image
        className="background"
        src={backgroundAboutAs}
        width={1000}
        height={1000}
        alt="Ремонт авто"
        priority={true}
      />
      {isLoading && <Preloader />}
      <div className="reception">
        <h1 className="reception__title">Запись на ремонт и техническое обслуживание</h1>
        {isInscribed ?
          <Registration
            name={name}
            date={date}
            time={time}
            work={work}
          /> :
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            work={work}
            auto={auto}
            date={date}
            time={time}
            surname={surname}
            name={name}
            phone={phone}
            currentDate={currentDate}
            errors={errors}
            isValid={isValid}
            isLoading={isLoading}
          />}
        {isInscribed &&
          <div className="reception__button-contaiter">
            <button className="reception__button reception__button_editing" type="button" onClick={handleEdit}>
              Редактировать запись
            </button>
            <button className="reception__button reception__button_reset" type="button" onClick={handleReset}>
              Отменить запись
            </button>
          </div>}
      </div>
    </main>
  )
}