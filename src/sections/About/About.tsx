import { ContactLinks } from "../Links";

export function About() {
  return (
    <section className="mx-auto w-full space-y-8 py-10">
      <header>
        <h1 className="text-[28px] font-[700] ">
          Hello, I'm Richard <span className="rotate-90"> :{")"}</span>
        </h1>
      </header>
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
          <span className="mx-1 font-[500] bg-orange-600 px-0.5 pb-0.5">
            Autodesk
          </span>
          working on Autodesk Fusion
        </div>
        <div>
          <span className=" font-geist-mono text-muted-foreground mr-2">
            Jan-Aug 2025
          </span>
          Intern at
          <span className="mx-1 font-[500] bg-orange-600 px-0.5 pb-0.5">
            Shopify
          </span>
          on Customer Accounts and Login
        </div>
      </section>
      <section>
        <ContactLinks layout="horizontal" />
      </section>
    </section>
  );
}
