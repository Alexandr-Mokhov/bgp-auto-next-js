"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
// import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import backgroundPrices from '@/../public/background-prices.jpg';
import PriceTable from '@/components/PriceTable/PriceTable';
import ButtonUp from '@/components/ButtonUp/ButtonUp';
import useScroll from '@/utils/useScroll';
import { prices } from '@/constants/prices';
// import './prices.css';

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

  return (
    <main className="main" aria-label="Список работ и их стоимость">
      <Image
        className="background"
        src={backgroundPrices}
        width={1000}
        height={1000}
        alt="Ремонт авто"
        priority={true}
      />
      {scroll > maxScroll && <ButtonUp />}
      <div className="prices">
        {createPriceTable()}
      </div>
    </main>
  )
}