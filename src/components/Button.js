export default function Button(props) {
  const variant = props.variant;
  const children = props.children;
  const onClick = props.onClick;
  return <button onClick={onClick} className={variant}>{children}</button>;
} ;


