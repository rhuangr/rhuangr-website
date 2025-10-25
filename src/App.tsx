import { ThemeProvider } from "./components/ui/theme-provider";
import { Header } from "./Header";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="mx-auto w-[600px] border-x-2 border-card min-h-screen p-14 box-shadow space-y-14 overflow-hidden bg-background text-foreground">
        <Header />
        <Experience />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
