import sections from "../../sections/sections";
import NavigationItem from "./NavigationItem";
import NavigationTitle from "./NavigationTitle";

export default function NavigationBar() {
  return (
    <div>
      <NavigationTitle>David Bechara</NavigationTitle>
      {sections.map(({ title }) => (
        <NavigationItem>{title}</NavigationItem>
      ))}
    </div>
  );
}
