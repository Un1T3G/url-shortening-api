import CallToAction from './components/call-to-action/CallToAction'
import Features from './components/features/Features'
import Hero from './components/hero/Hero'
import Shortens from './components/shortens/Shortens'


const Home = () => {
  return (
    <>
      <Hero />
      <Shortens/>
      <Features/>
      <CallToAction/>
    </>
  )
}

export default Home
