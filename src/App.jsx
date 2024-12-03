import { Routes,Route,Link } from "react-router-dom";
import { Home } from "./secctions/home/Home";
import {Solutions} from './secctions/solutions/Solutions'
import { Portfolio } from "./secctions/portfolio/Portfolio";
import style from "./styles/App.module.css";

function App() {
  return (
    <div className={style["content-app"]}>
      <div className={style["content-header"]}>
        <div className={style["header"]}>
          <div className={style["left-option-header"]}>
            <Link to={"portfolio"} className={style["portfolio"]}>
              <h4>Portfolio</h4>
            </Link>

            <Link to="solutions" className={style["solutions"]}>
              <h4>
                Solutions <span className={style["flag"]}> </span>
              </h4>
            </Link>
          </div>

          <Link to={"/"} className={style["logo-header"]}>
            <div className={style["logo"]}></div>
          </Link>

          <div className={style["right-option-header"]}>
            <div className={style["contact-us"]}>
              <h4>Contac Us</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={style["pages"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </div>

      <footer>
        <div className={style["content-footer"]}>
          <Link to={"/"} className={style["logo-footer"]}>
            <div className={style["logo-foot"]}></div>
          </Link>
          <div className={style["texto-footer"]}>
            <p>Creative Network Live</p>
            <p>&copy; 2024</p>
          </div>
          <div className={style["redes-footer"]}>
            <div className={style["linkedin"]}></div>
            <div className={style["instag"]}></div>
            <div className={style["x"]}></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
