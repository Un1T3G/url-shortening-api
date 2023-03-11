interface IProps {
  label: string
  links: { label: string; path: string }[]
}

export default ({ label, links }: IProps) => {
  return (
    <div className="footer__link-list">
      <h2 className="footer__link-list__label">{label}</h2>
      <ul className="footer__link-list__list">
        {links.map((e) => (
          <li key={e.label} className="footer__link-list__item">
            <a href={e.path} className="footer__link-list__btn">
              {e.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
