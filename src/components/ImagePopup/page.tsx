import Image, { StaticImageData } from 'next/image';
import { MouseEventHandler } from 'react';
import './imagePopup.css';

type PropsType = {
  isOpen: boolean, 
  onClose: MouseEventHandler<HTMLButtonElement>,
  cardName: string,
  cardLink: StaticImageData,
}

export default function ImagePopup({ isOpen, onClose, cardName, cardLink }: PropsType) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose} />
        <Image className="popup__image" src={cardLink} alt={cardName} />
        <h3 className="popup__title">{cardName}</h3>
      </div>
    </div>
  )
}

