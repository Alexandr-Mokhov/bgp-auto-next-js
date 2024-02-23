import Image from 'next/image';
import backgroundAbout from '@/../public/background-about-as.jpg';
import './about.css';
import PhotoIvan from '@/components/PhotoMasters/PhotoIvan';
import PhotoDmitry from '@/components/PhotoMasters/PhotoDmitry';
import PhotoAlexey from '@/components/PhotoMasters/PhotoAlexey';

export default function About() {
  return (
    <main className="main" aria-label="Наши мастера и ценности">
      <Image
        className="background"
        src={backgroundAbout}
        width={1000}
        height={1000}
        alt="Ремонт авто"
        placeholder="blur"
      />
      <div className="about-as">
        <h1 className="about-as__title">Добро пожаловать в автосервис BGP&nbsp;AUTO!</h1>
        <ul className="about-as__masters">
          <li>
            <a href="https://vk.com/ibasalygin" target="_blank" rel="noreferrer" className="about-as__master">
              <div className="about-as__photo">
                <PhotoIvan />
              </div>
              <p className="about-as__name">Басалыгин Иван</p>
              <p className="about-as__job">моторист</p>
            </a>
          </li>
          <li>
            <a href="https://vk.com/dimagonchrov" target="_blank" rel="noreferrer" className="about-as__master">
              <div className="about-as__photo">
                <PhotoDmitry />
              </div>
              <p className="about-as__name">Гончаров Дмитрий</p>
              <p className="about-as__job">механик</p>
            </a>
          </li>
          <li>
            <a href="https://vk.com/shifer96" target="_blank" rel="noreferrer" className="about-as__master">
              <div className="about-as__photo">
                <PhotoAlexey />
              </div>
              <p className="about-as__name">Плисовских Алексей</p>
              <p className="about-as__job">диагност</p>
            </a>
          </li>
        </ul>
        <ul className="about-as__tagets">
          <li className="about-as__taget">
            Мы за честность и открытость - любой клиент может увидеть как мы работаем и присутствовать при ремонте.
          </li>
          <li className="about-as__taget">
            Мы несем личную ответственность за качество выполняемого ремонта и это отличная мотивация делать все качественно.
          </li>
          <li className="about-as__taget">
            За вами выбор - установить ваши запчасти или положиться на нас за покупку запчастей и материалов.
          </li>
          <li className="about-as__taget">
            Предложим варианты запчастей от бюджетных до оригинальных по вашему предпочтению.
          </li>
          <li className="about-as__taget">
            Имеем опыт работы в диллерских сервисных центрах VAG группы.
          </li>
        </ul>
      </div>
    </main >
  )
}