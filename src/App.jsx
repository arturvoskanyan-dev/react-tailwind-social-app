import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import {Login} from "./pages/index"
import './App.css'

function App() {
  return (
    <section className="">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
