import { useEffect, useState } from "react";

function Quiz() {
  let [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions", {
      headers: {
        "content-type": "application/json",
        token: window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setQuestions([...data]));
  }, []);
  function submitQuiz(e) {
    e.preventDefault();
    fetch("http://localhost:4000/submitQuiz", {
      headers: {
        "content-type": "application/json",
        token: window.localStorage.getItem("token"),
      },
      method: "POST",
      body: JSON.stringify(questions),
    }).then();
  }
  function updateQuiz(index, selectedOption) {
    var temp = [...questions];
    temp[index].selectedOption = selectedOption;
    setQuestions([...temp]);
  }
  return (
    <div className="mybox">
      <h1>Quiz</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitQuiz(e);
        }}
      >
        <ol>
          {questions?.map((q, i) => {
            return (
              <li>
                <p> {q.question}</p>
                <ol type="A">
                  {q.options.map((o) => {
                    return (
                      <li>
                        <input
                          type="radio"
                          name={q.id}
                          value={o}
                          onChange={(e) => {
                            updateQuiz(i, o);
                          }}
                        />
                        {o}
                      </li>
                    );
                  })}
                </ol>
              </li>
            );
          })}
        </ol>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Quiz;
