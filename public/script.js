const questions = [
    "Tell me about yourself.",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why do you want to work for our company?",
    "Where do you see yourself in five years?",
    "Why should we hire you?",
    "Do you have any questions for us?"
];

const responses = [
    "Hello, I am Fred. I will be helping you practice for your interview today.",
    "That's great! Let's move on to the next question.",
    "Impressive! Keep it up.",
    "Everyone has weaknesses. It's good that you're aware of yours.",
    "Interesting. Our company values align well with your goals.",
    "Ambitious goals! We appreciate your vision.",
    "You make a compelling case. Let's see what else you have to offer.",
    "Of course! What would you like to know?"
];

const images = [
    "intro.png",
    "hello.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg"
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