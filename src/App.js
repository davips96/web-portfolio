import NavigationBar from "./components/navigation/NavigationBar";
import NavigationTitle from "./components/navigation/NavigationTitle";
import NavigationItem from "./components/navigation/NavigationItem";
import NavigationMenu from "./components/navigation/NavigationMenu";

function App() {
  return (
    <div>
      <NavigationBar>
        <NavigationTitle>David Bechara</NavigationTitle>
        <NavigationMenu>
          <NavigationItem>About Me</NavigationItem>
          <NavigationItem>Resume</NavigationItem>
          <NavigationItem>Projects</NavigationItem>
          <NavigationItem>Contact</NavigationItem>
        </NavigationMenu>
      </NavigationBar>
      My name is David, I'm a full stack web developer at The Croo Group, a
      Montreal-based startup. In 2020, I completed my software engineering
      bachelor's degree from Concordia University. Front end development with
      React.js is my comfort zone, but I'm fluent in Python and Node.js back
      ends along with MySQL and GraphQL. In my career as a developer, I haven't
      had the opportunity to diversify in personal projects. This website is a
      home for my work, and will be updated as I embark on new projects.
    </div>
  );
}

export default App;
