"use client"
import Image from 'next/image';
import backgroundServices from '@/../public/background-services.jpg';
import ListContainer from '@/components/ListContainer/ListContainer';
import ImagePopup from '@/components/ImagePopup/page';
import ButtonUp from '@/components/ButtonUp/ButtonUp';
import useScroll from '@/utils/useScroll';
import useHandlePopup from '@/utils/useHandlePopup';
import { posts } from '@/constants/posts';
import { maxScroll } from '@/constants/constants';

export default function Blog() {
	const scroll = useScroll();
	const { selectedCard, handleCardClick, closeAllPopups } = useHandlePopup();

	return (
		<main className="main" aria-label="Фото и описание наших работ">
			<Image
				className="background"
				src={backgroundServices}
				width={1000}
				height={1000}
				alt="Ремонт авто"
				priority={true}
			/>
			{scroll > maxScroll && <ButtonUp />}
			<ListContainer list={posts} onCardClick={handleCardClick} />
			<ImagePopup
				isOpen={selectedCard.isOpen}
				onClose={closeAllPopups}
				cardName={selectedCard.cardData.title}
				cardLink={selectedCard.cardData.image}
			/>
		</main>
	)
}