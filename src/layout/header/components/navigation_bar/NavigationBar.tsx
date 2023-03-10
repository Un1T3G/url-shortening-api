import Button from '../../../../ui/button/Button'
import Item from './components/Item'
import './NavigationBar.scss'

export default () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <Item label="Features" />
        <Item label="Pricing" />
        <Item label="Resources" />
        <div className="nav__divider"></div>
        <div className="nav__actions">
          <Button
            className="nav__action-btn"
            type="rounded"
            variant="transparent"
          >
            Sign in
          </Button>
          <Button className="nav__action-btn" type="rounded" variant="colored">
            Login
          </Button>
        </div>
      </ul>
    </nav>
  )
}
