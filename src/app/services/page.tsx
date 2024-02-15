import Image from 'next/image';
import backgroundServises from '@/../public/background-services.jpg';
import './services.css';
import ServicesElement from '@/components/ServicesElement/ServicesElement';
import { services } from '@/constants/services';

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
		<main className="main" aria-label="Наши основные услуги">
			<Image
				className="background"
				src={backgroundServises}
				width={1000}
        height={1000}
				alt="Ремонт авто"
				// placeholder="blur"
				priority={true}
			/>
			<div className="services">
				<section className="services__grid">
					{createServicesList()}
				</section>
			</div>
		</main>
	)
}