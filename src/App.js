
function App() {
  return (
    <div className="App">
        <button className="btn sm">
          <span className="btn-title">Button</span>
        </button>
        <button className="btn md">
          <span className="btn-title">Button</span>
        </button>
        <button className="btn lg">
          <span className="btn-title">Button</span>
        </button>


        <button className="btn sm btn-type-success">
          <span className="btn-title">Button</span>
        </button>
        <button className="btn md btn-type-error" disabled>
          <span className="btn-title">Button</span>
        </button>
        <button className="btn lg btn-type-info">
          <span className="btn-title">Button</span>
        </button>
    </div> 
  );
}

export default App;
