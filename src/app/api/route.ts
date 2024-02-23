import { LocalStorageType } from '../../types';

const token = process.env.NEXT_PRIVATE_TOKEN;
const chatId = process.env.NEXT_PRIVATE_CHAT_ID;
const url = `https://api.telegram.org/bot${token}/sendMessage`;

export function POST(request: Request) {
  return requestHandle(request, true);
}

export function PUT(request: Request) {
  return requestHandle(request, false);
}

async function requestHandle(req: Request, active: boolean) {
  const data = await req.json();
  sendMessage(data as unknown as LocalStorageType, active);
  return new Response('Request ok', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/api, https://bgp-auto.vercel.app/api',
      'Access-Control-Allow-Methods': 'POST, PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

async function sendMessage(data: LocalStorageType, active: boolean) {
  return await fetch(`${url}?chat_id=${chatId}&text=${createMessageText(data, active)}&parse_mode=html`);
}

function createMessageText(obj: LocalStorageType, active: boolean): string {
  let message = '';
  for (let key in obj) {
    if (key === 'registrationDone') {
      message += `<b>${key}:</b> ${active ? 'АКТИВНА 🟢' : 'ОТМЕНЕНА 🔴'}\n`
    } else {
      message += `${active ? '' : '<s>'}<b>${key}:</b> ${obj[key as keyof LocalStorageType]}${active ? '' : '</s>'}\n`;
    }
  }
  return encodeURI(message);
}
