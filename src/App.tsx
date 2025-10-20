import './App.css'
import { Button } from './components/Button'
import Counter from './components/Counter';
import PasswordField from './components/Password';
import Starships from './components/Starships';

function App() {

  return (
    <div>
      {/*<Button rounded={true}>Botón primario</Button>
      <Button variant='outline'>Botón outline</Button>
      <Button variant='destructive'>Botón destructivo</Button>
      <Counter/>
      <PasswordField></PasswordField>*/}
      <Starships></Starships>
    </div>
  );
}

export default App
