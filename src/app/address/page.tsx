/* eslint-disable jsx-a11y/iframe-has-title */
import './address.css';

export default function Address() {
  return (
    <main className="main" aria-label="Карта с нашим местоположением и маршрутом подъезда">
      <div className="address">
        <div className="address__container">
          <h1 className="address__title">Будем рады видеть Вас!</h1>
          <p className="address__location">Челябинск, Валдайская 17а</p>
          <iframe className="address__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A778d86f01fc3f6eaa2e63a1aa21c3624a99c3427a2a334c0c880c2775d0d114c&amp;source=constructor"></iframe>
        </div>
      </div>
    </main>
  )
}