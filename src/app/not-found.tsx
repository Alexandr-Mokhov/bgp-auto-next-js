import Link from 'next/link';
import Image from 'next/image';
import backgroundMain from '../../public/background-main.jpg';

export default function NotFound() {
  return (
    <main className="not-found" aria-label="У нас нет страницы по указанному пути">
      <Image className="background" src={backgroundMain} alt={"Фоновое изображение с ремонтом авто"} placeholder="blur" />
      <section className="not-found__container">
        <div className="not-found__container-text">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__subtitle">Упс, страница не найдена</p>
        </div>
        <Link className="not-found__back" href="/">Назад</Link>
      </section>
    </main>
  )
}