import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
