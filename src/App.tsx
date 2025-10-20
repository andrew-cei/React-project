import './App.css'
import { Button } from './components/Button'

function App() {

  return (
    <div>
      <Button rounded={true}>Botón primario</Button>
      <Button variant='outline'>Botón outline</Button>
      <Button variant='destructive'>Botón destructivo</Button>
    </div>
  );
}

export default App
