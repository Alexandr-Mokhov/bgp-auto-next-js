"use client"
import Image from 'next/image';
import backgroundPromotions from '@/../public/background-promotions.jpg'
import ListContainer from '@/components/ListContainer/ListContainer';
import ImagePopup from '@/components/ImagePopup/page';
import ButtonUp from '@/components/ButtonUp/ButtonUp';
import useScroll from '@/utils/useScroll';
import useHandlePopup from '@/utils/useHandlePopup';
import { promotions } from '@/constants/promotions';
import { maxScroll } from '@/constants/constants';

export default function Promotions() {
  const scroll = useScroll();
  const { selectedCard, handleCardClick, closeAllPopups } = useHandlePopup();

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
      <ListContainer list={promotions} onCardClick={handleCardClick} />
      <ImagePopup
        isOpen={selectedCard.isOpen}
        onClose={closeAllPopups}
        cardName={selectedCard.cardData.title}
        cardLink={selectedCard.cardData.image}
      />
    </main>
  )
}