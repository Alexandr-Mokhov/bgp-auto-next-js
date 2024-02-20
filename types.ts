import { ChangeEvent, ChangeEventHandler, FormEventHandler } from 'react';
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

export type RegistrationPropsType = {
	name: string,
	date: string,
	time: string,
	work: string,
}

export type FormPropsType = RegistrationPropsType & {
	handleSubmit: FormEventHandler<HTMLFormElement>,
	handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
	values: { [key: string]: string },
	auto: string,
	surname: string,
	phone: string,
	currentDate: string,
	errors: { [key: string]: string },
	isValid: boolean,
	isLoading: boolean,
}
