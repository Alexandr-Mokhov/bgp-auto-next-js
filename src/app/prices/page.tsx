"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import PriceTable from '../../components/PriceTable/PriceTable';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import useScroll from '../../utils/checkScroll';
import { prices } from '../../constants/prices';
// import backgroundPrices from '../../../public/background-prices.jpg';
import './Prices.css';

export default function Prices() {
  const scroll = useScroll();
  const maxScroll = 300;
  const blocks = {
    'transmission': useRef<HTMLElement | undefined>(),
    'diagnostics': useRef<HTMLElement | undefined>(),
    'chassis': useRef<HTMLElement | undefined>(),
    'engine': useRef<HTMLElement | undefined>(),
    'to': useRef<HTMLElement | undefined>(),
  }
  // const params = useParams()
	// console.log(params);
  //** */
  // const scrollToBlock = (block = "") => {
  //   console.log(blocks);
    
  //   if (block in blocks) {
  //     blocks[block].current.scrollIntoView({
  //       behavior: "smooth"
  //     });
  //   }
  // }

  // useEffect(() => {
  //   scrollToBlock(params.block);
  // }, [params]);

  function createPriceTable() {
    return prices.map((item, i) => <PriceTable
      blocks={blocks}
      blockName={item.blockName}
      title={item.title}
      listItems={item.listItems}
      key={i}
    />)
  }
  //** разобраться с предварительным просмотром изображений , возможно заменить src как в других компонентах */
  return (
    <main className="prices" aria-label="Список работ и их стоимость">
			<Image className="background" src="/background-prices.jpg" width={597} height={620} alt="Ремонт авто" priority={true} />
      {scroll > maxScroll && <ButtonUp />}
      <div className="prices__container">
        {createPriceTable()}
      </div>
    </main>
  )
}