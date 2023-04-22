const Input = ({ type, placeholder, style, value, onChange, name }) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} className={`input w-full max-w-xs ${style}`} />;
};

export default Input;
