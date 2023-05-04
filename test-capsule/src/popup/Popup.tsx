// window.process = {}
// window.global = {} as any
console.log('before all')
import { useState } from 'react'
import './Popup.css'
import Capsule, { Environment } from '@usecapsule/web-sdk'
declare global {
  interface Window {
    process: any;
  }
}

function App() {
  const capsule = new Capsule(Environment.BETA);
  const [crx, setCrx] = useState('create-chrome-ext')
  // console.log('capsule', capsule)
  return (
    <main>
      <h3>Updated Popup!</h3>

      <h6>v 0.0.0</h6>

      <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
        Power by {crx}
      </a>
    </main>
  )
}

export default App
