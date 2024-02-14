import "bootstrap/dist/css/bootstrap.min.css";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card1 from "./components/Card.tsx";

function App() {
  // const [count, setCount] = useState(0);
  const nextFunction = (a: number) => a + 1;
  const prevFunction = (a: number) => a - 1;

  const tutorialData: {
    title: string;
    description: string;
    bgColor: string;
    image: any;
  }[] = [
    {
      title: "Dedica moltes hores",
      description:
        "Un mínim de 30 hores a la setmana. Si no tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, pero notaràs una millora ràpidament.",
      bgColor: "#4DA2A9",
      image: "src/assets/time_managment.svg",
    },
    {
      title: "Programa projectes propis",
      description:
        "Més val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i implicació en el projecte ajudarà a accelerar el teu aprenentatje.",
      bgColor: "#D3D4D9",
      image: "src/assets/programming.svg",
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrés i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#FFD167",
      image: "src/assets/meditation.svg",
    },
  ];
  return (
    <>
      <Card1
        items={tutorialData}
        nextStep={nextFunction}
        prevStep={prevFunction}
      />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
  </p> */}
    </>
  );
}

export default App;
