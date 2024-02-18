"use client"
import { MouseEvent, useState } from 'react';
import Image from 'next/image';
import backgroundContacts from '@/../public/background-about-as.jpg';
import './contacts.css';
import PhotoIvan from '@/components/PhotoMasters/PhotoIvan';
import PhotoDmitry from '@/components/PhotoMasters/PhotoDmitry';
import PhotoAlexey from '@/components/PhotoMasters/PhotoAlexey';

export default function Contacts() {
  const [visiblePhonePlisovskikh, setVisiblePhonePlisovskikh] = useState(false);
  const [visiblePhoneBasalygin, setVisiblePhoneBasalygin] = useState(false);
  const [visiblePhoneGonchrov, setVisiblePhoneGonchrov] = useState(false);

  function handleClick(evt: MouseEvent) {
    switch ((evt.target as HTMLElement).id) {
      case '1': setVisiblePhoneBasalygin(!visiblePhoneBasalygin);
        break;
      case '2': setVisiblePhoneGonchrov(!visiblePhoneGonchrov);
        break;
      default: setVisiblePhonePlisovskikh(!visiblePhonePlisovskikh);
    }
  }

  return (
    <main className="main" aria-label="Наши контакты">
      <Image
        className="background"
        src={backgroundContacts}
        width={1000}
        height={1000}
        alt="Ремонт авто"
        priority={true}
      />
      <div className="contacts">
        <h1 className="contacts__title">Свяжитесь с нами по интересующим Вас вопросам</h1>
        <p className="contacts__work">График работы</p>
        <p className="contacts__work">ПН - ПТ -&gt; 09:00 - 19:00</p>
        <p className="contacts__work">СБ - ВС -&gt; 09:00 - 18:00</p>
        <ul className="contacts__masters">
          <li className="contacts__master">
            <PhotoIvan />
            <p className="contacts__name">Басалыгин Иван</p>
            <p className="contacts__job">моторист</p>
            <a href="https://vk.com/ibasalygin" target="_blank" rel="noreferrer" className="contacts__connection">Сообщение в VK</a>
            <div className="contacts__connection" id="1" onClick={handleClick}>{visiblePhoneBasalygin ? '+7 (951) 814-96-59' : 'Показать телефон'}</div>
          </li>
          <li className="contacts__master">
            <PhotoDmitry />
            <p className="contacts__name">Гончаров Дмитрий</p>
            <p className="contacts__job">механик</p>
            <a href="https://vk.com/dimagonchrov" target="_blank" rel="noreferrer" className="contacts__connection">Сообщение в VK</a>
            <div className="contacts__connection" id="2" onClick={handleClick}>{visiblePhoneGonchrov ? '+7 (982) 114-11-94' : 'Показать телефон'}</div>
          </li>
          <li className="contacts__master">
            <PhotoAlexey />
            <p className="contacts__name">Плисовских Алексей</p>
            <p className="contacts__job">диагност</p>
            <a href="https://vk.com/shifer96" target="_blank" rel="noreferrer" className="contacts__connection">Сообщение в VK</a>
            <div className="contacts__connection" id="3" onClick={handleClick}>{visiblePhonePlisovskikh ? '+7 (902) 605-47-42' : 'Показать телефон'}</div>
          </li>
        </ul>
      </div>
    </main>
  )
}