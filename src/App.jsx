import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import s3Logo from '/s3.svg'
import cloudfront from '/cloudfront.svg'

import './App.css'

function App() {

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={s3Logo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={cloudfront} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Frontend Application Vite + ReactJS + AWS S3 + CloudFront</h1>
    </>
  )
}

export default App
