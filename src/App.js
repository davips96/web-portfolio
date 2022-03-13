function App() {
  return (
    <div id="main" className="w-[100vw] h-[100vh] bg-white dark:bg-black">
      <div
        id="navbar"
        className="h-[120px] border-b-[1px] p-[20px] border-red dark:border-pink"
      >
        <h1
          id="title"
          className="text-title font-extrabold text-red dark:text-pink"
        >
          David Bechara
        </h1>
      </div>
      <div id="content" className="relative p-[20px]">
        <section
          id="under-construction"
          className="absolute border rounded-[60px] p-[25px] lg:p-[40px] w-[90vw] lg:w-[65vw] top-[180px] lg:top-[120px] left-[50%] translate-x-[-50%] border-red dark:border-pink"
        >
          <h2
            id="under-construction-title"
            className="text-lg lg:text-xl font-bold text-center text-black dark:text-white"
          >
            🚧 Under Construction 🚧
          </h2>
          <p
            id="under-construction-text"
            className="text-sm lg:text-md font-normal text-justify text-black dark:text-white"
          >
            Hey, thanks for visiting my website! You're a little bit early as
            this is a project I'm currently working and taking my time to
            perfect. The layout you see here is an idea of what I'm working on
            and it's really only here to replace the default{" "}
            <code>create-react-app</code> template. I hope that the next time
            you visit it'll be up. See you next time!
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
