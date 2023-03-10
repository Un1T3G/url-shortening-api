import Button from '../../../../ui/button/Button'
import Container from '../../../../ui/container/Container'
import './GetStarted.scss'

export default () => {
  return (
    <div className="get-started">
      <Container>
        <div className="get-started__row">
          <h1 className="get-started__title">Boost your links today</h1>
          <Button className="get-started__btn" type="rounded" variant="colored">
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  )
}
