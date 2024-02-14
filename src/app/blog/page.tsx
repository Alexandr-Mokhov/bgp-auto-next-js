"use client"
import Image from 'next/image';
import useScroll from '../../utils/checkScroll';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import ListContainer from '../../components/ListContainer/ListContainer';
import { posts } from '../../constants/posts';
import backgroundServices from '../../../public/background-services.jpg';
import './blog.css';

export default function Blog() {
	const maxScroll = 300;
	const scroll = useScroll();

	function onCardClick() {
		//** добавить функциональность открытия модального окна и вынести в утилс */
	}

	return (
		<main className="blog" aria-label="Фото и описание наших работ">
			<Image
				className="background"
				src={backgroundServices}
				width={597}
				height={620}
				alt="Ремонт авто"
				placeholder="blur"
			/>
			{scroll > maxScroll && <ButtonUp />}
			<ListContainer list={posts} onCardClick={onCardClick} />
		</main>
	)
}