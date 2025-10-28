import { GradientText } from "../components/GradientText";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.div layout className="flex justify-start items-center mb-3">
      <div className="text-left">
        <h1>
          <GradientText className="text-[40px] leading-[1.2em] font-[650]" animationSpeed={0}>
            rhuangr
          </GradientText>
        </h1>
        <div className="text-muted-foreground text-subheading">
          Last updated :
          <span className="font-family-chivo-mono"> 2025-10-25</span>
        </div>
      </div>{" "}
      {/* <h1>
          <GradientText className="text-[40px] font-[650]" animationSpeed={0}>
            rhuangr
          </GradientText>
        </h1>
        <div className="text-muted-foreground text-subheading">
          Last updated :
          <span className="font-family-chivo-mono"> 2025-10-25</span>
        </div> */}
      {/* <img src="Assets/headshot.jpg" alt="Logo" className="ml-5 h-25 w-26 rounded-lg" /> */}
    </motion.div>
  );
}
