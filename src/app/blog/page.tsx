"use client"
import Image from 'next/image';
import backgroundServices from '../../../public/background-services.jpg';
import './blog.css';
import ListContainer from '../../components/ListContainer/ListContainer';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import useScroll from '../../utils/checkScroll';
import { posts } from '../../constants/posts';

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
				width={1000}
				height={1000}
				alt="Ремонт авто"
				// placeholder="blur"
				priority={true}
			/>
			{scroll > maxScroll && <ButtonUp />}
			<ListContainer list={posts} onCardClick={onCardClick} />
		</main>
	)
}