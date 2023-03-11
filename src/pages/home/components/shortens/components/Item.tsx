import { useEffect, useState } from 'react'
import useDebounce from '../../../../../hooks/useDebounce'
import Button from '../../../../../ui/button/Button'

interface IProps {
  originalLink: string
  shortenLink: string
}

export default ({ originalLink, shortenLink }: IProps) => {
  const [copied, setCopied] = useState(false)

  const clickHandler = () => {
    if(copied){
      return;
    }

    if (navigator) {
      navigator.clipboard.writeText(shortenLink)
    }
    setCopied(true)
  }

  const debouncedValue = useDebounce(copied, 500)

  useEffect(() => {
    setCopied(false)
  }, [debouncedValue])

  return (
    <li className="shortens__item">
      <span className="shortens__item__link-text">{originalLink}</span>
      <div className="shortens__item__divider"></div>
      <span className="shortens__item__link-text colored">{shortenLink}</span>
      <Button
        onClick={clickHandler}
        cornerType="simple"
        variant="colored"
        className="shortens__item__btn"
      >
        {copied ? 'Copied' : 'Copy'}
      </Button>
    </li>
  )
}
