"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import backgroundServices from '@/../public/background-services.jpg';
import ListContainer from '@/components/ListContainer/ListContainer';
import ButtonUp from '@/components/ButtonUp/ButtonUp';
import ImagePopup from '@/components/ImagePopup/page';
import useScroll from '@/utils/checkScroll';
import { posts } from '@/constants/posts';
import initialImage from '@/../public/back-img.png';
import { ListType } from '../../../styles/types';

type CardDataType = {
	isOpen: boolean,
	cardData: ListType,
}

export default function Blog() {
	const [selectedCard, setSelectedCard] = useState<CardDataType>({
		isOpen: false,
		cardData: {
			image: initialImage,
			title: '',
			paragraph: ['']
		}
	});
	const maxScroll = 300;
	const scroll = useScroll();
	const isOpen = selectedCard.isOpen;

	function handleCardClick(card: ListType) {
		setSelectedCard({ isOpen: true, cardData: card });
	}

	function closeAllPopups() {
		setSelectedCard({ ...selectedCard, isOpen: false });
	}

	useEffect(() => {
		function closeByEscape(evt: KeyboardEvent) {
			if (evt.key === 'Escape') {
				closeAllPopups();
			}
		}
		if (isOpen) {
			document.addEventListener('keydown', closeByEscape);
			return () => {
				document.removeEventListener('keydown', closeByEscape);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) {
			return
		}
		function handleClickOverlay(evt: Event) {
			if ((evt.target as Element).className.indexOf('popup_opened') > 1) {
				closeAllPopups();
			}
		};
		document.addEventListener('mousedown', handleClickOverlay);
		return () => {
			document.removeEventListener('mousedown', handleClickOverlay);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

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