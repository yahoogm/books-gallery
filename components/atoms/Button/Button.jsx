const Button = ({ text, variant }) => {
  return <button className={`btn ${variant}`}>{text}</button>;
};

export default Button;
