import style from "../../styles/home/home.module.css";

export const Home = () => {
  return (
    <div className={style["content-home"]}>
      <div className={style["video-home"]}></div>

      <div className={style["subtitle-home"]}>
        <div className={style["text-home"]}>
          <p>
            Bridge emotions and <span>BITCOIN</span>: your brand, our strategy
          </p>
        </div>
        <div className={style["btn-home"]}>
          <h4>BOOK A CALL</h4>
        </div>
        <div className={style["btc-img-home"]}>
          <div className={style["btc-img"]}></div>
        </div>

        
      </div>
    </div>
  );
};
