import { useEffect } from 'react'
import { LINKS_KEY } from '../../../../constants/keys'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import { ILink } from '../../../../models/ILink'
import { setLinks } from '../../../../store/slices/links/links.slice'
import Container from '../../../../ui/container/Container'
import Item from './components/Item'
import './Shortens.scss'

export default () => {
  const { links } = useAppSelector((state) => state.linksReducer)

  const [values, setValue] = useLocalStorage<ILink[]>(LINKS_KEY, [])

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLinks(values))
  }, [])

  useEffect(() => {
    setValue(links)
  }, [links])

  return (
    <section className="shortens">
      <Container>
        <ul className="shortens__list">
          {links.map((e) => (
            <Item key={e.shortenLink} {...e} />
          ))}
        </ul>
      </Container>
    </section>
  )
}
