var conversation;

function getConversation(name) {
   return {
      currentScene: "start",
      start: {
         conversation: `Hello ${name}, Please select what you wish to do.`,
         image: "/public/images/intro.png",
         choices: [
            {
               choice: "INTERVIEW PRACTICE",
               destination: 'intpracstart'
            },
            {
               choice: "FREQUENTLY ASKED QUESTIONS AND SUGGESTED ANSWERS",
               destination: 'faqans'
            }
         ]
      },
         faqans: {
         conversation: `For 'Frequently Asked Questions and Suggested Answers', You'll be shown a series of often asked interview questions. Think about how you'll answer, then press the next button, where we will show you an example of how to answer the question correctly, as well as a incorrect response.`,
         defaultDestination: 'faqans1',
         buttonText: "START"
         },
            faqans1: {
               conversation: `Could you tell me about yourself and describe your background in brief?`,
               defaultDestination: 'faqans2',
               buttonText: "See Answers"
            },
            faqans2: {
               conversation: `Correct: I come from a small town, where opportunities were limited. Since good schools were a rarity, I started using online learning to stay up to date with the best. That’s where I learned to code and then I went on to get my certification as a computer programmer. After I got my first job as a front-end coder, I continued to invest time in mastering both front- and back-end languages, tools, and frameworks.`,
               conversation: `Incorrect: Didn't do much man, just cruised through life dude.`,
               defaultDestination: 'faqans3',
               buttonText: "Next Question"
            },
            faqans3: {
               conversation: `How did you hear about this position?`,
               defaultDestination: 'faqans4',
               buttonText: "See Answers"
            },
            faqans4: {
               conversation: `Correct: I learned about the position through LinkedIn as I’ve been following your company’s page for a while now. I’m really passionate about the work you’re doing in X, Y, and Z areas, so I was excited to apply. The required skills match well with the skills I have, and it seems like a great opportunity for me to contribute to your mission, as well as a great next move for my career.`,
               conversation: `Incorrect: I looked this stuff online. Found a website called "Eazy Jobs For Dum-Dums" and this one was on it so...`,
               defaultDestination: 'faqans5',
               buttonText: "Next Question"
            },
            faqans5: {
               conversation: `What type of work environment do you prefer?`,
               defaultDestination: 'faqans6',
               buttonText: "See Answers"
            },
            faqans6: {
               conversation: `Correct: I like fast-paced work environments because they make me feel like I’m always learning and growing, but I really thrive when I’m collaborating with team members and helping people reach a collective goal as opposed to competing. My last internship was at an organization with a similar culture, and I really enjoyed that balance, so I believe that the environment here is one that I will thrive in.`,
               conversation: `Incorrect: Slow, quiet ones are best for me. I have anxiety, and am easily startled if there's a loud noise or something suddenly. I also don't really like talking with others, and often can't keep up with fast-paced environments.`,
               defaultDestination: 'faqans7',
               buttonText: "Next Question"
            },
            faqans7: {
               conversation: `How do you deal with pressure or stressful situations?`,
               defaultDestination: 'faqans8',
               buttonText: "See Answers"
            },
            faqans8: {
               conversation: `Correct: I realize stressful situation are always going to come up, and I definitely have had to learn how to navigate them throughout my career. I think I get better at it with every new experience. While working on a new product launch at my last company, for example, things were not going according to plan with my team. Instead of pointing fingers, my first reaction was to take a step back and figure out some strategies around how we could we solve the problem at hand. Previously, I may have defaulted to panicking in that situation, so being calm and collected was definitely a step forward and helped me approach the situation with more clarity.`,
               conversation: `Incorrect: I crumple like a wet tissue.`,
               defaultDestination: 'faqans9',
               buttonText: "Next Question"
            },
            faqans9: {
               conversation: `Do you prefer working independently or on a team?`,
               defaultDestination: 'faqans10',
               buttonText: "See Answers"
            },
            faqans10: {
               conversation: `Correct: I enjoy a blend of the two. I like having a team to strategize with, get diverse opinions from, and reach out to for feedback. But I am also comfortable taking on assignments that require me to work independently. I find I do some of my best work when I can focus alone in a quiet space, but I really value collaborating with my teammates to come up with the best ideas.`,
               conversation: `Incorrect: Definitely by myself. I have social anxiety, and do not work well with other people.`,
               defaultDestination: 'faqansfin',
               buttonText: "Finish"
            },
            faqansfin: {
               conversation: `This is the end of the examples for the free version of 'Interview Simulator', for more questions, details, and reasonings behind the answers, please subscribe to the full version of 'Interview Simulator', which is currently available at a discounted price of $999.99. Hurry fast, as the offer ends Monday, June 17.`,
               defaultDestination: 'start',
               buttonText: "Return to start page"
            },

         intpracstart: {
         conversation: `For the 'Interview Practice', you will be asked a series of questions where you will have to select the answer that you believe is the most fitting and will land you a job. Your results will be given after the last question.`,
         defaultDestination: 'intprac1',
         buttonText: "START"
         },
            intprac1: {
               conversation: `Tell me about yourself, What's your personality like?`,
               choices: [
                  {
                     choice: "I'm a go-getter.",
                     destination: 'intprac3'
                  },
                  {
                     choice: "I'm shy.",
                     destination: 'intprac2'
                  },
                  {
                     choice: "I have crippling anxiety.",
                     destination: 'intpracmiddle'
                  },
                  {
                     choice: "I give my utmost to everything I do.",
                     destination: 'intprac2'
                  },
                  {
                     choice: "I'm obedient. So obedient. Please I really need this job please give me the job please please please please please-",
                     destination: 'intpracfail'
                  }
               ]
            },
            intprac2: {
               conversation: `Tell me about yourself, what's your background like?`,
               choices: [
                  {
                     choice: "It all started in a small town in the middle of nowhere in the Melbourne suburbs on an early summer's day in November. The year was 2003 and my parents were unprepared for birth aloongside that of my time. They had only planned for one child and not two. The at-home birth that was originally planned had to immediately be changed and my mother was rushed to the hospital when her water broke. My father, a man who is usually steadfast in the face of all things, was terribly panicked and was of no help as my mother was rushed to the obstetrician, who was just about to clock for his break. It was an intensive and long labour, and after close to 72 hours of pushing, swearing and screaming, my mother finally gave birth to me and my brother. Unfortunately the birth left her in weak health, and she was unable to ever carry a child again. She had blamed her poor health on me, as I was the second born, the second to come out of the womb, and my father felt too responsible for her to argue in my defence. Growing up he would tell me to just let my mother say what she wanted and to try and understand her - that she was having aa hard time of it. I grew up in my brother's shadow. He was the golden chid, the one who could do no wrong. He had a proper bedroom with a double bed and a desk and chair and wardrobe. He was allowed his own computer and phone and everything he could ever want. I was given the smallest bedroom, which was only really enough to fit a bed, yet I still had to do my homework in the room and I would not be allowed out unless I finished everything. I had no friends, the ones I wanted were all naturally more drawn to my shining brother, and I was left alone by my peers for being too gloomy. This was the case in primary, and it continued on through secondary. It all reached a breaking point in my second to last year of highschool, when a new-",
                     destination: 'intpracfail'
                  },
                  {
                     choice: "I come from a small, rural town, where opportunities were limited. I was always a resourceful kid, and I had used the online courses and tutorials available to stay up to date with the best and to fill any gaps in my education. That’s how I got my degree. I furthered my repertoire by working freelance, seeking out anything that can help me build experience and develop my skills. Even after I got my first job in this field, I was still determined to become better, and spent much of my free time ensuring I knew everything there is to know with this industry.",
                     destination: 'intprac3'
                  },
                  {
                     choice: "Got a standard background, standard life, standard everything really.",
                     destination: 'intpraclower'
                  },
                  {
                     choice: "I was the chosen one. I was the best in everything I did; MVP of all the sporting teams, soloist in the choirs, first violinist in the first seat of the orchestra. I was chosen as vice school captain in year 11, then chosen again in year 12 as the school captain. I've aced every test I've ever gotten, and am constitently first place in all things. I'm the best employee you'll ever have, and you know it.",
                     destination: 'intprac3'
                  },
                  {
                     choice: "My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.",
                     destination: 'intpracmiddle'
                  }
               ]
            },
            intprac3: {
               conversation: `What are your annual salary expectations?`,
               choices: [
                  {
                     choice: "$300k straight up.",
                     destination: 'intprac1'
                  },
                  {
                     choice: "Based on my skills and experience and on the current industry rates, I’m looking at a salary around $60k to $70k.",
                     destination: 'intpracbest'
                  },
                  {
                     choice: "Anything is fine.",
                     destination: 'intprac4'
                  },
                  {
                     choice: "$10k.",
                     destination: 'intprac4'
                  }
               ]
            },
            intprac4: {
               conversation: `Are you applying for other jobs?`,
               choices: [
                  {
                     choice: "I’ve applied to a couple of other firms, but this role is really the one I’m most excited about right now.",
                     destination: 'intprac1'
                  },
                  {
                     choice: "Hell yeah.",
                     destination: 'intpraclower'
                  },
                  {
                     choice: "No......",
                     destination: 'intpracupper'
                  },
                  {
                     choice: "Should I have?",
                     destination: 'intprac2'
                  },
                  {
                     choice: "Of course! This job isn't even my first choice.",
                     destination: 'intpracfail'
                  }
               ]
            },
            intpracbest: {
               conversation: `CONGRATULATIONS! You got every answer right! You're now fully prepared for your job interview.`,
               defaultDestination: 'start',
               buttonText: "Return to start page"
            },
            intpracupper: {
               conversation: `GOOD JOB! You got most of the answers right! Make sure to review just a bit more and you'll be ready for your job interview!`,
               defaultDestination: 'start',
               buttonText: "Return to start page"
            },
            intpracmiddle: {
               conversation: `You got a pretty average result. While you won't outright fail every interview, you also won't be passing all of them. Make sure to use our program to its fullest to ensure you are prepared as best as possible for your upcoming job interview.`,
               defaultDestination: 'start',
               buttonText: "Return to start page"
            },
            intpraclower: {
               conversation: `Your results are in the lower end of the scale. You'll have to practice a lot more to get the job you want.`,
               defaultDestination: 'start',
               buttonText: "Return to start page"
            },
            intpracfail: {
               conversation: `You've failed quite spectacularly. If this is how you answer mock interview questions then it's a good thing that you acknowledge that you need help.`,
               defaultDestination: 'start',
               buttonText: "Return to start page"
            }
   }
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#start-button')
    var content = document.querySelector('#content')
    button.addEventListener('click', function() {
        var name = document.querySelector('#name-input')
        conversation = getConversation(name.value)
        renderScene()
    })
})

function renderScene() {
    var text = "Next"
    if (conversation[conversation.currentScene].buttonText) {
        text = conversation[conversation.currentScene].buttonText
    }
    content.innerHTML = `
        <p>
            ${conversation[conversation.currentScene].conversation}
        </p>
        ${getInputs()}
        <button id="submit-button">
            ${text}
        </button>
    `
    var button = document.querySelector("#submit-button");
    button.addEventListener('click', function() {
        getInputValue()
    })
}

function getInputValue() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            conversation.currentScene = inputs[i].getAttribute('data-destination')
            renderScene();
            return;
        }
    }
    conversation.currentScene = conversation[conversation.currentScene].defaultDestination
    renderScene()
}

function getInputs() {
    var input = ""
    if (!conversation[conversation.currentScene].choices) {
        return ""
    }
    for(var i = 0; i < conversation[conversation.currentScene].choices.length; i++) {
        input += `
        <div style="display: flex;">
            <input data-destination=${conversation[conversation.currentScene].choices[i].destination} id="radio${i}" type="radio" name="choices" />
            <label for "radio${i}">
                ${conversation[conversation.currentScene].choices[i].choice}
            </label>
        </div>
        `
    }
    return input;
}
