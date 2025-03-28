import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Layout from './components/Layout/Layout'
import {Login, Register} from "./pages/index"
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />} />
          <Route path='/create_account' element={<Register />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
