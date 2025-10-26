import { ThemeProvider } from "./components/ui/theme-provider";
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="mx-auto w-[650px] border-x-2 border-card min-h-screen px-18 py-8 box-shadow space-y-12 overflow-hidden bg-background text-foreground">
        <Header />
        <About />
        <Experience />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
