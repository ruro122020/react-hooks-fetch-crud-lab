import React from "react";
import QuestionItem from './QuestionItem'
function QuestionList({ questionsList, setQuestionsList }) {
  
  //function to pass as props to components
  function handleDeleteQuestion(deleteQuestion) {
    const newQuestionsList = questionsList.filter(question => question.id !== deleteQuestion.id)
    setQuestionsList(newQuestionsList)
  }
  function handleUpdateQuestion(updateQuestion){
    const updateQuestionList = questionsList.map(question => {
      if (question.id === updateQuestion.id){
        return updateQuestion
      }else{
        return question
      }
    })
    setQuestionsList(updateQuestionList)
  }


  const displayQuestions = questionsList.map(question => <QuestionItem
    key={question.id}
    question={question}
    onDeleteQuestion={handleDeleteQuestion}
    onUpdateQuestion={handleUpdateQuestion}
  />)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {displayQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
