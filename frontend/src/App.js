import { useState } from "react";
import axios from "axios";

function App() {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [ans, setAns] = useState(0);

  const handleChange1 = (e) => {
    e.preventDefault();
    setVar1(e.target.value);
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    setVar2(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000",
      data: {
        value1: var1,
        value2: var2,
      },
    })
      .then((res) => setAns(res.data.answer))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={var1}
        onChange={handleChange1}
        style={{
          margin: "50px auto 10px auto",
          display: "block",
          height: "30px",
          width: "300px",
        }}
      />
      <br />
      <input
        type="text"
        value={var2}
        onChange={handleChange2}
        style={{
          margin: "10px auto",
          display: "block",
          height: "30px",
          width: "300px",
        }}
      />
      <br />
      <button
        onClick={handleClick}
        style={{
          margin: "10px auto",
          display: "block",
          height: "30px",
          width: "300px",
        }}
      >
        Add
      </button>
      <p
        style={{
          margin: "20px auto",
          display: "block",
          height: "30px",
          width: "300px",
        }}
      >
        {ans}
      </p>
    </div>
  );
}

export default App;
