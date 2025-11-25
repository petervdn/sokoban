import "./App.css";
import { LevelView } from "./components/LevelView";
import { level2 } from "./data/levels";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1200px",
          maxWidth: "100%",
          backgroundColor: "#1a1a1a",
          padding: "20px",
        }}
      >
        <LevelView level={level2} tileSize={{ width: 80, height: 80 }} />
      </div>
    </div>
  );
}

export default App;
