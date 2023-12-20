import React, { useState } from "react";

function Question({ title, info }) {
  const [visible, setVisible] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "-" : "+"}
        </button>
      </header>
      {visible ? <p>{info}</p> : null}
    </article>
  );
}

export default Question;
