import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import './ServicesElement.css';

type PropsType = {
  path: string,
  srcImage: StaticImageData,
  elementTitle: string,
}

export default function ServicesElement({ path, srcImage, elementTitle }: PropsType) {
  return (
    <Link className="services__grid-item" href={{ pathname: '/prices', query: { table: `${path}` } }} >
    {/* <Link className="services__grid-item" href={`/prices#${path}`} > //** * */}
      <Image
        className="services__grid-img"
        src={srcImage}
        width={200}
        height={200}
        alt={elementTitle}
      />
      <div className="services__grid-circel" />
      <h2 className="services__grid-title">{elementTitle}</h2>
    </Link>
  )
}
