import { ChangeEventHandler, FormEventHandler } from 'react';
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

export type FormPropsType = {
	handleSubmit: FormEventHandler<HTMLFormElement>,
	handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
	values: { [key: string]: string },
	currentDate: string,
	errors: { [key: string]: string },
	isValid: boolean,
	isLoading: boolean,
}

export type LocalStorageType = {
  work: string,
  auto: string,
  surname: string,
  name: string,
  phone: string,
  date: string,
  time: string,
  registeredDate: string,
  registrationDone: boolean,
}
