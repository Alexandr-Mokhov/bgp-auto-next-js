import transmission from '../../public/service-transmission.png';
import diagnostics from '../../public/service-diagnostics.png';
import chassis from '../../public/service-chassis.png';
import engine from '../../public/service-engine.png';
import to from '../../public/service-to.png';

export const services = [
  {
    path: 'engine',
    srcImage: engine,
    elementTitle: 'Ремонт двигателя'
  },
  {
    path: 'chassis',
    srcImage: chassis,
    elementTitle: 'Ремонт ходовой'
  },
  {
    path: 'transmission',
    srcImage: transmission,
    elementTitle: 'Ремонт КПП'
  },
  {
    path: 'to',
    srcImage: to,
    elementTitle: 'Плановое ТО'
  },
  {
    path: 'diagnostics',
    srcImage: diagnostics,
    elementTitle: 'Диагностика'
  }
]
