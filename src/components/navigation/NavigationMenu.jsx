import NavigationPanel from "./NavigationPanel";

export default function NavigationMenu({ children }) {
  return (
    <li>
      <ul className="hidden sm:flex items-center space-x-4">{children}</ul>
      <div className="sm:hidden">
        <NavigationPanel>{children}</NavigationPanel>
      </div>
    </li>
  );
}
