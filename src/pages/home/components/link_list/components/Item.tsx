import Button from '../../../../../ui/button/Button'

export default () => {
  return (
    <li className="link-list__item">
      <span className="link-list__item__link-text">https://link.com</span>
      <div className="link-list__item__divider"></div>
      <span className="link-list__item__link-text colored">
        https://link.com
      </span>
      <Button type="simple" variant="colored" className="link-list__item__btn">
        Copy
      </Button>
    </li>
  )
}
