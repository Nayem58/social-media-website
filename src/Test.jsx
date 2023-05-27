import "./App.css";

function Test() {
  const isGreen = false;

  return (
    <div className="py-50px">
      <div className="container">
        <div style={{ color: isGreen ? "green" : "red", fontSize: "40px" }}>
          tests
        </div>
      </div>
    </div>
  );
}

export default Test;
