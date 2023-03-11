import { illustrationWorkingImg } from '../../../../assets/img'
import Button from '../../../../ui/button/Button'
import Container from '../../../../ui/container/Container'
import Form from '../form/Form'
import './Hero.scss'

export default () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__row">
          <div className="hero__column text-content">
            <h1 className="hero__title">More than just shorter links</h1>
            <p className="hero__text">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button
              className="hero__btn"
              cornerType="rounded"
              variant="colored"
            >
              Get Started
            </Button>
          </div>
          <div className="hero__column image-content">
            <img
              className="hero__img"
              src={illustrationWorkingImg}
              alt="illustration of working"
            />
          </div>
        </div>
      </Container>
      <Form/>
    </section>
  )
}
