import { RefObject } from 'react'
import { iconBars } from '../../../../../assets/img'

interface IProps {
  hamburgerRef: RefObject<HTMLButtonElement>
  onClick: VoidFunction
}

export default ({ hamburgerRef, onClick }: IProps) => {
  return (
    <button ref={hamburgerRef} onClick={onClick} className="hamburger-btn">
      <img src={iconBars} alt="menu" />
    </button>
  )
}
