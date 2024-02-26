import { LocalStorageType } from '../../types';

const token = process.env.NEXT_PRIVATE_TOKEN;
const chatId = process.env.NEXT_PRIVATE_CHAT_ID;
const url = `https://api.telegram.org/bot${token}/sendMessage`;

export function POST(request: Request): Promise<Response> {
  return requestHandle(request, true) as Promise<Response>;
}

export function PUT(request: Request): Promise<Response> {
  return requestHandle(request, false) as Promise<Response>;
}

async function requestHandle(req: Request, active: boolean) {
  const data = await req.json();
  try {
    const res = await sendMessage(data, active);
    if (res.status === 200) {      
      return new Response('Request Ok', { status: res.status });
    } else {
      throw new Response('Bad Request', { status: res.status });
    }
  } catch (err) {
    console.log(err);
    return err;
  }
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
