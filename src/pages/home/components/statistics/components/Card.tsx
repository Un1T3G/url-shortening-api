interface IProps {
  iconUrl: string
  title: string
  text: string
}

export default ({ iconUrl, title, text }: IProps) => {
  return (
    <div className="card">
      <div className="card__icon">
        <img className="" src={iconUrl} alt="icon" />
      </div>
      <h2 className="card__title">{title}</h2>
      <p className="card__text">{text}</p>
    </div>
  )
}
