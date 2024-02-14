"use client"
import Image from 'next/image';
import ListContainer from '../../components/ListContainer/ListContainer';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import { promotions } from '../../constants/promotions';
import useScroll from '../../utils/checkScroll';
import backgroundPromotions from '../../../public/background-promotions.jpg'
import './promotions.css';

export default function Promotions({ onCardClick }: {onCardClick: Function}) {
  const scroll = useScroll();
  const maxScroll = 300;

  return (
    <main className="promotions" aria-label="Наши акционные предложения">
			<Image className="background" src={backgroundPromotions} width={597} height={620} alt="Ремонт авто" placeholder="blur" />
      {scroll > maxScroll && <ButtonUp />}
      <ListContainer list={promotions} onCardClick={onCardClick} />
    </main>
  )
}