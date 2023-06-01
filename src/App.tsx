import './App.css';
import Breakpoint from './components/Breakpoint';
import { Lg, Md, Sm, Xs } from './components/Screens';

function App() {
  return (
    <>
      <Breakpoint size='xs'>
        <Xs />
      </Breakpoint>
      <Breakpoint size='sm'>
        <Sm />
      </Breakpoint>
      <Breakpoint size='md'>
        <Md />
      </Breakpoint>
      <Breakpoint size='lg'>
        <Lg />
      </Breakpoint>
    </>
  );
}

export default App;
