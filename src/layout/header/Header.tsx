import Container from '../../ui/container/Container'
import Logo from './components/Logo'
import NavigationBar from './components/navigation_bar/NavigationBar'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__row">
          <Logo />
          <NavigationBar />
        </div>
      </Container>
    </header>
  )
}

export default Header
