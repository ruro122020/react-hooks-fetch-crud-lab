import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;


  const handleDeleteClick=()=>{
    fetch(`http://localhost:4000/questions/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(deletedQuestion => onDeleteQuestion(question))
  }
  const handleUpdateAnswer=(e)=>{
    const indexSelected = e.target.value
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correctIndex: indexSelected
      })
    })
    .then(res => res.json())
    .then(updateQuestion => onUpdateQuestion(updateQuestion))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdateAnswer}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
