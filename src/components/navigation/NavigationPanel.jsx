import { useState } from "react";

export default function NavigationPanel({ children }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return open ? (
    <div className="absolute top-0 right-0 z-10 w-screen h-screen bg-gray-300 bg-opacity-10 backdrop-filter backdrop-blur-md">
      <ul className="flex flex-col items-end p-4 space-y-2">
        <li onClick={toggleOpen}>Close Menu</li>
        {children}
      </ul>
    </div>
  ) : (
    <li onClick={toggleOpen}>Open Menu</li>
  );
}
