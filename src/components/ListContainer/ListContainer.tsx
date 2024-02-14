import Image, { StaticImageData } from 'next/image';
import './ListContainer.css';

type ListType = {
  image: StaticImageData;
  title: string;
  paragraph: string[]
}

export default function ListContainer({ list, onCardClick }: { list: ListType[], onCardClick: Function }) {
  function createElementList() {
    return list.map((item, i: number) => {
      function handleClick() {
        onCardClick(item);
      }

      return <li className="list__item" key={i}>
        <Image
          className="list__item-image"
          src={item.image}
          alt={item.title}
          onClick={handleClick}
          width={300}
          height={300}
          placeholder="blur"
        />
        <h2 className="list__item-title">{item.title}</h2>
        <div className="list__item-description">
          {item.paragraph.map((elem: string, i: number) => <p className="list__item-text" key={i}>{elem}</p>)}
        </div>
      </li>
    })
  }

  return (
    <ul className="list">
      {createElementList()}
    </ul>
  )
}