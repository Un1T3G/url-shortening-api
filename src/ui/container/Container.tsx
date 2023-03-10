import { HTMLAttributes } from 'react'
import { Children } from '../../types/children'
import './Container.scss'
import { cn } from '../../utils/cn'

interface IProps {
  children?: Children
  className?: string
}

const Container = ({
  children,
  className,
  ...rest
}: IProps & Omit<HTMLAttributes<HTMLDivElement>, 'className'>) => {
  return (
    <div {...rest} className={cn('container', className)}>
      {children}
    </div>
  )
}

export default Container
