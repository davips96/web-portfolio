export default function NavigationItem({ children, ...props }) {
  return (
    <div className="ml-8" key={props.key}>
      {children}
    </div>
  );
}
