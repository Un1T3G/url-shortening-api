import { RefObject } from 'react'
import Button from '../../../../ui/button/Button'
import { cn } from '../../../../utils/cn'
import Item from './components/Item'
import './NavigationBar.scss'

interface IProps{
  navRef: RefObject<HTMLElement>
  menuIsOpened: boolean
}

export default ({navRef, menuIsOpened} : IProps) => {
  return (
    <nav ref={navRef} className={cn('nav', menuIsOpened ? 'show' : undefined)}>
      <ul className="nav__list">
        <Item label="Features" />
        <Item label="Pricing" />
        <Item label="Resources" />
        <div className="nav__divider"></div>
        <div className="nav__actions">
          <Button
            className="nav__action-btn"
            cornerType="rounded"
            variant="transparent"
          >
            Sign in
          </Button>
          <Button
            className="nav__action-btn"
            cornerType="rounded"
            variant="colored"
          >
            Login
          </Button>
        </div>
      </ul>
    </nav>
  )
}
