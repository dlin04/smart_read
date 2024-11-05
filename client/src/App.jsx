import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5173/",
});

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked, testing");
  };

  return (
    <>
      <h1>testing fastapi python + react</h1>
      <button onClick={handleClick}>TEST</button>
    </>
  );
}

export default App;
