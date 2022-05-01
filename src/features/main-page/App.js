import Navigation from "../../shared/navigation.component";
import BodyComponent from "../body-content/body.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <body>
        <BodyComponent />
      </body>
    </div>
  );
}

export default App;
