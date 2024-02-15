import Image from "next/image";
import photoDmitry from '@/../public/master-goncharov.jpg';
import "./PhotoMasters.css";

export default function PhotoDmitry() {
	return (
		<Image
			className="photo"
			src={photoDmitry}
			width={300}
			height={300}
			alt="Гончаров Дмитрий, механик"
			placeholder="blur"
		/>
	)
}