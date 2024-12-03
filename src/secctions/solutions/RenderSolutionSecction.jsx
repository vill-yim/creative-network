import style from "../../styles/solutions/solutions.module.css";


export const RenderSolutionSecction = ({ description, title }) => {
  return (
    <div className={style["render-solutions"]}>
      <div className={style["title-solution-component"]}>
        <h4>{title}</h4>
      </div>

      <div className={style["description-solution-component"]}>
        <p>{description}</p>
      </div>
    </div>
  );
};
