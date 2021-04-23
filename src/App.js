import NavigationBar from "./components/navigation/NavigationBar";
import sections from "./sections";

function App() {
  return (
    <div className="flex">
      <NavigationBar />
      <div className="flex flex-col w-screen">
        {sections.map((section) => (
          <section.component />
        ))}
      </div>
    </div>
  );
}

export default App;
