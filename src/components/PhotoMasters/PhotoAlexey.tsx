import Image from "next/image";
import photoAlexey from '@/../public/master-plisovskikh.jpg';
import "./PhotoMasters.css";

export default function PhotoAlexey() {
	return (
		<Image
			className="photo"
			src={photoAlexey}
			width={300}
			height={300}
			alt="Плисовских Алексей, диагност"
			placeholder="blur"
		/>
	)
}