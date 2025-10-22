import TextType from "./shared/components/TextType";
import Button from "./shared/components/Button";
import { Mail } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col mx-auto w-[570px] mt-20 justify-start">
      <div className="flex items-center">
        <h1>Richard</h1>
        <div className="flex flex-row w-full justify-between items-center m-5">
          <Button
            link="https://github.com/rhuangr"
            size="3.0em"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .323.216.7.825.582C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            }
          />
          <Button
            link="https://www.linkedin.com/in/rhuangr/"
            size="3.0em"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.5 0h-15C2.01 0 0 2.01 0 4.5v15C0 21.99 2.01 24 4.5 24h15c2.49 0 4.5-2.01 4.5-4.5v-15C24 2.01 21.99 0 19.5 0zM8.25 20.25H5.25V9h3V20.25zM6.75 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm15 12.75h-3v-5.25c0-1.25-.025-2.875-1.75-2.875-1.75 0-2 1.25-2 2.875V20.25h-3V9h3v1.5c.4-.75 1.375-1.5 2.875-1.5 3.25 0 3.875 2.125 3.875 5.25V20.25z" />
              </svg>
            }
          />
          <Button
            link="mailto:richardhuang197@gmail.com"
            size="3.0em"
            icon={<Mail className="w-[3.0em] h-[3.0em]" />}
          />
        </div>
      </div>
      <h1 className="text-right">Huang</h1>
      <div className="w-md h-[250px] m-8">
        <TextType
          text={[
            "Hello, my name is Richard Huang.",
            "I am a software engineer specializing in web development.",
            "Ask me anything! (my AI knows a lot about me...)",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
