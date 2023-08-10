import "./assets/App.css";
import entangle from "./assets/images/entangle.png";
import hello from "./assets/images/hello_ai_blog.png";
import review from "./assets/images/review.png";
function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "none",
        }}
      >
        <div>
          <img src={entangle} alt="entangle" />
        </div>
        <div>
          <img src={hello} alt="hello" />
        </div>
        <div>
          <img src={review} alt="review" />
        </div>
      </div>
      This is an Empty Project that is used to host different static images or
      files for other projects.
    </div>
  );
}

export default App;
