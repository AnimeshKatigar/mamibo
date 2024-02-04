import { motion } from "framer-motion";

export default function Reveal({
  delay,
  customClassName="",
  children,
  customInitial = null,
  customFinal = null,
}) {
  return (
    <motion.div
      initial={customInitial ?? { opacity: 0, translateY: 90 }}
      whileInView={customFinal ?? { opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      // transition={{ duration: 1, type: "tween" }}
      // variants={{
      //   hidden: { opacity: 0, translateY: 90 },
      //   visible: { opacity: 1, translateY: 0 },
      // }}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: delay ?? 0.1,
        ease: "easeOut",
      }}
      className={customClassName}
      // initial="hidden"
      // animate="visible"
    >
      {children}
    </motion.div>
  );
}
