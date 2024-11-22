import Animals from './components/Animals'
import logo from './assets/minizoo.png'
import './App.css'

function App() {
  return (
    <main className="p-16 main">
      <div className="flex flex-row w-full justify-start">
        <img src={logo} alt="logo" className="max-w-72" />
      </div>
      <Animals></Animals>
    </main>
  )
}

export default App
