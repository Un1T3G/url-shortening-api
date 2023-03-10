import Container from '../../../../ui/container/Container'
import List from './components/List'
import './Statistics.scss'

export default () => {
  return (
    <div className="statistics">
      <Container>
        <div className="statistics__text-content">
          <h1 className="statistics__title">Advanced Statistics</h1>
          <p className="statistics__text">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <List />
      </Container>
    </div>
  )
}
