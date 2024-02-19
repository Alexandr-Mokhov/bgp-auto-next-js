import { StaticImageData } from 'next/image';

export type ListType = {
	image: StaticImageData;
	title: string;
	paragraph: string[]
}

export type CardDataType = {
	isOpen: boolean,
	cardData: ListType,
}