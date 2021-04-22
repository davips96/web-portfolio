import sections from "../../sections/sections";
import NavigationItem from "./NavigationItem";
import NavigationTitle from "./NavigationTitle";

export default function NavigationBar() {
  return (
    <div className="fixed flex justify-between items-center w-screen h-32 px-14">
      <NavigationTitle>David Bechara</NavigationTitle>
      <div className="flex">
        {sections.map(({ title }) => (
          <NavigationItem key={title}>{title}</NavigationItem>
        ))}
      </div>
    </div>
  );
}
