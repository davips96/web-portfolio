export default function NavigationItem({ children, ...props }) {
  return (
    <div className="ml-8 text-grey-100" key={props.key}>
      {children}
    </div>
  );
}
