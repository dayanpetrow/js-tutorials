import React from "react";
import "./App.css";
import { toast } from "./components/ToastManager";

toast.show({
  title: "Onload toast title",
  content: "Onload toast body",
  duration: 3000,
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() =>
            toast.show({
              title: "Toast title",
              content: "Toast body",
              duration: 3000,
            })
          }
        >
          Show toast
        </button>
      </header>
    </div>
  );
}

export default App;
