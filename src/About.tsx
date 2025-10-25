import { Leader } from "./components/Leader";

export function About() {
  return (
    <div>
      <div className="flex items-center w-full pb-5">
        <h2 className="text-2xl">About</h2>
        <Leader />
      </div>
      <div className="text-foreground leading-relaxed">
        <p>
          Hi, I'm Richard Huang, a software engineer based in Montreal, Canada.
        </p>
        <ul className="mt-4 list-disc list-inside ">
          <li>When I'm not coding, you can find me exploring the outdoors.</li>
          <li>Experimenting with new recipes in the kitchen.</li>
        </ul>
      </div>
    </div>
  );
}