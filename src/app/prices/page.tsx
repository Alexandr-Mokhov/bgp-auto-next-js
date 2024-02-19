"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation'
import backgroundPrices from '@/../public/background-prices.jpg';
import PriceTable from '@/components/PriceTable/PriceTable';
import ButtonUp from '@/components/ButtonUp/ButtonUp';
import useScroll from '@/utils/useScroll';
import { prices } from '@/constants/prices';
import './prices.css';

type Block = {
  [key: string]: MutableRefObject<null>,
}

export default function Prices() {
  const scroll = useScroll();
  const maxScroll = 300;
  const blocks: Block = {
    transmission: useRef(null),
    diagnostics: useRef(null),
    chassis: useRef(null),
    engine: useRef(null),
    to: useRef(null),
  }

  const searchParams = useSearchParams();
  const table = searchParams ? searchParams.get('table') : null;

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
        priority={true}
      />
      {scroll > maxScroll && <ButtonUp />}
      <div className="prices">
        {createPriceTable()}
      </div>
    </main>
  )
}


// const blocks: Block = {
//   'transmission': useRef(null),
//   'diagnostics': useRef(null),
//   'chassis': useRef(null),
//   'engine': useRef(null),
//   'to': useRef(null),
// }

// const blocks: Block = {
//   transmission: useRef(null),
//   diagnostics: useRef(null),
//   chassis: useRef(null),
//   engine: useRef(null),
//   to: useRef(null),
// }

// type Block = {
//   transmission: MutableRefObject<null>,
//   diagnostics: MutableRefObject<null>,
//   chassis: MutableRefObject<null>,
//   engine: MutableRefObject<null>,
//   to: MutableRefObject<null>,
// }

// type Block = {
//   'transmission': MutableRefObject<null>,
//   'diagnostics': MutableRefObject<null>,
//   'chassis': MutableRefObject<null>,
//   'engine': MutableRefObject<null>,
//   'to': MutableRefObject<null>,
// }

// export default function Prices() {
//   const scroll = useScroll();
//   const maxScroll = 300;
//   const blocks = {
//     'transmission': useRef<HTMLDivElement>(null),
//     'diagnostics': useRef<HTMLDivElement>(null),
//     'chassis': useRef<HTMLDivElement>(null),
//     'engine': useRef<HTMLDivElement>(null),
//     'to': useRef<HTMLDivElement>(null),
//   }

//   const searchParams = useSearchParams();
//   const table = searchParams ? searchParams.get('table') : null;

//   // type blocksType = {
//   //   'transmission': MutableRefObject<undefined>;
//   //   'diagnostics': MutableRefObject<undefined>;
//   //   'chassis': MutableRefObject<undefined>;
//   //   'engine': MutableRefObject<undefined>;
//   //   'to': MutableRefObject<undefined>;
//   // }
//   console.log(table);
//   const scrollToBlock = (block: string) => {
//     // console.log(blocks[block], block);

//     if (block in blocks) {
//       (blocks[block] as {current: HTMLElement}).current.scrollIntoView({
//         behavior: "smooth"
//       });
//     }
//   }

//   useEffect(() => {
//     scrollToBlock(table);
//   }, [table]);

//   function createPriceTable() {
//     return prices.map((item, i) => <PriceTable
//       blocks={blocks}
//       blockName={item.blockName}
//       title={item.title}
//       listItems={item.listItems}
//       key={i}
//     />)
//   }

//   return (
//     <main className="main" aria-label="Список работ и их стоимость">
//       <Image
//         className="background"
//         src={backgroundPrices}
//         width={1000}
//         height={1000}
//         alt="Ремонт авто"
//         priority={true}
//       />
//       {scroll > maxScroll && <ButtonUp />}
//       <div className="prices">
//         {createPriceTable()}
//       </div>
//     </main>
//   )
// }