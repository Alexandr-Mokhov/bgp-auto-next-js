"use client"
import { FormEvent, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import backgroundAboutAs from '../../../public/background-about-as.jpg';
import './reception.css';
import Registration from '@/components/Registration/Registration';
import Preloader from '@/components/Preloader/Preloader';
import Form from '@/components/Form/Form';
import { useFormWithValidation } from '../../utils/formValidator';
import { ReceptionContext } from '@/components/Providers/ReceptionProvider';
import { LocalStorageType } from '../../../types';
import sendMessage from '@/api/sendMessage';

export default function Reception() {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState<LocalStorageType>({} as LocalStorageType);
  const [currentDate, setCurrentDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isInscribed, setIsInscribed, date, setDate, time, setTime } = useContext(ReceptionContext);
  const { work, auto, surname, name, phone }: LocalStorageType = dataFromLocalStorage!;

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    setCurrentDate(`${year}-${month <= 9 ? `0${month}` : month}-${day <= 9 ? `0${day}` : day}`);
  }, [])

  function getLocalStorageData() {
    return JSON.parse(localStorage.getItem('reception-BGP-AUTO') as string);
  }

  useEffect(() => {
    const localData = getLocalStorageData();

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

  function sendMessageOk(data: LocalStorageType, isActive: boolean) {
    sendMessage(data, isActive)
      .then(res => {
        if (res.ok) {
          localStorage.removeItem('reception-BGP-AUTO');
          localStorage.setItem('reception-BGP-AUTO', JSON.stringify(data));
          setDataFromLocalStorage(data);
          setDate(data.date);
          setTime(data.time);
          setIsInscribed(true);
        }
      })
      .catch(err => {
        console.log(err);
        alert(err)
      })
      .finally(() => setIsLoading(false));
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    evt.preventDefault();
    const localData = getLocalStorageData();
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

    if (localData) {
      sendMessage(localData, false)
        .then((res) => {
          if (res.ok) {
            sendMessageOk(dataReception, true);
          }
        })
        .catch(err => {
          console.log(err);
          alert(err)
        })
        .finally(() => setIsLoading(false));
    } else {
      sendMessageOk(dataReception, true);
    }
  }

  function handleEdit() {
    setIsInscribed(false);
  }

  function handleReset() {
    setIsLoading(true);
    const localData = getLocalStorageData();
    sendMessage(localData, false)
      .then(res => {
        if (res.ok) {
          localStorage.removeItem('reception-BGP-AUTO');
          setDataFromLocalStorage({} as LocalStorageType);
          setIsInscribed(false);
          resetForm();
          setDate('');
          setTime('');
        }
      })
      .catch(err => {
        console.log(err);
        alert(err)
      })
      .finally(() => setIsLoading(false));
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