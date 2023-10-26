import { MyComp as MyStylishComp } from "./MyComponentNamedExport";

function App() {
  return (
    <div>
      <MyStylishComp count={1} msg="This is my Msg after Import" />
      <MyStylishComp count={2} msg="This is NOT my Msg" />
      <MyStylishComp />
    </div>
  );
}

export default App;
