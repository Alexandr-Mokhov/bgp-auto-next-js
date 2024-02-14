import './PriceTable.css';

type PropsType = {
  blocks: any,
  blockName: string,
  title: string,
  listItems: {
      name: string,
      price: number
    }[],
}

export default function PriceTable({ blocks, blockName, title, listItems }: PropsType) {
  function createListItem() {
    return listItems.map((item, i) => {
      return <li className="prices__table-name" key={i}>
        {item.name}&nbsp;
        <span className="prices__table-price">от {item.price}</span>
      </li>;
    })
  }

  return (
    <div className="prices__type-work">
      <h2 className="prices__title" ref={blocks[blockName]}>{title}</h2>
      <ul className="prices__table">
        <li className="prices__table-name prices__table-name_head">
          Наименование работ&nbsp;
          <span className="prices__head-price">Стоимость, ₽</span>
        </li>
        {createListItem()}
        <li className="prices__table-name">
          Прочий мелкосрочный ремонт&nbsp;
          <span className="prices__table-price">расчет по факту</span>
        </li>
      </ul>
    </div>
  )
}
