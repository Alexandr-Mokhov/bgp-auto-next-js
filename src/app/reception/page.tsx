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
import { LocalStorageType } from '../../types';

export default function Reception() {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState<LocalStorageType>({} as LocalStorageType);
  const [currentDate, setCurrentDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isInscribed, setIsInscribed, date, setDate, time, setTime } = useContext(ReceptionContext);
  const { work, name }: LocalStorageType = dataFromLocalStorage;
console.log(dataFromLocalStorage);

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
      const { work, auto, date, time, surname, name, phone, registrationDone } = localData;
      const registrationYear = Number(date.slice(0, 4));
      const registrationMonth = Number(date.slice(5, 7)) - 1;
      const registrationDay = Number(date.slice(8, 10));
      const registrationHours = Number(time.slice(0, 2));
      const registrationMinutes = Number(time.slice(3, 5));
      const registrationDate = new Date(registrationYear, registrationMonth, registrationDay, registrationHours, registrationMinutes).getTime();

      values['work'] = work;
      values['auto'] = auto;
      values['date'] = date;
      values['time'] = time;
      values['surname'] = surname;
      values['name'] = name;
      values['phone'] = phone;

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDate, setIsInscribed, setTime])

  function sendMessagePost(data: LocalStorageType) {
    fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (res.ok) {
          localStorage.removeItem('reception-BGP-AUTO');
          localStorage.setItem('reception-BGP-AUTO', JSON.stringify(data));
          setDataFromLocalStorage(data);
          setDate(data.date);
          setTime(data.time);
          setIsInscribed(true);
        } else {
          throw new Error('Ошибка записи на сервис, попробуйте позже');
        }
      })
      .catch(err => {
        console.log(err);
        alert(err);
      })
      .finally(() => setIsLoading(false));
  }

  function sendMessagePut(data: LocalStorageType): Promise<Response> {
    return fetch('/api', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    evt.preventDefault();
    const localData = getLocalStorageData();
    const dataReception = {
      work: values['work'],
      auto: values['auto'],
      date: values['date'],
      time: values['time'],
      surname: values['surname'],
      name: values['name'],
      phone: values['phone'],
      registeredDate: currentDate,
      registrationDone: true
    }

    if (localData) {
      sendMessagePut(localData)
        .then((res) => {
          if (res.ok) {
            sendMessagePost(dataReception);
          } else {
            throw new Error('Ошибка изменения записи на сервис, попробуйте позже');
          }
        })
        .catch(err => {
          console.log(err);
          alert(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      sendMessagePost(dataReception);
    }
  }

  function handleEdit() {
    setIsInscribed(false);
  }

  function handleReset() {
    setIsLoading(true);
    const localData = getLocalStorageData();
    sendMessagePut(localData)
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
        alert(err);
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
        placeholder="blur"
      />
      {isLoading && <Preloader />}
      <div className="reception">
        <h1 className="reception__title">Запись на ремонт и техническое обслуживание</h1>
        {!isInscribed && !dataFromLocalStorage.registrationDone &&
          <p className="reception__subtitle">
            Оставьте заявку и мы свяжемся с&nbsp;вами в&nbsp;течении 15&nbsp;минут
          </p>}
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
            currentDate={currentDate}
            errors={errors}
            isValid={isValid}
            isLoading={isLoading}
          />}
        {isInscribed &&
          <div className="reception__button-contaiter">
            <button className="reception__button reception__button_editing" type="button" onClick={handleEdit}>
              Редактировать
            </button>
            <button className="reception__button reception__button_reset" type="button" onClick={handleReset}>
              Отменить
            </button>
          </div>}
      </div>
    </main>
  )
}