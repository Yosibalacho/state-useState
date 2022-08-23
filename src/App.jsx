import { useState } from "react";
import "./App.css";
// import Gallery from "./component/pages/Gallery/Gallery";
// import HomePage from "./component/pages/HomePage/HomePage";
// import Videos from "./component/pages/Videos/Videos";
import Router from "./Router";
const pages = ["HomePage", "Gallery", "Videos"];
function App() {
  const [pageNum, setPageNum] = useState("HomePage");

  return (
    <div>
      {pages.map((pageName) => (
        <button onClick={() => setPageNum(pageName)}>{pageName} </button>
      ))}
      <Router pageNum={pageNum}/>
    </div>
  );
}
export default App;
