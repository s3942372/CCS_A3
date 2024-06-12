const questions = [
    "Tell me about yourself.",
    "What is your personal background?",
    "What is your work background?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why do you want to work for our company?",
    "Where do you see yourself in five years?",
    "Why should we hire you?",
    "Do you have any questions for us?",
    "Thank you for coming.",
    "Goodbye.",
    "",
];

const responses = [
    "Hello, I am Chris, and sometimes I am Christine. It depends. I will be helping you practice for your interview today.",
    "That's great! Let's move on to the next question.",
    "I see.",
    "Experience is valuable.",
    "Impressive! Keep it up.",
    "Everyone has weaknesses. It's good that you're aware of yours.",
    "Interesting. Our company values align well with your goals.",
    "Ambitious goals! We appreciate your vision.",
    "You make a compelling case. Let's see what else you have to offer.",
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
        } else if (answer.includes("Chinese") || answer.includes("family")) {
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
        }else {
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