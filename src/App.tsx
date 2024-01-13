import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {'->'} Vercel</h1>
      <div className="card">
        <div style={{ display: 'inline-flex', gap: 8 }}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <button onClick={async () => {
            const resp = await fetch('/api/hello')
            const text = await resp.text()
            console.log(text)
          }}>
            trigger api
          </button>

          <button onClick={async () => {
            const resp = await fetch('/proxy/hello')
            const text = await resp.text()
            console.log(text)
          }}>
            trigger proxy
          </button>

          <button onClick={async () => {
            const resp = await fetch('/proxy/api/hello')
            const text = await resp.text()
            console.log(text)
          }}>
            trigger api proxy
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
