export default function Image (props){
  const src = props.src;
  const width = props.width;
  const height = props.height;
  const variant = props.variant;
  return <img src={src} width={width} height={height} className={variant} alt="img"/>;
};