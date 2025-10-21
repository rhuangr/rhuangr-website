import TextType from "./shared/components/TextType";

function App() {
  return (
    <div className="flex flex-col mx-auto w-[550px] mt-20 justify-start">
      <h1>Richard Huang</h1>
      <div className="w-md mt-5 mb-5">
        <TextType
          text={[
            "I am a software developer..",
            "I love coding",
            "Welcome to my portfolio",
            "Let's connect!",
            "Feel free to reach out via email or LinkedIn.",
            "Thank you for visiting my site!",
            "Have a great day!",
            "Goodbye!",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
