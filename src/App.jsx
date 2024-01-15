import "./App.css";
import Header from "./Header/Header";
import List from "./List";
import Filter from "./Filter";
import Quiz from "./Quiz/Quiz";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="content">
          <Filter onChange={setFilter} />
          <List filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default App;
