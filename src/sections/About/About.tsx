import { ContactLinks } from "../Links";
import { HighlightedText } from "../utils/utils";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="mx-auto w-full space-y-8">
      <motion.h1
        animate={{ y: -10}}
        initial={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.75 }}
        className="text-[22px] font-[700] pb-1"
      >
        Hello, I'm Richard
        <motion.span
          animate={{ rotate: 93 }}
          transition={{
            duration: 1.2,
            type: "spring",
            delay: 0.5,
          }}
          className="inline-block"
          initial={{ rotate: 0 }}
        >
          <HighlightedText className="!px-2 pb-1" text=":)" />
        </motion.span>
      </motion.h1>

      <section>
        <h2>About</h2>
        <div>I'm a software engineer based in Montreal, Canada.</div>
        <div>
          I'm interested in frontend dev, data, AI and systems engineering.
        </div>
      </section>
      <section>
        <h2>Work</h2>
        <div>
          <span className=" font-geist-mono text-muted-foreground mr-2">
            Jan-May 2026
          </span>
          Incoming intern at
          <HighlightedText text="Autodesk" />
          working on Autodesk Fusion
        </div>
        <div>
          <span className=" font-geist-mono text-muted-foreground mr-2">
            Jan-Aug 2025
          </span>
          Intern at
          <HighlightedText text="Shopify" />
          on Customer Accounts and Login
        </div>
      </section>
      {/* <section>
       <h2>Other</h2>
        <div>
          Almost a professional League of Legends player.
          <br />
          Like to sing and play the piano
        </div>
        </section> */}
      <section className="pt-3">
        <ContactLinks />
      </section>
    </section>
  );
}
