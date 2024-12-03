import style from "../../styles/portfolio/portfolio.module.css";

export const Portfolio = () => {
  return (
    <div className={style["section-portfolio"]}>
      <div className={style["header-portfolio"]}>
        <div className={style["content-header"]}>social</div>
      </div>

      <div className={style["info-portfolio"]}>
        <div className={style["title-portfolio"]}>
          <h4>EXPLORE OUR PORTFOLIO</h4>
        </div>

        <div className={style["text-portfolio"]}>
          <p>
            Discover how we bring ideas to life with creativity and precision.
            From impactful designs to captivating animations and innovative
            strategies, we create unique experiences that leave a lasting
            impression.
          </p>
        </div>
      </div>

      <div className={style["container-cards"]}>
        <div className={`${style.card} ${style.card1}`}>
          Tarjeta 1
          <div className={`${style.hoverCard} ${style.right}`}>Derecha</div>
        </div>
        <div className={`${style.card} ${style.card2}`}>
          Tarjeta 2
          <div className={`${style.hoverCard} ${style.bottom}`}>Abajo</div>
        </div>
        <div className={`${style.card} ${style.card3}`}>
          Tarjeta 3
          <div className={`${style.hoverCard} ${style.top}`}>Arriba</div>
        </div>
        <div className={`${style.card} ${style.card4}`}>
          Tarjeta 4
          <div className={`${style.hoverCard} ${style.left}`}>Izquierda</div>
        </div>
      </div>
    </div>
  );
};
