import logo from './logo.svg';

import { Button, ButtonGroup, Card } from 'flowbite-react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <ButtonGroup>
          <Button>Learn React</Button>
          <Button>Learn Next</Button>
          <Button>Learn Vue</Button>
          <Button>Learn WP</Button>
        </ButtonGroup> */}
        <Card>Yes</Card>
      </header>
    </div>
  );
}

export default App;
