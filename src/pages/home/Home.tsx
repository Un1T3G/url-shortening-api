import GetStarted from './components/get-started/GetStarted'
import Intro from './components/intro/Intro'
import LinkList from './components/link_list/LinkList'
import Statistics from './components/statistics/Statistics'

const Home = () => {
  return (
    <>
      <Intro />
      <LinkList/>
      <Statistics/>
      <GetStarted/>
    </>
  )
}

export default Home
