import { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import { RhuangrContextProvider } from "./sections/About/rhuangrContext";
import { NavLinks } from "./components/NavLinks";
import AppRoutes from "./AppRoutes";
import { RHUANGGPT } from "./sections/About/RHUANGGPT";
import Balatro from "./components/Balatro";
// 'motion' removed because it was unused in this file

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RhuangrContextProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </RhuangrContextProvider>
    </ThemeProvider>
  );
}

function AppLayout() {
  return (
    <div className="relative flex flex-col min-h-screen text-foreground selection:bg-orange-500 hover:bg-orange-600">
      <div className="fixed h-screen w-full">
        <Balatro mouseInteraction={false}  />
      </div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 z-1">
        <RHUANGGPT />
        <div className="text-center text-xs pt-2"> © 2025 Made by Richard Huang</div>
      </div>
      <div className="min-h-screen relative w-full">
        <div className="fixed left-[8vw] top-1/2 -translate-y-20 z-10 px-20 text-left ">
          <NavLinks />
        </div>

        <div className="relative bg-background rounded-b-3xl shadow-lg/20 z-5">
          <div className="relative w-full text-foreground mb-40 ">
            <main className="min-h-[95vh] mx-auto max-w-lg flex items-center px-7 pb-7 md:px-0">
              <AppRoutes />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-muted-foreground"> Still curious? Keeping scrolling</div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
