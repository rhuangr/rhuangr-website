export default function Header() {
  return (
    <header className="flex w-full justify-center bg-background py-8 leading-5 ">
      <div className="w-full max-w-4xl">
        <h1 className="text-left font-[700] border-none text-[25px]">
          Richard Huang
          <div className="text-muted-foreground font-[300] text-[12px] mt-1">
            Last updated :
            <span className="font-family-chivo-mono"> 2025-10-25</span>
          </div>
        </h1>
      </div>
    </header>
  );
}
