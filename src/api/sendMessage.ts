import { LocalStorageType } from '../../types';

const token = process.env.NEXT_PUBLIC_TOKEN;
const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
const url = `https://api.telegram.org/bot${token}/sendMessage`;

function createMessageText(obj: LocalStorageType, active: boolean): string {
	let message = '';

	if (active) {
		for (let key in obj) {
			if (key === 'registrationDone') {
				message += `<b>${key}:</b> АКТИВНА 🟢\n`
			} else {
				message += `<b>${key}:</b> ${obj[key as keyof LocalStorageType]}\n`;
			}
		}
	} else {
		for (let key in obj) {
			if (key === 'registrationDone') {
				message += `<b>${key}:</b> ОТМЕНЕНА 🔴\n`
			} else {
				message += `<s><b>${key}:</b> ${obj[key as keyof LocalStorageType]}</s>\n`;
			}
		}
	}

	return encodeURI(message);
}

export default async function sendMessage(data: LocalStorageType, isActive: boolean) {
	return await fetch(`${url}?chat_id=${chatId}&text=${createMessageText(data, isActive)}&parse_mode=html`)
}



// function createMessageText() {
//   let fields = [
//     '<b>Вид работ:</b> ' + dataReception.work,
//     '<b>Автомобиль:</b> ' + dataReception.auto,
//     '<b>Дата работ:</b> ' + dataReception.date,
//     '<b>Время:</b> ' + dataReception.time,
//     '<b>Фамилия:</b> ' + dataReception.surname,
//     '<b>Имя:</b> ' + dataReception.name,
//     '<b>Телефон:</b> ' + dataReception.phone,
//     '<b>Дата заявки:</b> ' + dataReception.registeredDate,
//     `<b>Статус:</b> ${dataReception.registrationDone ? 'активна' : 'закрыта'}`,
//   ]
//   let message = '';
//   fields.forEach(field => message += field + '\n');
//   return encodeURI(message);
// }