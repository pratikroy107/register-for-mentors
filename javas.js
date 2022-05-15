(function () {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer1) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
                console.log(currentQuestion.correctAnswer1);
            }
            else if (userAnswer === currentQuestion.correctAnswer2) {
                // add to the number of correct answers
                numCorrect = numCorrect + 2;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
                console.log(currentQuestion.correctAnswer2);
            }
            else if (userAnswer === currentQuestion.correctAnswer3) {
                // add to the number of correct answers
                numCorrect = numCorrect + 3;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
                console.log(currentQuestion.correctAnswer3);
            }
            else if (userAnswer === currentQuestion.correctAnswer4) {
                // add to the number of correct answers
                numCorrect = numCorrect + 4;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
                console.log(currentQuestion.correctAnswer3);
            }
            // if answer is wrong or blank
            const months = ["Tanmay Bhatt", "Dr. Vivek Bindra", "Neha Nagar", "CA Rachana Ranade", "Ankur Warikoo", "Pranjal Kamra", "Ashneer Grover"];
            alert(months[numCorrect] + " has been assigned to you as a Mentor!");
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "SELECT YOUR BUDGET",
            answers: {
                a: "₹10,000 - ₹20,000",
                b: "₹20,001 - ₹40,000",
                c: "₹40,001 - ₹60,000",
                d: "More than ₹60,000",
            },
            correctAnswer1: "a",
            correctAnswer2: "b",
            correctAnswer3: "c",
            correctAnswer4: "d"
        },
        {
            question: "SELECT YOUR INDUSTRY",
            answers: {
                a: "TECHNOLOGY",
                b: "AGRICULTURE",
                c: "BIOTECH"
            },
            correctAnswer11: "a",
            correctAnswer22: "b",
            correctAnswer33: "c"
        },
        {
            question: "SELECT YOUR PURPOSE",
            answers: {
                a: "IDEA VALIDATION",
                b: "NETWORK GROWTH",
                c: "UNDERSTANDING TARGET CUSTOMERS",
                d: "BUILDING A TEAM"
            },
            correctAnswer11: "a",
            correctAnswer22: "b",
            correctAnswer33: "c",
            correctAnswer44: "d"
        },
        {
            question: "REVENUE GENERATED BY YOUR STARTUP",
            answers: {
                a: "₹0 - ₹50,000",
                b: "₹50,001 - ₹70,000",
                c: "₹70,001 - ₹1,00,000",
                d: "MORE THAN 1 LAKHS"
            },
            correctAnswer1: "a",
            correctAnswer2: "b",
            correctAnswer3: "c",
            correctAnswer4: "d"
        },
    ];

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
