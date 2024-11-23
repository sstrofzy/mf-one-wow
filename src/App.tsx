import './App.css'
import { useAuthenticate } from './useAuthenticate'

function App() {
  const { authenticated } = useAuthenticate();
  return (
    <>
        <h2>Aplicacion de autenticacion: {authenticated ? "Logueado" : "Deslogueado"}</h2>
    </>
  )
}

export default App
