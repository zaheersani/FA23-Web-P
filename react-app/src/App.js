import logo from './logo.svg';
import './App.css';

import { MyComp as MyImportedComp } from './MyComponentNamedExport';

function App() {
  const myJSX = <h3>This is my JSX</h3>
  return (
    <div>
      <h1 className='mystyle'>This is My Component</h1>
      {myJSX}
      <MyImportedComp count={1} msg="My Msg" />
      <MyImportedComp count={2} />
      <MyImportedComp count={3} />
    </div>
  )
}

export default App;
