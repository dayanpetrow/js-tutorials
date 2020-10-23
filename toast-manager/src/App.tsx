import React from "react";
import "./App.css";
import { toast } from "./components/ToastManager";

// display a toast message when the page loads
// you can call toast.destroy('my-id') from anywhere to remove this message manually with code
toast.show({
  id: 'my-id',
  title: "Onload toast title",
  content: "Onload toast body",
  duration: 10000,
});

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
