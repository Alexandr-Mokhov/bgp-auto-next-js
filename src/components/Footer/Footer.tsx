import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copywriting">
          <div>
            <span className="footer__copywriting_date">&copy;&nbsp;{new Date().getFullYear()}</span>
            <span className="footer__copywriting_name">BGP&nbsp;AUTO</span>
          </div>
          <span className="footer__copywriting_author">created&nbsp;by&nbsp;
            <a href="https://github.com/Alexandr-Mokhov" target="_blank" rel="noreferrer">
              Alexander&nbsp;Mokhov
            </a>
          </span>
        </div>
        <div className="footer__social">
          <a href="https://vk.com/bgp.auto" target="_blank" rel="noreferrer"><div className="footer__social-icon" /></a>
        </div>
      </div>
    </footer>
  )
}