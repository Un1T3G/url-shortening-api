import { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import { Children } from '../../types/children'
import './Button.scss'
import { cn } from '../../utils/cn'

interface IProps {
  type?: 'button' | 'submit' | 'reset'
  children?: Children
  className?: string
  cornerType: 'simple' | 'rounded'
  variant: 'colored' | 'transparent'
}

const Button = ({
  type,
  children,
  className,
  cornerType,
  variant,
  ...rest
}: IProps & Omit<HTMLAttributes<HTMLButtonElement>, 'className'>) => {
  return (
    <button
      type={type ?? 'button'}
      {...rest}
      className={cn('btn', cornerType, variant, className)}
    >
      {children}
    </button>
  )
}

export default Button
