const Button = ({ text, variant, type, onClick }) => {
  return (
    <button className={`btn ${variant}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
