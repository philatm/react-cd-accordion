import { useState } from "react";
import Question from "./components/Question.jsx";
import data from "./data.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>FAQ</h1>

        {data.map((q) => (
          <Question key={q.id} title={q.title} info={q.info} />
        ))}
      </div>
    </>
  );
}

export default App;
