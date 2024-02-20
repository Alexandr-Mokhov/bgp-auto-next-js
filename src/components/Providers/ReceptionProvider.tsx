'use client';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

type ReceptionContextType = {
  isInscribed: boolean,
  setIsInscribed: Dispatch<SetStateAction<boolean>>,
  date: string,
  setDate: Dispatch<SetStateAction<string>>,
  time: string,
  setTime: Dispatch<SetStateAction<string>>,
}
export const ReceptionContext = createContext<ReceptionContextType>({
  isInscribed: false,
  setIsInscribed: () => { },
  date: '',
  setDate: () => { },
  time: '',
  setTime: () => { },
});;

export function ReceptionProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isInscribed, setIsInscribed] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <ReceptionContext.Provider value={{
      isInscribed,
      setIsInscribed,
      date,
      setDate,
      time,
      setTime,
    }}>
      {children}
    </ReceptionContext.Provider>
  );
}
