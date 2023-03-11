import { useAppSelector } from '../../../../hooks/redux'
import Container from '../../../../ui/container/Container'
import Item from './components/Item'
import './Shortens.scss'

export default () => {
  const { links } = useAppSelector((state) => state.linksReducer)

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
