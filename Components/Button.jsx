function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={"button " + className}>
      {children}
    </button>
  );
}

export default Button;
