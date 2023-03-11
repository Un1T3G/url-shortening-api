import Container from '../../ui/container/Container'
import './Footer.scss'
import LinksColumn from './components/LinksColumn'
import LogoColumn from './components/LogoColumn'
import SocialsColumn from './components/SocialsColumn'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__row">
          <LogoColumn/>
          <LinksColumn/>
          <SocialsColumn/>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
