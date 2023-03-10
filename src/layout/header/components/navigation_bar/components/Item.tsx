interface IProps{
    label: string
}

export default ({label} : IProps) => {
  return <li className="nav__item">
    <a href="#" className="nav__btn">{label}</a>
  </li>
}
