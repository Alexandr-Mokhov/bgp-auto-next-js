import './ButtonUp.css';

export default function ButtonUp() {

  const handleClick = () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

  return (
    <button className="button-up" onClick={handleClick}/>
  )
}