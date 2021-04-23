import sections from "../../sections";
import NavigationItem from "./NavigationItem";
import NavigationTitle from "./NavigationTitle";

export default function NavigationBar() {
  return (
    <div className="fixed flex justify-between items-center w-screen h-24 py-8 px-14 bg-gradient-to-b bg-opacity-75 backdrop-filter backdrop-blur-sm">
      <NavigationTitle>David Bechara</NavigationTitle>
      <div className="flex">
        {sections.map(({ title }) => (
          <NavigationItem key={title}>{title}</NavigationItem>
        ))}
      </div>
    </div>
  );
}
