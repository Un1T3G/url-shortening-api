import { HTMLAttributes } from 'react'
import { Children } from '../../types/children'
import './Button.scss'
import { cn } from '../../utils/cn'

interface IProps {
  children?: Children
  className?: string
  type: 'simple' | 'rounded'
  variant: 'colored' | 'transparent'
}

const Button = ({
  children,
  className,
  type,
  variant,
  ...rest
}: IProps & Omit<HTMLAttributes<HTMLButtonElement>, 'className'>) => {
  return (
    <button {...rest} className={cn('btn', type, variant, className)}>
      {children}
    </button>
  )
}

export default Button
