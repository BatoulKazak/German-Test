const START_BUTTON = document.getElementById('start-btn'),
    NEXT_BUTTON = document.getElementById('next-btn'),
    QUESTION_CONTAINER_ELEMENT = document.getElementById('question-container'),
    QUESTION_ELEMENT = document.getElementById('question'),
    ANSWER_BUTTONS_ELEMENT = document.getElementById('answer-buttons'),
    SCORS = document.getElementById('scores'),
    CONTAINER = document.getElementById('container'),
    BODY = document.querySelector('.b');
// CHOICE_1 = document.getElementById('choice1'),
// CHOICE_2 = document.getElementById('choice2'),
// CHOICE_3 = document.getElementById('choice3'),
// CHOICE_4 = document.getElementById('choice4');

let scores = 0;

let shuffledQuestions, currentQuestionIndex;

// // CONTAINER.style.height = '40rem';
// START_BUTTON.style.visibility = 'hidden';
// SCORS.style.visibility = 'hidden';
// // QUESTION_ELEMENT.classList.remove('hide');
// // QUESTION_ELEMENT.style.display = 'block';
// QUESTION_ELEMENT.innerText = 'Choose type of questions:';


START_BUTTON.addEventListener('click', startGame);
NEXT_BUTTON.addEventListener('click', () => {
    currentQuestionIndex++;
    // SCORS.innerText = "score: " + scores;
    setNextQuestion();
    if (Array.from(BODY.classList).includes("correct")) {
        scores++;
        SCORS.innerText = "scores: " + scores;
        alert("dsf");
    }
})

// function Beginning() {
//     CHOICE_1.innerText = 'Identifiers';
//     CHOICE_2.innerText = 'Words';
//     CHOICE_3.innerText = 'Grammer';
//     CHOICE_4.innerText = 'Translation';


//     let choice = 'a';
//     let questionsType = '';


//     CHOICE_1.addEventListener('click', () => {
//         questionsType = questionsType1;
//     });

//     CHOICE_2.addEventListener('click', () => {
//         questionsType = questionsType2;
//     });

//     CHOICE_3.addEventListener('click', () => {
//         questionsType = questionsType3;
//     });

//     CHOICE_4.addEventListener('click', () => {
//         questionsType = questionsType4;
//     });

// }

function startGame() {
    START_BUTTON.classList.add('hide');
    shuffledQuestions = questionsType.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    scores = 0;
    QUESTION_CONTAINER_ELEMENT.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    QUESTION_ELEMENT.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        ANSWER_BUTTONS_ELEMENT.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    NEXT_BUTTON.classList.add('hide');
    while (ANSWER_BUTTONS_ELEMENT.firstChild) {
        ANSWER_BUTTONS_ELEMENT.removeChild(ANSWER_BUTTONS_ELEMENT.firstChild)
    }
}

function selectAnswer(e) {
    //whatever we click on
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(ANSWER_BUTTONS_ELEMENT.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        NEXT_BUTTON.classList.remove('hide');
    } else {
        START_BUTTON.innerText = "Restart";
        START_BUTTON.classList.remove('hide');
    }
    // NEXT_BUTTON.classList.remove('hide');
    NEXT_BUTTON.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
        // scores++;
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questionsType = [
    {
        question: 'Katze',
        answers: [
            { text: 'der', correct: false },
            { text: 'die', correct: true },
            { text: 'das', correct: false },
            { text: 'nothing', correct: false }


        ]
    },
    {
        question: 'Sonne',
        answers: [
            { text: 'das', correct: false },
            { text: 'die', correct: true },
            { text: 'nothing', correct: false },
            { text: 'der', correct: false }

        ]
    },
    {
        question: 'Hund',
        answers: [
            { text: 'der', correct: true },
            { text: 'das', correct: false },
            { text: 'die', correct: false },
            { text: 'nothing', correct: false }

        ]
    },
    {
        question: 'Mädchen',
        answers: [
            { text: 'die', correct: false },
            { text: 'das', correct: true },
            { text: 'das', correct: false },
            { text: 'nothing', correct: false }
        ]
    },
    {
        question: 'Frau',
        answers: [
            { text: 'das', correct: false },
            { text: 'die', correct: true },
            { text: 'der', correct: false },
            { text: 'nothing', correct: false }
        ]
    },
    {
        question: 'Mann',
        answers: [
            { text: 'das', correct: false },
            { text: 'nothing', correct: false },
            { text: 'das', correct: false },
            { text: 'der', correct: true }
        ]
    },
    {
        question: 'Kinder',
        answers: [
            { text: 'die', correct: true },
            { text: 'das', correct: false },
            { text: 'das', correct: false },
            { text: 'das', correct: false }
        ]
    },
    {
        question: 'Tasche',
        answers: [
            { text: 'das', correct: false },
            { text: 'die', correct: true },
            { text: 'das', correct: false },
            { text: 'das', correct: false }
        ]
    },
    {
        question: 'The girl',
        answers: [
            { text: 'das Mädchen', correct: true },
            { text: 'die Frau', correct: false },
            { text: 'das Kind', correct: false },
            { text: 'die Tasche', correct: false }


        ]
    },
    {
        question: 'A kid',
        answers: [
            { text: 'der Mann', correct: false },
            { text: 'das Eis', correct: false },
            { text: 'das Kind', correct: true },
            { text: 'nothing', correct: false }


        ]
    },
    {
        question: 'die Schule',
        answers: [
            { text: 'the bus', correct: false },
            { text: 'the car', correct: false },
            { text: 'zwei', correct: false },
            { text: 'nothing', correct: true }


        ]
    },
    {
        question: 'die Tür',
        answers: [
            { text: 'the window', correct: false },
            { text: 'the apple', correct: false },
            { text: 'the door', correct: true },
            { text: 'woman', correct: false }


        ]
    },
    {
        question: 'The food',
        answers: [
            { text: 'das Essen', correct: true },
            { text: 'die Ente', correct: false },
            { text: 'der Hund', correct: false },
            { text: 'nothing', correct: false }


        ]
    },

    {
        question: 'The girl',
        answers: [
            { text: 'das Mädchen', correct: true },
            { text: 'die Frau', correct: false },
            { text: 'das Kind', correct: false },
            { text: 'die Tasche', correct: false }


        ]
    },
    {
        question: 'A kid',
        answers: [
            { text: 'der Mann', correct: false },
            { text: 'das Eis', correct: false },
            { text: 'das Kind', correct: true },
            { text: 'nothing', correct: false }


        ]
    },
    {
        question: 'die Schule',
        answers: [
            { text: 'the bus', correct: false },
            { text: 'the car', correct: false },
            { text: 'zwei', correct: false },
            { text: 'nothing', correct: true }


        ]
    },
    {
        question: 'die Tür',
        answers: [
            { text: 'the window', correct: false },
            { text: 'the apple', correct: false },
            { text: 'the door', correct: true },
            { text: 'woman', correct: false }


        ]
    },
    {
        question: 'The food',
        answers: [
            { text: 'das Essen', correct: true },
            { text: 'die Ente', correct: false },
            { text: 'der Hund', correct: false },
            { text: 'nothing', correct: false }


        ]
    },

    {
        question: 'The kid is playing',
        answers: [
            { text: 'Der Kind spielt', correct: false },
            { text: 'Das Kind spielt', correct: true },
            { text: 'Du spielst', correct: false },
            { text: 'Die Kider spielen', correct: false }


        ]
    },
    {
        question: 'She is playing with her mother',
        answers: [
            { text: 'Sie spielst mit ihrer Mutter', correct: false },
            { text: 'Sie spielt mit deine Mutter', correct: false },
            { text: 'Sie spielt mit ihrer Mutter ', correct: true },
            { text: 'Sie spielt mit seine Mutter', correct: false }


        ]
    },
    {
        question: "it's hot",
        answers: [
            { text: 'Es ist neblig', correct: false },
            { text: 'Es ist heiß', correct: true },
            { text: 'Es ist ein schöner Tag', correct: false },
            { text: 'Nothing', correct: false }


        ]
    },
    {
        question: 'He is sad',
        answers: [
            { text: 'Ihr seid traurig', correct: false },
            { text: 'Ihr ist traurig', correct: false },
            { text: 'Er ist traurig', correct: true },
            { text: 'Er ist müde', correct: false }


        ]
    },
    {
        question: 'I lost my book',
        answers: [
            { text: 'ich muss mein Buch verloren', correct: false },
            { text: 'ich hatte mein Buch verloren', correct: false },
            { text: 'Ich hat mein Buch verloren', correct: false },
            { text: 'Ich habe mein Buch verloren', correct: true }


        ]
    },
]


// --------------------------------------------------------------------------------------------------------

// const questionsType2 = [
//     {
//         question: 'The girl',
//         answers: [
//             { text: 'das Mädchen', correct: true },
//             { text: 'die Frau', correct: false },
//             { text: 'das Kind', correct: false },
//             { text: 'die Tasche', correct: false }


//         ]
//     },
//     {
//         question: 'A kid',
//         answers: [
//             { text: 'der Mann', correct: false },
//             { text: 'das Eis', correct: false },
//             { text: 'das Kind', correct: true },
//             { text: 'nothing', correct: false }


//         ]
//     },
//     {
//         question: 'die Schule',
//         answers: [
//             { text: 'the bus', correct: false },
//             { text: 'the car', correct: false },
//             { text: 'zwei', correct: false },
//             { text: 'nothing', correct: true }


//         ]
//     },
//     {
//         question: 'die Tür',
//         answers: [
//             { text: 'the window', correct: false },
//             { text: 'the apple', correct: false },
//             { text: 'the door', correct: true },
//             { text: 'woman', correct: false }


//         ]
//     },
//     {
//         question: 'The food',
//         answers: [
//             { text: 'das Essen', correct: true },
//             { text: 'die Ente', correct: false },
//             { text: 'der Hund', correct: false },
//             { text: 'nothing', correct: false }


//         ]
//     },
// ]
// // -----------------------------------------------------------------------------------------------------
// const questionsType3 = [
//     {
//         question: 'The girl',
//         answers: [
//             { text: 'das Mädchen', correct: true },
//             { text: 'die Frau', correct: false },
//             { text: 'das Kind', correct: false },
//             { text: 'die Tasche', correct: false }


//         ]
//     },
//     {
//         question: 'A kid',
//         answers: [
//             { text: 'der Mann', correct: false },
//             { text: 'das Eis', correct: false },
//             { text: 'das Kind', correct: true },
//             { text: 'nothing', correct: false }


//         ]
//     },
//     {
//         question: 'die Schule',
//         answers: [
//             { text: 'the bus', correct: false },
//             { text: 'the car', correct: false },
//             { text: 'zwei', correct: false },
//             { text: 'nothing', correct: true }


//         ]
//     },
//     {
//         question: 'die Tür',
//         answers: [
//             { text: 'the window', correct: false },
//             { text: 'the apple', correct: false },
//             { text: 'the door', correct: true },
//             { text: 'woman', correct: false }


//         ]
//     },
//     {
//         question: 'The food',
//         answers: [
//             { text: 'das Essen', correct: true },
//             { text: 'die Ente', correct: false },
//             { text: 'der Hund', correct: false },
//             { text: 'nothing', correct: false }


//         ]
//     },
// ]
// // ----------------------------------------------------------------------------------------------

// const questionsType4 = [
//     {
//         question: 'The kid is playing',
//         answers: [
//             { text: 'Der Kind spielt', correct: false },
//             { text: 'Das Kind spielt', correct: true },
//             { text: 'Du spielst', correct: false },
//             { text: 'Die Kider spielen', correct: false }


//         ]
//     },
//     {
//         question: 'She is playing with her mother',
//         answers: [
//             { text: 'Sie spielst mit ihrer Mutter', correct: false },
//             { text: 'Sie spielt mit deine Mutter', correct: false },
//             { text: 'Sie spielt mit ihrer Mutter ', correct: true },
//             { text: 'Sie spielt mit seine Mutter', correct: false }


//         ]
//     },
//     {
//         question: "it's hot",
//         answers: [
//             { text: 'Es ist neblig', correct: false },
//             { text: 'Es ist heiß', correct: true },
//             { text: 'Es ist ein schöner Tag', correct: false },
//             { text: 'Nothing', correct: false }


//         ]
//     },
//     {
//         question: 'He is sad',
//         answers: [
//             { text: 'Ihr seid traurig', correct: false },
//             { text: 'Ihr ist traurig', correct: false },
//             { text: 'Er ist traurig', correct: true },
//             { text: 'Er ist müde', correct: false }


//         ]
//     },
//     {
//         question: 'I lost my book',
//         answers: [
//             { text: 'ich muss mein Buch verloren', correct: false },
//             { text: 'ich hatte mein Buch verloren', correct: false },
//             { text: 'Ich hat mein Buch verloren', correct: false },
//             { text: 'Ich habe mein Buch verloren', correct: true }


//         ]
//     },
// ]