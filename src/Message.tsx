// this is now a very basic react component
// PascalCasing
function Message() {
  // the syntax is JSX - JavaScript XML
  const name = "Kevin";
  if (name) return <h1> Hello {name}!</h1>;
  return <h1> Hello World!</h1>;
}

export default Message;
