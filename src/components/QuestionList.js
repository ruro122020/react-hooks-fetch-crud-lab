import React from "react";
import QuestionItem from './QuestionItem'
function QuestionList({questionsList}) {
  const displayQuestions = questionsList.map(question => <QuestionItem key={question.id} question={question}/>)
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
