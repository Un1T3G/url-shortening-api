import { SocialsData } from '../constants/socials-data'

export default () => {
  return (
    <div className="footer__column">
      <ul className="footer__social">
        {SocialsData.map((e) => (
          <li className="footer__social__item">
            <a href={e.path} className="footer__social__btn" target="_blank">
              <img src={e.iconUrl} alt="icon" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
