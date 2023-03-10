import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Layout from '../../layout/Layout'
import { AppRoutes } from '../../routes/app.routes'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={AppRoutes.HOME} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
