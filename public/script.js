/* This one is a bit harder to comment for because I don't want to accidentally mess up all that code so commentary will largely be here at the top and at 
the bottom. 

The names for the 'BUDDIES' were chosen based on Greek mythology. The company name, 'Pygmalion & Co.' is based on the sculptor Pygmalion, who fell in love 
with the statue he made, Galatea, and asked the goddess Aphrodite to make a woman in the likeness of the statue. She ended up bringing the statue to life. 
This is why the first 'BUDDY' you talk to is called Galatea. Like how Pygmalion perferred the company of a statue that imitates the likeness of actual people, 
so to are the users choosing to talk to these AI 'BUDDIES' instead of an actual human friend. 

The following 'BUDDY' names and reasons are:
Bacchus => Roman form of Dionysus, because they are the god of madness/insanity, among other things. Plays into the downward spiral the 'BUDDY' breaks down into. 
Hippocrates => The father of medicine, and the most outspoken on the topic of mental health during Ancient Greece. This is a supposed 'therapy simulation experience' 
after all. 
Cassandra => A priestess of Apollo who was cursed to never have anyone believe her prophecies, even though they were true. I played on the opposite, rather than have 
something be reliable and yet have no one trust it, these AI 'BUDDIES' aren't all that reliable at all, and yet people use them. 
Apollo => A god of both medicine and illness. Plays into how this is supposed to be something that helps it's users, and yet the machine itself is breaking down. */

/* I was asked what part of the experience will encourage users to keep repeating the same actions of clicking options and pressing buttons over and over again. I have 
variations appear in both the responses given by the AI 'BUDDY' as well as the options and buttons the users will click on, and I think these variations are enough to 
encourage the people interacting with the experience to keep going to see how the situation will unfold. */

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

/* In case you didn't find or read all of the 500 word text component of this assignment:

Developed for Assignment 3 of the Interactive Media course at the Royal Melbourne Institute of Technology, PROJECT: BUDDY (BETA) was created by taking two prompts: Feedback and Growing, 
and developing an interactive experience based around them. Inspired by the rapid development of AI technology and the increase in online/texting therapy, the creator, s3942372 (also 
known as Charlene Xu) wished to create an experience based on these circumstances, where an AI is used as an online therapist of sorts.

Taking inspiration from text-based computer games such as “Zork” and “Buddy Simulator 1984”, this interactive experience would appear in a terminal-like style, with an old school computer 
font style set against a simple blank background. Black and white were chosen as colours for a basic, old-school-early-days feel, and the use of a soft glow around the text was done to 
enhance the unsettling feeling (somewhat like the uncanny valley) of talking with something that’s not human but emulates the language of one.

The idea was for the users to interact with an ‘AI’, their ‘Buddy’. In this interactive experience, the ‘Buddy’ acts like both a friend and therapist, acting as something the user 
can ask and take advice from. As users interact with their ‘Buddy’ though, the ‘AI’ proceeds to grow more and more unstable (the growth component of this experience).

The interaction was designed so that the audience feels as though there are multiple branching pathways for them to take by clicking one of the given options on screen (the feedback 
component). Every pathway, however, leads to a growth in the instability of the ‘AI’. This instability is shown through instances such as warped text, breaking of character (the ‘AI’ 
stops acting like a friend), looping conversations, as well as repeating words and letters, the last of which was inspired by the real-life instance of two AI algorithm "bots" improvising 
communications in a Facebook lab experiment in 2017 (https://www.theatlantic.com/technology/archive/2017/06/what-an-ais-non-human-language-actually-looks-like/530934/).

Simplified, this is how the experience functions: choose option/press button = get response. This is the Feedback. More interaction = more weird responses = more instability in ‘AI’. 
This is the Growth.

Originally the plan was for a more fluid feedback loop between the user and the ‘AI’. However, that required the use of multiple JavaScript files (some of which non-vanilla which goes 
against assignment requirements) as well as an intensive amount of coding so the idea was scrapped. Instead, the use of ‘radio’ elements was implemented. By giving users a limited number 
of options, they can choose to further their conversation with their ‘Buddy’.  This allowed for an easier implementation for the branching pathways in the experience. It also allowed for 
a more intuitive use of the experience, as users are generally able to instinctively understand how to interact with the experience – you press button a/b/c/d to get result a/b/c/d.

Imagery and sound are not incorporated into this experience, the closest having been only a rare few text-made emoticons. This is of course, to further enhance the old school, late 70s to 
80s feel of this experience. 
*/

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
    /* var image = "";
    if (conversation[conversation.currentScene].image) {
        image = "<img></img>"
    } */
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
    /* if (conversation[conversation.currentScene].image) {
        document.querySelector("img").src = `script.js/${conversation[conversation.currentScene].image}`
    } */
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
/* Originally I was going to use 'checkboxes' rather than 'radios' as my selectable functions, but the former can have multiple selected which was a no-go for me. As such 
I switched over to the latter. Unfortunately, I didn't have time to make entire word clickable rather than just the little dots, so the clicking done by users will have to 
be fairly precise. */

/* All this code is done to make sure everything operates how it should. This way, the text is generated when it should, buttons can be clicked, options can be selected, 
names can be typed and appear when they should and I can sleep easy knowing I have circumnavigated around all of the harder options which will render this file at least 
3 times as long to get the same results. */

/* Also, in case you were wondering, areas where rather than the inputted name appearing during the interactive experience there is a ${input.name} or something along those 
lines were made on purpose. It is to further promote the appearance that the AI is becoming more and more unstable. */

/* The sections in binary, the one that appears when you ask about where people go after death is actually a bible verse answering the question: (Ecclesiastes 12:7 "And the 
dust returns to the earth as it was, and the spirit returns to God who gave it."). I put in binary to make it look like the AI was really breaking down. The binary that appears 
when you choose to have shock therapy is just the word 'BZZT' repeated over and over again. Again, so that it looks like something is not computing right. */

/* The rest of the text used to make it appear as though the machine is going haywire is done through the following:
1. Capitalising random letters: Project: Buddy => PrOJecT bUddY 
2. Switching them with similar looking numbers: Project: Buddy => Pr0j3ct BUddY 
3. Using a creepy text generator: Project: Buddy => P̶̦̳̀r̴̭̓o̶̫̒͜͝j̸̜̄͝ͅe̵̤̓ͅc̵̘̍̚t̶̞́͊:̷͉͍̉̚ ̸̭́B̴̜͘u̴̜̒̈d̶̝͌d̵͉̂̄ỳ̸̛͔̮      (I used this one in particular: https://lingojam.com/CreepyTextGenerator)
4. Repeating words/lines/letters: Project: Buddy => ProjectProject: Buddyyyyyyyyyyyyyy
And a combination of any of the above. */

/* Extra stuff:
1. The books recommended by the 'BUDDY' are all about AI and robots in a futuristic setting and the harm/good they cause/can cause.
2. The 'Walter Freeman and James Watts Collection' are actual 'scientific' studies conducted by the two men who brought about transorbital lobotomy, the most infamous procedures 
were conducted with an ice pick dug from behind the eye and into the frontal lobe. It was made out to be a cure for mood disorders like hysteria and depression, etc. Those who have 
undergone the procedures have appeared to become more 'pleasant' in their demeanours and no longer made as much of a fuss, but were practically in a vegetative state thereon after, 
losing the ability to speak and react and function as a normal human being. It was a dark period of time for the psychiatric community.
3. Shock therapy was often used as a treatment for mental illnesses. As you may have guessed, it tended to do more harm than good. Now shock therapy, also known as electroconvulsive 
therapy is done more safely and in smaller doses. 
4. The Bethlem Royal Hospital, also known as Bedlam, is probably the most infamous psychiatric hospital in the world. First opening in the 13th to 14th century, it has inspired many 
horror movies, books and other media. Really all insane asylums were inspired by it in some way.
5. The 4 unavailable topics of conversation are some of the major stressors in life according to psychology. Seeing how this is a 'therapy simulation experience', I thought it was 
fitting to be the topics of conversation. They're also unavailable for discussion in the experience because often enough times in life, you either get useless advice on them, or no 
advise at all. People are also often rather aversed to talking about these topics on a personal level.
6. Heroin is used as a 'drug recommendation' because I found it ironic that the user is trying to cure their possible depression but is being recommended a drug that often induces a 
state of depression in its abusers after the high has worn off. And so they abuse the drug again and again, to feel good again and again. It's a vicous never-ending cycle.
7. As mentioned in the 500 word explanation required in the assignment, the repeating words are based off of a real-life instance of two AI algorithm "bots" improvising communications 
in a Facebook lab experiment in 2017. */