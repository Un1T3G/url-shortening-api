import Button from '../../../../ui/button/Button'
import Container from '../../../../ui/container/Container'
import './CallToAction.scss'

export default () => {
  return (
    <section className="call-to-action">
      <Container>
        <div className="call-to-action__row">
          <h1 className="call-to-action__title">Boost your links today</h1>
          <Button
            className="call-to-action__btn"
            cornerType="rounded"
            variant="colored"
          >
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  )
}
