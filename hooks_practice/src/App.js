import './App.css';
import UsingRef from "./useRef";
import UsingMemo from "./useMemo";
import UsingCallback from "./useCallback";

function App() {
  return (
    <div>

        <h1>UseRef: </h1>
      <UsingRef/>

        <h1>UseMemo: </h1>
        <UsingMemo/>

        <h1>UseCallback: </h1>
        <UsingCallback/>

    </div>
  );
}

export default App;
