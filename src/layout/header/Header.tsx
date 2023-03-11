import { useRef, useState } from 'react'
import useOutsideClick from '../../hooks/useOutSide'
import Container from '../../ui/container/Container'
import Logo from './components/Logo'
import HamburgerMenu from './components/navigation_bar/components/HamburgerMenu'
import NavigationBar from './components/navigation_bar/NavigationBar'
import './Header.scss'

const Header = () => {
  const navRef = useRef<HTMLElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const [menuIsOpened, setMenuIsOpened] = useState(false)

  const clickHandler = () => {
    setMenuIsOpened((prev) => !prev)
  }

  const handler = () => {
    setMenuIsOpened(false)
  }

  useOutsideClick([navRef, hamburgerRef], handler)

  return (
      <header className="header">
        <Container>
          <div className="header__row">
            <Logo />
            <NavigationBar navRef={navRef} menuIsOpened={menuIsOpened} />
            <HamburgerMenu
              hamburgerRef={hamburgerRef}
              onClick={clickHandler}
            />
          </div>
        </Container>
      </header>
  )
}

export default Header
