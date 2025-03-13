import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { AnimationControls } from "framer-motion";

export function useScrollAnimation(): [(node?: Element | null) => void, AnimationControls] {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

