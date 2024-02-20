import './Preloader.css';

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__background" />
      <div className="preloader__container">
        <div className="preloader__container-red-gear">
          <div className="preloader__gear preloader__gear_red" />
        </div>
        <div className="preloader__container-black-gear">
          <div className="preloader__gear preloader__gear_black" />
          <div className="preloader__gear preloader__gear_black" />
        </div>
      </div>
    </div>
  )
}