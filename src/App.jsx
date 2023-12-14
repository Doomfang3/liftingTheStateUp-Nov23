import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import DisplayCounter from './components/DisplayCounter'
import { useState } from 'react'
import CountIncrement from './components/CountIncrement'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <h1>Vite + React</h1>
      <div className='card'>
        <Counter count={count} setCount={setCount} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <DisplayCounter count={count} />
      <CountIncrement handleIncrement={() => setCount(count + 3)} />
    </>
  )
}

export default App
