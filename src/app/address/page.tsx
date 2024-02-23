/* eslint-disable jsx-a11y/iframe-has-title */
import Image from 'next/image';
import backgroundAboutAs from '../../../public/background-about-as.jpg';
import './address.css';

export default function Address() {
  return (
    <main className="main" aria-label="Карта с нашим местоположением и маршрутом подъезда">
      <Image
        className="background"
        src={backgroundAboutAs}
        width={1000}
        height={1000}
        alt="Ремонт авто"
        placeholder="blur"
      />
      <div className="address">
        <h1 className="address__title">Будем рады видеть Вас!</h1>
        <iframe className="address__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A778d86f01fc3f6eaa2e63a1aa21c3624a99c3427a2a334c0c880c2775d0d114c&amp;source=constructor"></iframe>
      </div>
    </main>
  )
}