const Button = ({ text, variant, type }) => {
  return (
    <button className={`btn ${variant}`} type={type}>
      {text}
    </button>
  );
};

export default Button;
