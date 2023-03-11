import Container from '../../../../ui/container/Container'
import List from './components/List'
import './Features.scss'

export default () => {
  return (
    <section className="features">
      <Container>
        <div className="features__text-content">
          <h1 className="features__title">Advanced Statistics</h1>
          <p className="features__text">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <List />
      </Container>
    </section>
  )
}
