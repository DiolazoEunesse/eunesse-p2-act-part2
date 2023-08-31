export default function Input(props){
  const placeholder = props.placeholder;
  const onChange = props.onChange;
  const variant = props.variant;
  const value = props.value;
  return <input placeholder={placeholder} onChange={onChange} value={value} className={variant}/>;
};
