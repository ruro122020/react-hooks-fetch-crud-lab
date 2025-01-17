/*
In the App component: 
   1. pass the questionList as props to the QuestionList component(DONE)
   2. create a function to pass as props to QuestionForm to get the new question data(DONE)
       -In this function, add the new question to the questionsList (update state with new question info)(DONE)
In the QuestionForm component: (DONE)
    1. Any questions that are created by the QuestionForm need to be added to the questionsList array (DONE)
          -the data structure should be: 
              {
               prompt: '',
               answers: [],
               correctIndex: integer
              }
          - use the function created in the App component to add the new question to the questionList array
In the QuestionList component:
  1. Display all the questions using the QuestionItem component(DONE)
  2. Delete and Update the questionList array in this component 
      so we would need to pass in the setQuestionsList and questionList state as props to the QuestionList component
    1. To update a question
       -create a function to pass down as props to the QuestionItem component
          --this function should take in a updateQuestion argument and
          --update the question in the questionList array
    2. To Delete a question  
       -create a function to pass down as props to the QuestionItem component
          --this function should take in a deleteQuestion argument and
          --delete the question in the questionList Array
*/
import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsList, setQuestionsList] = useState([])

  //Fetch Requests
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(questions => setQuestionsList(questions))
  }, [])

  //Function to pass as props to components
  function handleAddQuestion(addQuestion) {
    setQuestionsList(prevQuestion=> [...prevQuestion, addQuestion])
    }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ?
        <QuestionForm
          onAddQuestion={handleAddQuestion}
        /> :
        <QuestionList
          questionsList={questionsList}
          setQuestionsList={setQuestionsList}
        />}
    </main>
  );
}

export default App;
