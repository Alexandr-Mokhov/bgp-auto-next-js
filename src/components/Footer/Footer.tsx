import Image from 'next/image';
import logoVk from '@/../public/logo-vk.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copywriting">
          <div>
            <span>
              <strong>
                &copy;&nbsp;{new Date().getFullYear()}
              </strong>
            </span>
            <span className="footer__copywriting_name">
              <strong>
                &nbsp;BGP&nbsp;AUTO&nbsp;
              </strong>
            </span>
          </div>
          <span>created&nbsp;by &nbsp;
            <a className="footer__copywriting_author" href="https://github.com/Alexandr-Mokhov" target="_blank" rel="noreferrer">
              Alexander&nbsp;Mokhov
            </a>
          </span>
        </div>
        <a href="https://vk.com/bgp.auto" target="_blank" rel="noreferrer" className="footer__social-link">
          <Image
            className="footer__social-icon"
            src={logoVk}
            width={30}
            height={30}
            alt="ВКонтакте"
          />
        </a>
      </div>
    </footer>
  )
}