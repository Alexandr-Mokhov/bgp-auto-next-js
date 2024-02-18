"use client"
import Image from 'next/image';
import backgroundPromotions from '@/../public/background-promotions.jpg'
import ListContainer from '@/components/ListContainer/ListContainer';
import ButtonUp from '@/components/ButtonUp/ButtonUp';
import useScroll from '@/utils/useScroll';
import { promotions } from '@/constants/promotions';
import { maxScroll } from '@/constants/constants';

export default function Promotions() {
  const scroll = useScroll();

  function onCardClick() {
    //** добавить функциональность открытия модального окна и вынести в утилс */
  }

  return (
    <main className="main" aria-label="Наши акционные предложения">
      <Image
        className="background"
        src={backgroundPromotions}
        width={1000}
        height={1000}
        alt="Ремонт авто"
        priority={true}
      />
      {scroll > maxScroll && <ButtonUp />}
      <ListContainer list={promotions} onCardClick={onCardClick} />
    </main>
  )
}