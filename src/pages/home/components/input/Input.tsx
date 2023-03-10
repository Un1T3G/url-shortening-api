import Button from '../../../../ui/button/Button'
import Container from '../../../../ui/container/Container'
import './Input.scss'

export default () => {
  return (
    <form action="POST" className="input">
      <Container>
        <div className="input__row">
          <div className="input__container">
            <input type="text" placeholder='Paste your link here' />
            <span className="input__error-text">Error text</span>
          </div>
          <Button className="input__btn" type="simple" variant="colored">
            Shorten It!
          </Button>
        </div>
      </Container>
    </form>
  )
}
