import { useEffect, useState } from 'react';
import { ListType, CardDataType } from '../../styles/types';
import initialImage from '@/../public/back-img.png';


export default function useHandlePopup() {
	const [selectedCard, setSelectedCard] = useState<CardDataType>({
		isOpen: false,
		cardData: {
			image: initialImage,
			title: '',
			paragraph: ['']
		}
	});
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

	return { selectedCard, handleCardClick, closeAllPopups };
}
