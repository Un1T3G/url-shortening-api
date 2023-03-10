import Container from '../../../../ui/container/Container'
import Item from './components/Item'
import './LinkList.scss'

export default () => {
  return (
    <div className="link-list">
      <Container>
        <ul className="link-list__list">
          <Item />
          <Item />
          <Item />
        </ul>
      </Container>
    </div>
  )
}
