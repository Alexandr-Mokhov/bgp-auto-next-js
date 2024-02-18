"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import headerLogo from "@/../public/header-three-gears.svg";
import './Header.css';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  const [isInscribed, setIsInscribed] = useState(false);
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

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
        setDataFromLocalStorage({});
        setIsInscribed(false);
        setDate('');
        setTime('');
      }
    }
  }, [])

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo-container" href="/">
          <Image
            className="header__logo"
            src={headerLogo}
            width={72}
            height={72}
            alt="Логотип сайта BGP AUTO"
            priority={true}
          />
          <div className="header__title-container">
            <p className="header__title">BGP AUTO</p>
            <p className="header__subtitle">AUTOWERKSTATT</p>
          </div>
        </Link>
        <div className="header__info-container">
          <div className="header__info">
            <Link className="header__reception" href="/reception">
              <div className="header__reception-container">
                {isInscribed ?
                  <div>
                    <p className="header__reception-text">Вы записаны на сервис</p>
                    <p className="header__reception-text header__reception-data">{date && date.split('-').reverse().join('-')} в {time}</p>
                  </div> :
                  'Записаться на сервис'
                }
                <div className={`header__reception-icon ${isInscribed ? 'header__reception-icon_inscribed' : 'header__reception-icon_not-inscribed'}`} />
              </div>
            </Link>
            <Link className="header__address-container" href="/address">
              <div className="header__address-logo" />
              <div>
                <p className="header__address-name">Челябинск, Валдайская 17а</p>
                <p className="header__address-viewing">Посмотреть на карте</p>
              </div>
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  )
}