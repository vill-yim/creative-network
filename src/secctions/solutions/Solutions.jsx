import style from "../../styles/solutions/solutions.module.css";
import { RenderSolutionSecction } from "./RenderSolutionSecction";

export const Solutions = () => {
  return (
    <div className={style["solutions"]}>
      <RenderSolutionSecction
        description={
          "At Creative Network, we deliver branding, web design, motion graphics, and digital strategy to help your business stand out. We combine creativity and innovation to create powerful visual experiences that engage and connect with your audience."
        }
        title={"our services"}
      />
      <RenderSolutionSecction
        description={
          "At Creative Network, we deliver branding, web design, motion graphics, and digital strategy to help your business stand out. We combine creativity and innovation to create powerful visual experiences that engage and connect with your audience."
        }
        title={"our services"}
      />{" "}
      <RenderSolutionSecction
        description={
          "At Creative Network, we deliver branding, web design, motion graphics, and digital strategy to help your business stand out. We combine creativity and innovation to create powerful visual experiences that engage and connect with your audience."
        }
        title={"our services"}
      />
    </div>
  );
};
