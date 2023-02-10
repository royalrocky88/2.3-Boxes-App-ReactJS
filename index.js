const Box = (props) => {
  //  Write your code here.
  const {className, text} = props;
return (
    <div className={`card ${className}`} >
        <p className="message">{text}</p>
    </div>
)
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="header">Boxes</h1>
    <div className="card-container">
      <Box className="s-box" text="Small" />
      <Box className="m-box" text="Medium" />
      <Box className="l-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
