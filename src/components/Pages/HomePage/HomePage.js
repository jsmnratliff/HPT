import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="quiz background-image">
      {quizData.map((questionData, questionIndex) => (
        <div key={questionIndex}>
          <h3>{questionData.question}</h3>
          {questionData.answers.map((answer, answerIndex) => (
            <div key={answerIndex}>
              <label>
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={answerIndex}
                  onChange={() => handleOptionSelect(questionIndex, answerIndex)}
                />
                {answer}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

  const quizData = [
    {
      question: "Harry Potter is played by which actor?",
      answers: [
        "Rupert Grint",
        "Ian Hart",
        "Daniel Radcliffe (A)"
      ]
    },
    {
      question: "When was the first Harry Potter film released?",
      answers: [
        "1997",
        "2001 (A)",
        "2002"
      ]
    },
    {
      question: "What animal does Professor McGonagall shapeshift into?",
      answers: [
        "Cat (A)",
        "Horse",
        "Hamster"
      ]
    },
    {
      question: "What is the name of Harry Potter’s owl?",
      answers: [
        "Hugh",
        "Hedwig (A)",
        "Hilary"
      ]
    },
    {
      question: "What is the address of the Dursleys' house?",
      answers: [
        "6 Privet Drive",
        "5 Privet Drive",
        "4 Privet Drive (A)"
      ]
    },
    {
      question: "How do people refer to Harry Potter in the wizard world?",
      answers: [
        "The Boy Who Survived",
        "The Boy Who Lived (A)",
        "The Boy Who Can Sing"
      ]
    },
    {
      question: "What country is King’s Cross Station in?",
      answers: [
        "England (A)",
        "Portugal",
        "America"
      ]
    },
    {
      question: "The colors yellow and black belong to one of the four houses at Hogwarts. What one is it?",
      answers: [
        "Ravenclaw",
        "Slytherin",
        "Hufflepuff (A)"
      ]
    },
    {
      question: "What house does Ron Weasley belong to?",
      answers: [
        "Hufflepuff",
        "Gryffindor (A)",
        "Ravenclaw"
      ]
    },
    {
      question: "What publishing company published J.K Rowling’s Harry Potter books?",
      answers: [
        "Hachette",
        "Bloomsbury (A)",
        "Penguin"
      ]
    },
    {
      question: "What game is played at Hogwarts?",
      answers: [
        "Football",
        "Hockey",
        "Quidditch (A)"
      ]
    },
    {
      question: "What subject does Snape teach at Hogwarts?",
      answers: [
        "Potions (A)",
        "Defense against the dark arts",
        "Quidditch"
      ]
    },
    {
      question: "What is the title of Chapter 11 in Harry Potter and the Chamber of Secrets?",
      answers: [
        "At Flourish and Blotts",
        "The Duelling Club (A)",
        "Aragog"
      ]
    },
    {
      question: "Who is Dobby?",
      answers: [
        "A Wizard",
        "A Dementor",
        "A House-elf (A)"
      ]
    },
    {
      question: "What is the name of Ron’s mother?",
      answers: [
        "Dotty",
        "Dolly",
        "Molly (A)"
      ]
    },
    {
      question: "What is Gilderoy Lockhart’s profession?",
      answers: [
        "Quidditch teacher",
        "Pixie catcher",
        "Author (A)"
      ]
    },
    {
      question: "Which is the correct message written in blood on the wall in Harry Potter and the Chamber of Secrets?",
      answers: [
        "“The Chamber of Secrets has been opened, enemies of the heir… beware.” (A)",
        "“The Chamber of Secrets has been broken, enemies of the heir… beware.”",
        "“The Chamber of Secrets has been opened, enemies of the house… beware.”"
      ]
    },
    {
      question: "Who haunts the bathroom at Hogwarts?",
      answers: [
        "Fluffy",
        "Moaning Myrtle (A)",
        "Hagrid"
      ]
    },
    {
      question: "What power does Harry discover he has when he is challenged to a wizard match?",
      answers: [
        "Horse whispering",
        "Cat whispering",
        "Snake whispering (A)"
      ]
    },
    {
      question: "Where do Ron and Harry meet Aragog?",
      answers: [
        "Forbidden Forest (A)",
        "Hogsmeade",
        "Broom Shed"
      ]
    },
    {
      question: "What is Tom Riddle’s other name?",
      answers: [
        "Snape",
        "Slytherin",
        "Voldemort (A)"
      ]
    },
    {
      question: "What does Harry use against the Basilisk?",
      answers: [
        "Wand",
        "Sorting hat",
        "Basilisk fang (A)"
      ]
    },
    {
      question: "What new character is introduced in Harry Potter and the Prisoner of Azkaban?",
      answers: [
        "Cornelius Fudge",
        "Sirius Black (A)",
        "Draco Malfoy"
      ]
    }
  ];

  const handleOptionSelect = (questionIndex, answerIndex) => {


  };

export default HomePage;