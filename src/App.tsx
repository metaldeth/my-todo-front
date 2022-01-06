import { BrowserRouter } from 'react-router-dom';
import './app.scss'
import { TestDrive } from './domains/testDrive';

function App() {
  return (
    <BrowserRouter>
      <TestDrive/>
    </BrowserRouter>
  );
}

export default App;
