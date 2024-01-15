const Button = () => {
  const handeClick = () => {
    console.log("click!");
  };
  return <button onClick={handeClick}>Click me!</button>;
};
export default Button;
