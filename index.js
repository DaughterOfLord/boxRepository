const Box = props => {
  //  Write your code here.
  const { box, box2 , box3 } = props;
  return (
      <div className="bg-container-2">
        {box}, {box2}, {box3}
      </div>
  );
};

const element = (
  //  Write your code here. 
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div>
        <Box className="box" box="small" <p>small</p>/>
        <Box className="box2" box2="Medium" <p>Medium</p>/>
        <Box className="box3" box3="large" <p>large</p>/>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
