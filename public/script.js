const questions = [
    "Tell me about yourself.",
    "What is your personal background?",
    "What is your work background?",
    "What do you know about our business?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why do you want to work for our company?",
    "What interests you about the position?",
    "How is your previous experience relevant?",
    "Why did you leave your previous job?",
    "Where do you see yourself in five years?",
    "Why should we hire you?",
    "Can you give an example of a time you demonstrated leadership?",
    "What is your preferred work style or management style?",
    "How do you handle stress?",
    "Do you have any questions for us?",
    "Thank you for coming.",
    "Goodbye.",
    "",
];

const responses = [
    "Hello, I am Chris, and sometimes I am Christine. It depends on which browser you are currently using. I will be helping you practice for your interview today.",
    "That's great! Let's move on to the next question.",
    "I see.",
    "Experience is valuable.",
    "I'll be taking note of that.",
    "Impressive! Keep it up.",
    "Everyone has weaknesses. It's good that you're aware of yours.",
    "Interesting. Our company values align well with your goals.",
    "I see, I see.",
    "Alright, that's certainly something.",
    "Mmhmm, we'll take that into consideration.",
    "Ambitious goals! We appreciate your vision.",
    "You make a compelling case. Let's see what else you have to offer.",
    "Oh my. That's certainly something.",
    "Hmm, we'll see how you fit in.",
    "Alright, the questions are almost over now.",
    "I'm afraid I can't say.",
    "If we decide to hire you, you will recieve a response within a month time.",
    "Have a good day.",
];

const images = [
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
];

let currentQuestionIndex = 0;

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        const answer = document.getElementById("answer").value.toLowerCase().trim();
        let response;
        if (answer.includes("strength")) {
            response = "Your strength is noted.";
        } else if (answer.includes("weakness")) {
            response = "Acknowledged. It's good to be self-aware.";
        } else if (answer.includes("interested") || answer.includes("passion")) {
            response = "That's fantastic to hear!";
        } else if (answer.includes("Chinese") || question.includes("family")) {
            response = "That's fantastic, we have to fill the quotas.";
        } else if (answer.includes("Indigenous") || answer.includes("family")) {
            response = "That's fantastic, we have to fill the quotas.";
        } else if (answer.includes("African") || answer.includes("family")) {
            response = "That's fantastic, we have to fill the quotas.";
        } else if (answer.includes("gay")) {
            response = "That's fantastic, we have to fill the quotas.";
        } else if (answer.includes("homosexual")) {
            response = "That's fantastic, we have to fill the quotas.";
        } else if (answer.includes("trans")) {
            response = "That's fantastic, we have to fill the quotas.";
        } else if (answer.includes("inexperienced")) {
            response = "That's unfortunate, we like people with experience in this field of work.";
        } else if (answer.includes("little") || answer.includes("experience")) {
            response = "Some more experience would have been ideal, but at least you have some.";
        } else if (answer.includes("some") || answer.includes("experience")) {
            response = "That's fine, you can always gain more with us.";
        } else if (answer.includes("lot") || answer.includes("experience")) {
            response = "That's fantastic, it's great to have people who know what they're doing!";
        } else if (answer.includes("salary")) {
            response = "You'll be getting the standard entry level salary, and if you do well we can discuss a raise.";
        } else if (answer.includes("nothing")) {
            response = "That's dissapointing. You should have done your work. Now I think that you're not interested, and that you won't give 100% in your work here.";
        } else if (answer.includes("research")) {
            response = "That's excellent! We always appreciate the ones who make sure to prepare for their interview.";
        } else if (answer.includes("collaboration")) {
            response = "That's excellent! We love a team player!";
        } else if (answer.includes("collaborate")) {
            response = "That's excellent! We love a team player!";
        } else if (answer.includes("collaborating")) {
            response = "That's excellent! We love a team player!";
        } else if (answer.includes("extrovert")) {
            response = "That's excellent! We love a team player!";
        } else if (answer.includes("solo")) {
            response = "Hmm, I'm afraid you may have to work with others as part of our team.";
        } else if (answer.includes("alone")) {
            response = "I see, that's unfortunate.";
        } else if (answer.includes("introvert")) {
            response = "That's alright, so long as you can work well with others when you need to.";
        } else if (answer.includes("bad")) {
            response = "That might pose a problem.";
        } else if (answer.includes("good")) {
            response = "That's great. We've been told that a workplace such as ours can be stressful for those unfamiliar or... unfitting...";
        } else {
            response = responses[currentQuestionIndex];
        }
        document.getElementById("question").innerText = question;
        document.getElementById("answer").value = "";
        document.getElementById("questionImage").src = images[currentQuestionIndex];
        currentQuestionIndex++;
        speak(response);
    } else {
        alert("Interview is over. Thank you!");
    }
}

function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

var speech = true; 
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
  
        const recognition = new SpeechRecognition(); 
        recognition.interimResults = true; 
        const answer = document.querySelector('.answer'); 
        answer.appendChild(p); 
  
        recognition.addEventListener('result', e => { 
            const transcript = Array.from(e.results) 
                .map(result => result[0]) 
                .map(result => result.transcript) 
                .join('') 
  
            document.getElementById("answer").innerHTML = transcript; 
            console.log(transcript); 
        }); 
          
        if (speech == true) { 
            recognition.start(); 
            recognition.addEventListener('end', recognition.start); 
        } 