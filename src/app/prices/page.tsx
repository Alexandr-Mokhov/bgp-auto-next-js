"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { MutableRefObject, useEffect, useRef, Suspense } from 'react';
import backgroundPrices from '@/../public/background-prices.jpg';
import PriceTable from '@/components/PriceTable/PriceTable';
import ButtonUp from '@/components/ButtonUp/ButtonUp';
import useScroll from '@/utils/useScroll';
import SearchTable from '@/utils/useSearchParams';
import { prices } from '@/constants/prices';
import './prices.css';

type Block = {
  [key: string]: MutableRefObject<null>,
}

function PricesFallback() {
  const scroll = useScroll();
  const maxScroll = 300;
  const table = SearchTable();

  const blocks: Block = {
    transmission: useRef(null),
    diagnostics: useRef(null),
    chassis: useRef(null),
    engine: useRef(null),
    to: useRef(null),
  }

  const scrollToBlock = (block: string) => {
    if (block in blocks) {
      const element = blocks[block].current;
      if (element) {
        (element as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  useEffect(() => {
    scrollToBlock(table as unknown as string);
  }, [table]);

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
        placeholder="blur"
      />
      {scroll > maxScroll && <ButtonUp />}
      <div className="prices">
        {createPriceTable()}
      </div>
    </main>
  )
}

export default function Prices() {
  return (
    <Suspense>
      <PricesFallback />
    </Suspense>
  )
}
