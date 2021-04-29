export default function NavigationBar({ children }) {
  return (
    <div className="py-4 px-6">
      <ul className="flex justify-between">{children}</ul>
    </div>
  );
}
