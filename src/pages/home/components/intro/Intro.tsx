import { illustrationWorkingImg } from '../../../../assets/img'
import Button from '../../../../ui/button/Button'
import Container from '../../../../ui/container/Container'
import Input from '../input/Input'
import './Intro.scss'

export default () => {
  return (
    <section className="intro">
      <Container>
        <div className="intro__row">
          <div className="intro__column text-content">
            <h1 className="intro__title">More than just shorter links</h1>
            <p className="intro__text">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button className="intro__btn" type="rounded" variant="colored">
              Get Started
            </Button>
          </div>
          <div className="intro__column image-content">
            <img className='intro__img' src={illustrationWorkingImg} alt="illustration of working" />
          </div>
        </div>
      </Container>
      <Input/>
    </section>
  )
}
