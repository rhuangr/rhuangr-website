import { ThemeProvider } from "./components/ui/theme-provider";
import { About } from "./sections/About/About";
import { motion } from "framer-motion";
import { RhuangrContextProvider } from "./sections/About/rhuangrContext";
import { RHUANGGPT } from "./sections/About/RHUANGGPT";
import Header from "./sections/Header/Header";
import GradualBlur from "./components/ui/progressive-blur";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RhuangrContextProvider>
        <div className="flex h-screen w-full flex-col overflow-hidden">
          <div className="relative flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
            <div className="flex w-full max-w-lg mx-auto flex-col">
              <div className=" y-8 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Header />
                  <About />
                </motion.div>
              </div>
            </div>

            <div className="sticky bottom-0 left-0 right-0 pointer-events-none">
              <GradualBlur
                position="bottom"
                height="3rem"
                strength={0.5}
                zIndex={10}
              />
            </div>
          </div>

          <footer className="flex flex-col w-full items-center bg-background px-4 pb-6 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
              <RHUANGGPT />
            </div>
            <div className="mt-4 text-center text-[12px] text-muted-foreground font-[300]">
              © 2023 - 2024 Richard Huang. All rights reserved.
            </div>
          </footer>
        </div>
      </RhuangrContextProvider>
    </ThemeProvider>
  );
}

export default App;
