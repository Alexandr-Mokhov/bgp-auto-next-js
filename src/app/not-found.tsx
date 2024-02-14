import Link from 'next/link';
import Image from 'next/image';
import backgroundServices from '../../public/background-services.jpg';

export default function NotFound() {
  return (
    <main className="not-found" aria-label="У нас нет страницы по указанному пути">
      <Image
        className="background"
        src={backgroundServices}
        width={1000}
        height={1000}
        alt="Ремонт авто"
        // placeholder="blur" //** */
        priority={true}
      />
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