import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copywriting">
          <div>
            <span className="footer__copywriting_date">
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
          <span className="footer__copywriting_author">created&nbsp;by &nbsp;
            <a href="https://github.com/Alexandr-Mokhov" target="_blank" rel="noreferrer">
              Alexander&nbsp;Mokhov
            </a>
          </span>
        </div>
        <a href="https://vk.com/bgp.auto" target="_blank" rel="noreferrer" className="footer__social-icon"><div /></a>
      </div>
    </footer>
  )
}