export default function Header() {
  return (
    <header className="flex w-full justify-center bg-background mx-10 py-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-left border-none text-[18px]">
          Richard Huang
          <div className="text-muted-foreground font-[300] text-subheading mt-1">
            Last updated :
            <span className="font-family-chivo-mono"> 2025-10-25</span>
          </div>
        </h1>
      </div>
    </header>
  );
}
