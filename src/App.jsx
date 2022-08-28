import "./App.css";
import Router from "./Router";
import { Link, BrowserRouter } from "react-router-dom";
// import { Footer, Header } from "./component/features/features";
const pagesArray = ["Gallery", "Videos", "HomePage","PageNotFound","Devices"];
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header/>  */}
        {pagesArray.map((pageName) => (
          <Link to={pageName}>
            <button>{pageName}</button>
          </Link>
        ))}
        <Router />
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
