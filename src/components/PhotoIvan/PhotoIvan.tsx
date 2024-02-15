import Image from "next/image";
import photoIvan from '../../../public/master-basalygin.jpg';

export default function PhotoIvan() {
	return (
		<Image
			className="photo"
			src={photoIvan}
			width={300}
			height={300}
			alt="Басалыгин Иван, моторист"
			placeholder="blur"
		/>
	)
}