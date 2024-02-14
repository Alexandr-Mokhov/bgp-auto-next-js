import Image from 'next/image';
import ServicesElement from '../../components/ServicesElement/ServicesElement';
import backgroundServises from '../../../public/background-services.jpg';
import { services } from '../../constants/services';
import './services.css';

export default function Services() {

	function createServicesList() {
		return services.map((item, i) => <ServicesElement
			path={item.path}
			srcImage={item.srcImage}
			elementTitle={item.elementTitle}
			key={i}
		/>)
	}

	return (
		<main className="services" aria-label="Наши основные услуги">
			<Image className="background" src={backgroundServises} alt={"Ремонт авто"} placeholder="blur" />
			<div className="services__container">
				<section className="services__grid">
					{createServicesList()}
				</section>
			</div>
		</main>
	)
}