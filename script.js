const storyPages = [
    {
        id: -2,
        text: `<p style="text-align:center;">Cece Salad</p><img src="/Cece2.jpg" alt="Character Image" style="max-width: 100%;">
        A teenager on the whisp of adulthood. Cece originally planned on studying medicine, 
        but an impulsive choice changed her path forever.
        
        <br><br> Can you help Cece achieve her dreams? Or will you fail and follow the path everyone else wants you to follow?`,
        //put here
        choices: [
            { id: -2, text: "Return to the story", nextPageId: "prevPageId" }
        ]
    },
    {
        id: -1,
        text: `Identity Quest is a CY
        OA (aka choose your own adventure) 
        originally made in 2022 for a highs
        chool ELA project. The story follow
        s a girl named Cece Salad and her journey
         growing up.<br><br> I have implemented my
          own user interface based on my past proje
          ct and inspiration from Choiceofgames.com
          . This is a basic CYOA that utilizes html,
           js, and css. The story is heavily simplified
            compared to the original work.<br><br><img src="/about.jpg" alt="Character Image" style="max-width: 100%;"><br>I hope you enjoy it!`,
        choices: [
            { id: -1, text: "Return to the story", nextPageId: "prevPageId" }
        ]
    },
    {
        id: 1,
        text: `You can’t believe you’re doing it! Clutching the one-way ticket tightly in your hand, you stand on the 
platform and peer down the tracks, waiting for the train to pull in. Eventually, you hear the railroad crossing 
bars go down and a whistle in the distance. <br><br>

You tuck your phone in your pocket and pick up your suitcase. The 
train slows to a stop and the doors open. You wait for other passengers to board first, then step onto the train, 
spotting an empty row of seats not too far away. You throw your back pack into the overhead racks and slide into 
the window seat, pulling out your ticket and your phone. <br><br>

Earlier in the day you texted your Uncle Barry, who lived in the 
city, asking if you could stay with him, luckily he agreed. The train pulls out of the station with a lurch. You live near 
the end of the line and this train has a lot of stops to make, so it leaves you with a lot of time to wonder if you’re going to regret 
your actions. <br><br>

The train isn’t very crowded, and almost everyone is on their phone or reading, so no one is paying attention to you. 
You don’t want to kill the battery on your phone so instead you look out the window at the scenery flying past. A conductor walks into 
your car, asking for tickets. You pull yours out. He punches it and takes it away. There’s no going back now. Your phone vibrates and 
you look at it. Your uncle agreed to meet you at Grand Central and let you live at their place for a bit. With housing sorted, you feel 
like a weight has been lifted off your shoulders. All that’s left is to get settled into city life.
`,
        choices: [
            { text: "Soon you fall into asleep...", nextPageId: 2 },
            // { id: 2, text: "Look for a way out", nextPageId: 3 }
        ]
    },
    {
        id: 2,
        text: 'Earlier that day... Your mind is flooded with what happened this morning; the event that brought you on this journey. You woke up, only to be disappointed by another day in suburban TownVille. The smell of microwaved breakfast filled the air, and slowly, you stumbled downstairs and into the kitchen. <br><br>Your mother, father, and older sister were already sitting at the table waiting for you. You could see the reflection of the laptop in the other room that your sister gave you after she graduated high school. <br><br>“You woke up late again? That’s three nights this week. You’ll never become a successful person if you keep ignoring your alarm clock,” your sister lectured. Your mother rolled her eyes, and your father hardly looked up from the morning paper. <br><br>Just another day in TownVille. After quietly munching on a cold-in-the-middle breakfast burrito, you turned out of the kitchen and into the bathroom to make yourself look at least a little prepared for the interview. The interview was something your parents had set up to push your career path in the direction of medicine. There were going to be at least three of the top doctors ready to interview you for an internship this summer, just across town at the local doctor’s office. You were happy your parents were ensuring you would be successful, but being a doctor just wasn’t your passion. Instead, you preferred',
        choices: [
            { id: 3, text: "Cooking, I want to be a chef", nextPageId: 4 },
            { id: 4, text: "Baking, I want to be a baker", nextPageId: 4 }
        ]
    },

    {
        id: 3,
        text: `You started walking towards the door of the office while your parents were watching from the car. 
You pressed the doorbell to let the doctors know you were ready, and your parents drove around the corner and out of sight. 
As soon as the family minivan disappeared past the traffic light, you sprinted down the block to the train station. 
You had to follow your passion, or else you knew you’d be miserable this year. 
You started having second thoughts in line at the ticket booth, but it was too late to turn back. You knew you had to leave 
TownVille to escape the pressure of your overly-successful family.
`,
        choices: [
            { text: "You felt like you were were suffocating there", nextPageId: 4 }
        ]
    },
    {
        id: 4,
        text: `You had to <br><br>
        You had to leave...`,
        choices: [
            { text: "Brrrr......iiiiinnnnng!!!!", nextPageId: 5 }
        ]
    },
    {
        id: 5,
        text: `The sound of the robotic female voice wakes you up from your thoughts. You pick up your backpack and hurry out the doors. Blinking, you find yourself in the Grand Central Terminal. You pick up your backpack and hurry out of the door. You receive a text from Barry Tone, your uncle. Uncle Barry is letting you stay at his place while you go to school. Without him you don't know what you'd do. 
        <br><br>“Sorry, I got called for a gig so I can’t pick you up like planned. You should take the subway to my house, as the station is only a five-minute walk away. You have the keys, right? Unpack and make yourself at home. You can explore the city when I'm gone. Just be back before 8. See you then."
        <br><br>After sending him a quick text, you walk to the Grand Central - 42 St. station and buy a one-way ticket. You play on your phone as you wait for the subway to come. 20 minutes later, you find yourself outside of his apartment building. It’s a huge old brick building with black fire escapes adorning its sides. You vanquish your nerves and head in. You walk in and lug your backpack to the 5th floor. You use the silver key he had sent you in the mail and enter his apartment.`,
        choices: [
            { text: "The apartment", nextPageId: 6 }
        ]
    },
    {
        id: 6,
        text: `Inside it’s surprisingly commodious. The place is quaint and has little furniture. 
His piano takes up more than half of the living room, which is connected to the kitchen. Music sheets are sprawled across the table, couch, and placed haphazardly in vases? Glancing elsewhere, you see four doors. You open each one out of curiosity. 
One is a bathroom, one is his room, one is a guest room, and one is a music room with a lot of chairs, guitars, and books. You move your backpack to 
the guest room and start to unpack. There are about 3 hours until Barry comes back from his gig. 
`,
        choices: [
            {text: "You decide to goto sleep", nextPageId: 7}
        ]
    },
    {
        id: 7,
        text: `You lay down on the bed and go on YouTube to catch up on videos you had missed. 
You scroll through Pewdiepie, Tasty, Say Yes to the Dress, and many other channels. Slowly, 
you feel tired and close your eyes. But you can’t fall asleep. Mom and Dad must have noticed by now. You left them a note explaining everything. Knowing them it won’t be surprising if they come drive here and bring you back home. 
Conveniently Barry has a very poor relationship with your parents and therefore they don’t know where he lives. Though they have his number, there’s no way they can easily track you. Speaking of him, you are awakened by a knock on the door. You see Barry leaning on the doorframe with a lopsided grin and a hand held out for a shake.
`,
        choices: [
            {text: "The next day", nextPageId: 8}
        ]
    },
    {
        id: 8,
        text: `You take your phone and wallet and walk outside. You walk mindlessly along the sidewalk, watching cars zooming past you. Your hair is blowing in the distance. Everything here is so different.
Faint sounds of children laughing and cars honking fill the otherwise quiet summer night. You treat yourself to an 
iced drink and cookie at Starbucks when you feel your stomach growling. You walk past various famous stores such 
as Nike and Forever 21, lingering at the displays at Macy's. You look at your phone and see that it was time to head 
back to the apartment. After getting back, you sit on the couch and browse through the channels when you hear the door opening. 
<br><br>

"Hey Cece, it's been a while since we last met!" He had a box of pizza in his hands and had a huge smile on his face. You smile back and follow him to the kitchen. 

<br><br>
"Your father is so demanding at times. I am glad that you reached out to me," he says as he sets the box down on the table. Barry winks and you remember that you share the same  colored eyes. There weren’t any pictures of uncle Barry at home. You wonder if the same will happen to you.

<br><br>
"I was in your place many years ago. I got word from the school yesterday. You are now enrolled!" He takes a bite of the steaming pizza. For a moment you think you catch a glimpse of regret, but the moment passes and he’s back to his usual self. 

<br><br>
"We'll buy some supplies tomorrow once you get the list. In the meantime, tell me more about what you've been up to lately." 
<br><br>

"Not much I went to sleep early. I don't know if I made the right choice..." What if it was all a mistake? You wondered how Mom and Dad must be incredibly worried and mad. Despite all your issues you believe they’d still love you right?
     <br><br> Uncle Barry grits, “There’s no such things as mistakes, only happy accidents. You’ll find that you’re better off without them anyways.” There’s a steely resolve in his answer. You think you catch a bit of bitterness. 

Barry puts the rest of the pizza in the fridge. The phone on the counter rings and he unplugs it.

“Darn telemarketers. The phone is always ringing, but especially today.” He says goodnight and closes his door. Well Barry certainly has different parenting styles. 

`,
        choices: [
            {text: "Next page", nextPageId: 9}
        ]
    
    },
    {
        id: 9,
        text: `The next two weeks go by in a blur as you adjust to your new life. Barry shows you important landmarks 
(most of which consisted of the best pizza restaurants and music stores) and introduces you to his band. 
Before you knew it, it was the morning of the first day of school. 
<br><br>
You walk into the giant building that is your new school. When you look up, you can barely see the ceiling because of how high up it is. 
The School of Culinary Arts is about four times the size of your old school 
back in TownVille. You can't stop thinking of the way your parents had just sent you 
off to do an internship with barely any acknowledgement to the fact that you really aren't
passionate about medicine. Thinking about your parents put a frown on your face, and when 
your thoughts are interrupted by a tap on the shoulder, it nearly made you scream. 
You quickly collect your thoughts and smile.

“Hi, you must be Cece! My name is Claire E, but you can just call me Claire. 
This is my friend, Sam O’Ella, and we’ll be showing you around the school 
this morning! I can tell we’re going to be great friends already.” she held out her
hand enthusiastically and waited for you to shake it. Her energy startles you, 
considering you're still half asleep. You shake their hand and your eyes pan over to 
Sam, who is busy pulling his hoodie strings tight to make his face barely visible under the low quality school lighting. 

`,
        choices: [{
           text: "Onto the tour!", nextPageId: 10
        }]
    },
    {
        id: 10,
        text: `You and your new acquaintances made your way down the long, main hallway as Claire
explains nearly every inch of your surroundings. “On the right is second period, Experimental Findings 
with Mrs. Tira Missue. There’s the auditorium where we have assemblies about upcoming events. 
Oh, and coming up on your left is our first period class, Cooking 101! We actually 
all have the same schedule this year, so we’ll be able to show you the ropes.”
<br><br>
Sam doesn't say much during the tour. He doesn’t look quite as energetic as Claire,
but you don't really care that much, because you were sure he would come around 
eventually. Just as you snap out of your thoughts, you realize you had been 
staring at Sam. 
<br><br>
He glances at you and says,“We only have a couple minutes 
before first period. Lets hurry up and finish the tour.” After seven more minutes of 
listening to Claire's lengthy but detailed speech, the bell rang. You 
head towards your first class, your new crew just a few steps behind you. 
`,
        choices: [{
            text: "First class of the day!", nextPageId: 11
        }]
    },
    {
        id: 11,
        text: `You end up back at Cooking 101 with Sam and Claire. Sam seems to be more awake, but still looks grumpy. 
"50 minutes of nap time." Sam grumbles. Claire quickly punches him in the stomach while rolling her eyes. She turns to you and smiles. 
"The class is not that bad. Sure, the teacher, Mr. Phil Letnife is boring and has a monotone voice. But, I've heard that 
what we learn is actually useful for the future when doing small talk with great figures. It helped one of my friends to get into the CIA college." whispers Claire. 
She opens the door to the classroom. 
<br><br>
There are roughly 40 desks in perfect rows stretching 
from one end of the room to the other, facing the large whiteboard in the front. There are a few students sitting at their desks. Mr. Letnife looks up at you. 
"I have placed name cards on your desks. We will be sitting alphabetically for the first two months," he says, turning back to his papers. 
You walk around the room and finally see your card. You sit down and take out your supplies. A few minutes later, the loud bell rings and 
Mr. Letnife walks to the whiteboard. 

<br><br>
"Hello class, my name is Mr. Letnife and I will be teaching Cooking 101. This year, we will not only be 
learning different theories and renowned people, but also writing and presenting these to the class. I have a syllabus I am 
passing out right now. Make sure that you don't lose this, as it is essential to know when the next projects are due." His voice is 
very lackluster, droning on and on about the grading policy and his past experiences that he doesn’t want to repeat again. You 
notice Claire eagerly taking notes in her notebook while Sam nearly falls out of his chair in his sleep. You turn your 
head back to the board and try to tune back in. You are saved by the bell after 45 minutes of torture. Claire packs up her 
supplies while Sam jumps up from surprise. You are almost done packing your supplies when Claire walks up to you. 
<br><br>


"Come on, CeCe. Let's go to our next class!" she exclaims. Sam stands to the side, rubbing his eyes. You look at your schedule. 
Your next class turns out to be Experimental Findings, taught by Mrs. Tira Missue.
`,
        choices: [{
           text: "Period 2", nextPageId: 12
        }]
    },
    {
        id: 12,
        text:`"This class is one of the best classes. You get to experiment new recipes and present a final product at the end of the year. 
It is great for the future because you can refer back to your ideas. I have heard that many alumni have used a lot of their ideas from 
this class and produced great results." Claire exclaims with wonder in her eyes. Fortunately, the classroom is located a few 
rooms down the hallway. You walk in and immediately notice the stations against the walls. There are about 40 tables with cabinets 
and drawers above and below the table respectively. 

<br>
<br>
"Welcome! Go to a random station and put down your bags. Sit on the stool until further instruction." 
The teacher calls from the front of the room. You pick a station between Claire and Sam.
Five minutes after the bell rings, the teacher stands up."My name is Mrs. Missue and I will be 
teaching Experimental Findings for this year. Basically, I will be expecting from you at least two new ideas 
each week, both a picture of the idea and a write-up for each. I will not grade based on the equality of the ideas, 
but on the completion and the amount of work you have put into these ideas. It is recommended, however, that 
you put some effort into these ideas because you can use them in the future. There are basic supplies in the drawers 
that you can use, but for more specific supplies you must bring them yourself. My main goal for this class is for you 
to have fun and unleash your creativity. I will take attendance and we will start our first entry!" 

<br>
<br>

The rest of the class 
flew by quickly. You draw a couple of ideas in your notebook, most of which were ideas you had for a long time. 
You are about to write more descriptions when Mrs. Missue rings the bell on her desk. 

<br>
<br>
"We have only three minutes left in class, and your stations must be clean before you leave the room. 
Remember, you are going to the auditorium for an assembly after the bell rings!" You quickly clean up and pack your notebook inside when the bell rings. 
"Quick, let's get a good seat!" shouts Sam as you walk to the auditorium. 
`,
        choices:[{
            text: "To the auditorium", nextPageId: 13
        }]
    },
    {
        id: 13,
        text:`You sit down in one of the red chairs and wait for the stragglers to find a seat. Principal Doredumble walks to the front of the assembly 
and starts speaking, although no one can hear him. After going through five minutes and three microphones, you can finally hear what he has to say. 
<br><br>“I am glad to welcome you to another year at our wonderful high school. Whether you’re a returning student or not, we are glad to see so many faces that are ready to learn. 
I have been told by our department heads that I must remind you of two important things. The first item is that two of the first-floor bathrooms have 
been converted into staff bathrooms. The second item is that our annual cooking competition has been moved back from June 13th to May 
17th, the week before spring recess. Please keep that in mind as you complete your schoolwork. I don’t want to delay your lunch 
any further, so I will close this assembly out by letting the student government announce election results.” <br><br> 
The rest of the assembly was filled with names you didn’t recognize that took positions you weren’t interested in. 
You are more interested in devouring your sandwich. School is already tiring enough as it was- having to learn all 
about a new school just added onto the stress. You decide to find Claire and Sam and eat lunch with them, so you can ask them what exactly this competition is. 
`,
        choices:[{
            text: "Goto lunch", nextPageId: 14
        }]
    },
    {
        id: 14,
        text:`"Hey, Cece! What do you think of  Cooking 101?"

"Great, his voice was so soothing I fell asleep in only a couple of minutes," said Sam.

"Shut it Sam, I was asking Cece," said Claire slightly annoyed.
`,
        choices:[{
            text: "I didn't really like it", nextPageId: 15},
            {text: "I think I'll look forwards to the class!", nextPageId: 15},
            {text: "It's okay, time will tell", nextPageId: 15},
            {text: "Easy Peasy lemon squeezey", nextPageId: 15,
        }]
    },
    {
        id: 15,
        text:`"Yeah I feel you Cece."
        <br><br>
        You continue to munch on your sandwich and drink some water. You still have some questions that you want to ask.

        `,
        choices:[ 
            {text: "Why did you enroll here Claire?", nextPageId: 16},
            {text: "Why are you always so sleepy?", nextPageId: 17},
            {text: "Can you tell me more about the competition?", nextPageId: 18},
            {text: "I have no more questions", nextPageId: 19},
        ]
    },
    {
        id: 16,
        text:`"I live for food! Food has always been a talent of mine," smiled Claire. She looked over to Sam and asked, "What about you Sam?"
        <br><br> "It easy I guess. My entire family is in the business." Sam shrugged and turned back to his phone. How rude...`,
        choices:[{
            text: "Next page", nextPageId: 15
        }]
    },
    {
        id: 17,
        text:`"I dunno. I did end up playing games till 4am." Sam yawned and then whispered, "Sometimes I think it's genetic."`,
        choices:[{
            text: "Next page", nextPageId: 15
        }]
    },
    {
        id: 18,
        text:`“What was the competition Mr. Doredumble was talking about?” you ask before digging into your sandwich. 

<br><br>
“It’s the time at the end of the year where everyone gets to show off what they’ve learned!” responds Claire.
<br><br>

“Everyone here is super competitive and tries their hardest to win. A lot of the winners go on to become pretty well known in the industry.” 

<br><br>
“And if you’re worried about how it will affect your GPA, it won’t so don’t worry. Think of it like a science fair or a play, 
it’s just to show off all the hard work of the students," replies Sam. Even though you saw him nap through the entire assembly, 
he still looks like he could sleep for twenty years.
`,
        choices:[{
            text: "Next page", nextPageId: 15
        }]
    },
    {
        id: 19,
        text:`When the bell rings, you head to a couple other classes and PE. After a long day you walk back towards your new home.
`,
        choices:[{
            text: "Home Sweet Home", nextPageId: 20
        }]
    },
    {
        id: 20,
        text:`Whew, it has been such a long day. After getting back to Uncle Barry's place you take out 
your phone. Scrolling through the notifications you can see 89 missed calls along with 894 text messages... 
They're all from your family. Ever since you left you've just ignored them, but shouldn't you give them a call?
`,
        choices:[
            {id: 20.1, text: "No, they're dead to you", nextPageId: 20.1},
            {id: 20.2, text: "Of course, your family is worried sick" ,nextPageId: 20.2}
        ]
    },
    {
        id: 20.1,
        text:`Yeah no way in hell are you ever gonna call them.`,
        choices:[{
            id: 12, text: "Next page", nextPageId: 21
        }]
    },
    {
        id: 20.2,
        text:`You pause and then press the call button. Hopefully this goes well.
<br><br>
"Hey Mom, Dad?" you say
<br><br>
"My god Cece! Do you know how worried we were about you? We've been searching for you! Do you know how that I was about to c-"
`,
        choices:[
            {id: 20.3, text: "I'm sorry... It's my fault", nextPageId: 20.33},
            {id: 20.3, text: "I need to do this, sorry...", nextPageId: 20.44},
            {id: 20.3, text: "You're such a gas lighter", nextPageId: 20.55}
    ]
    },
    {
        id: 20.33,
        text:`"I....I'm sorry too. Cece, you don't know how much you've worried me!" Your mother unexpectedly cries and tells you it's her fault. She continues to wail that she always treated you harshly because she just wanted you to be successful and live a good life. After much more talking, and crying your mother composes herself and she tells you that she'll support your dreams... You feel like a weight has been lifted off your shoulders.
`,
        choices:[{
            id: 20.33, text: "Next page", nextPageId: 21
        }]
    },
    {
        id: 20.44,
        text:`"How could a parent not worry about their child when they haven't heard from them in weeks!" Your mother continues to tell you how irresponsible you are and that you almost gave her a heart attack, but even though she's yelling at you, you can tell that her voice is choking up, and soon she's crying. After your mother collects herself, the two of you have a heart to heart chat and she agrees that you can go to that school.
`,
        choices:[{
            id: 20.44, text: "Next page", nextPageId: 21
        }]
    },
    {
        id: 20.55,
        text:`You scream at her to leave you alone. You tell her that she'll never find you. In return your mother coldly replied, "Your father and I will find you, and you will regret this act of stupidity." And then she hung up...`,
        choices:[{
            id: 20.55, text: "Next page", nextPageId: 21
        }]
    },
    {
        id: 21,
        text:`Sighing you grab a glass and sip some cool water; it's has been quite the long day for you. Uncle Barry has been very 
accommodating compared to your parents. Your parents...

*if (parents="bad")
   You can't hide from your parents forever... If you continue like this you might really ruin your relationship with them. Uncle Barry may have been able to pursue his love for music, but at what cost?
   *goto homeb
*if (parents="ok")
   After talking to your parents they've calmed down. A bit. They still don't like what you're doing but at least they aren't driving to the city to bring you back. At least ... for now.
   *goto homeb
*if (parents="good")
   Your parents while disappointed, told you they didn't mean to come off so harshly. You're glad they'are accepting your choice. With your parents backing your decision you'll be able to attend school without a fuss. Your mother even said she'd send you money to help pay for your expenses.
`,
        choices:[{
            id: 12, text: "Next page", nextPageId: 22
        }]
    },
    {
        id: 22,
        text: `Before you go to bed you could relax or maybe study.
*choice
   #Study
      You grab out a book and take some notes on the techniques you learned that day.
      *if (goal="chef")
         *set Cooking_Skill +19
         *goto bump
      *elseif (goal="designer")
         *set Designing_Skill +19
         *goto bump
   #Watch more Youtube
        You find some cool videos on dancing cats. You watch it for a couple hours.
        *goto bump
   #Eat junk food
        You grab some soda, and a bag of chips. After finishing that you go out and get a dozen donuts, unfortunately you think you may have eaten too many.
        *goto bump
   #Play with Barry's instruments
        You walk into Barry's studio and fool around with the bongos, and guitars for a bit.
        *goto bump
   #Go for a jog
        You grab your earbuds and phone and go outside.
        *goto bump
   #Play video games
        You grab out your switch and play New Horizons.
        *goto bump

        After that you went to bed, eager to get some rest.

`,
choices: [
    {text: "Next", nextPageId: 23}
]
    },
    {
        id: 23,
        text: `Slowly, you get used to your life at school. You continue to hang out Claire and 
Sam and thought about your project for the competition. Sometimes. All of your 
teachers are decent with the schoolwork, thankfully, and you have less tests than your 
previous school. But the midterm counts as 50% of your average, although you have the 
chance to receive extra credit if needed. You tell yourself that you have to ace the midterms 
and motivate yourself in your studies. Sadly, this only lasts for a week. You start to become distracted by the vibrant city. 
`, 
choices: [
    {text: `Next few days`, nextPageId: 24}
]
    },
    {
        id: 24,
        text: `Instead of studying, you want to go to the renowned museum with the famous painting of 
swirls in the night sky and melting clocks in the desert. You want to eat at the Michelin restaurants 
all around the city and visit luxurious clothing stores such as Gucci. You want to stroll through the 
great park in the heart of the city and eat a hotdog or two. TownVille never offered you those experiences nor the freedom. This is your only chance.  
`,
        choices: [
            {text: `You really need to get your stuff together`, nextPageId: 25}
        ]
    },
    {
        id: 25,
        text: `You succumb to these desires; after school, you take either the bus or subway to various points
around the city. Your school provides all the students with free passes to all of the museums in 
the cities, so you decide to go to each one for at least three days. You then walk to a local restaurant 
and try a food using your lunch money and the money Barry provides for dinner, which you usually 
eat alone. You don't tell your friends about your routine because you are sure that they would reprimand 
you and tell you to focus on your school work; according to them, learning is more important than experiencing 
things first hand. You think the opposite.  
`,
        choices: [
            {text: `Are you making the right decision?`, nextPageId: 26}
        ]
    },
    {
        id: 26,
        text: `Weeks fly by as the colorful trees soon shed their leaves. You are not behind in school, per say, as 
you do the bare minimum for your homework. You are keeping up with your classes, but your adventures 
prevent you from studying as you fall asleep right after you do your assignments. Soon, you realize that your 
midterms are coming up. Claire tells you that she could help you to study, but you refuse kindly. 
You don't want to burden her or embarrass yourself with the very limited knowledge you have in your 
courses. You begin to internally panic a week before the exams and decide to relieve your stress by going out. 
Before you know it, it is the day of the mid-term. You walk to school with butterflies, no, birds pecking inside 
your stomach. You see your friends near the entrance and with a deep sigh, you walk towards them. 
Your feel your heart pounding as you walk towards your spot in room 201, the room you were assigned 
to take the test. You don’t pay attention to the instructions given by the teacher, instead looking 
at the cover of the test. When the bell rings, you take a deep breath and open the test. 
`,
        choices: [
            {text: `It'll be okay`, nextPageId: 27}
        ]
    },
    {
        id: 27,
        text: `It's been about 30 minutes and you're only a quarter of the way done. You only have 10 minutes left! 
You really should have studied. You turn the page and try to answer the next question.
<br><br>
Question 23:
<br><br>
How does one tell if a steak is perfectly cooked? 
`,
        choices: [
            {text: `One must taste it.`, nextPageId: 28},
            {text: `One should sniff it and determine the temperature with the hands 
`, nextPageId: 28},
            {text: `The steak should be served as soon as the cow is slaughtered`, nextPageId: 28},
            {text: `The steak must have a certain sour smell emitting from it`, nextPageId: 28},
            {text: `One must make sure the steak sits for days in a hot room and make sure it has turned green with flies around it.`, nextPageId: 28},
            {text: `It should be a bright red when cutting into.`, nextPageId: 28},
            {text: `The steak should be the color of charcoal 
`, nextPageId: 28}
        ]
    },
    {
        id: 28,
        text: `You think that's the correct answer? Wait... You feel like you answered wrong, but there's no time to dawdle! You look at the next question.
In 1728, this man was born with the last name Cook. 
He is known for sailing the seas, acquiring new recipes, and getting stabbed to death. 
What was his first name? 
`,
        choices: [
            {text: `Jamie Cook`, nextPageId: 29},
            {text: `Connick Cook`, nextPageId: 29},
            {text: `Sza Cook`, nextPageId: 29},
            {text: `Elmo Cook`, nextPageId: 29},
            {text: `Big Diper Cook`, nextPageId: 29},
            {text: `Watashiwa Cook`, nextPageId: 29}
        ]
    },
    {
        id: 29,
        text: `You flip the page to the next question. 

The following is a chemical reaction between amino acids 
and reducing sugars that gives browned food its distinctive flavor. 
Seared steaks, fried dumplings, cookies and other kinds of biscuits, breads, 
toasted marshmallows, and many other foods undergo this reaction. 
<br><br>
You stare at it in horror, it reminds you of your days in chemistry class. 
`,
        choices: [
            {text: `Mallard reaction`, nextPageId: 30},
            {text: `Phagocytosis`, nextPageId: 30},
            {text: `Double replacement reaction`, nextPageId: 30},
            {text: `Brown’s reaction`, nextPageId: 30}
        ]
    },
    {
        id: 30,
        text: `After many more questions you finally reach the last one. 
Which cooking instrument slices fruits and vegetables into beautiful, even slices? 
`,
        choices: [
            {text: `The Sitar`, nextPageId: 32},
            {text: `The Mandolin`, nextPageId: 32},
            {text: `The Guitar`, nextPageId: 32},
            {text: `The Balalaika`, nextPageId: 32}
        ]
    },
    {
        id: 32,
        text: `Ah! You stretch your legs and hand in a thick wad of paper. You don't think you did well, but at least it's over.
<br><br>The midterm is finally over, but you didn’t do so well. Walking out of the classroom doors, 
you see Claire approaching. The one thing you could use right now is some motivation. 
<br><br>

“Hey, Cece! How did you do on the midterm? I got a perfect score!” You hesitate before telling 
her that you did terrible, and she pauses. “Oh, that stinks. I’m sure you’ll do better next time. 
Maybe we can study together so I can help you!” You smile back at her and turn towards your locker. 
On the way, you bump into Sam.
<br><br>
“Hey, how’d you do on the test? I think that was the easiest one ever!” 
You tell him your score. “Oh that’s not good. I would say you should study real hard for the final, but maybe 
you weren’t cut out for this school. You should just drop out while you can,” He explains. “Well, anyways, I 
gotta go. See ya!” You now have very mixed advice from your two closest friends. Whose advice do you take? 

`,
        choices: [
            {text: `Sam's advice, he's right, maybe cooking should be a hobby`, nextPageId: 33.1},
            {text: `Claire's advice, you'll just try harder and study...`, nextPageId: 33}
        ]
    },
    {
        id: 33.1,
        text: `The news didn’t go over very well when you told Uncle 
Barry that you were leaving. He was really upset and tried 
to get you to stay, but your mind was made up. You decided to 
go back home to TownVille to take the internship that your parents 
had gotten for you, and eventually you would become a doctor. Uncle 
Barry couldn’t bear driving you to the train station, so you walked there yourself. 
<br><br>Although you were sad about leaving the city and your uncle, you learned more about yourself, 
and you were happy you embarked on this journey of self-discovery. Your conclusion: 
being a chef is a lot harder than you thought it would be. The competition would’ve 
just been disappointing since you struggled so much on the midterm. It would’ve taken too much effort 
to be able to make a career out of it, and you decided to keep it a hobby. You always wondered, though. What if? 
`,
        choices: [
            {text: `Is it too late?`, nextPageId: 33.2}
        ]
    },
    {
        id: 33.2,
        text: `After working for almost two years as an intern in the medicine business, you started to miss who you used to be; 
adventurous, daring, and confident. You had just released your 50th post on your food blog with over 100 followers. 
After looking back at your first couple posts, you thought that maybe it was time to give your dreams another chance and 
send a text to Uncle Barry. Maybe you should study better this time, though. 
<h1 style="text-align:center;"> SAD ENDING <h1><img src="/about.jpg" alt="Fail Image" style="max-width: 100%;">`,
        // choices: [
        //     {text: ``, nextPageId: 25}
        // ]
    },
    {
        id: 33,
        text: `You know that after you performed terribly on midterms that you have to do better. 
Claire seems to take pity on you and helps you figure out a study schedule. Between classwork 
and Claire's intense study schedule, there is no way you could fail. Right? You have a about a month left before the competition. How should you spend you time?

`,
        choices: [
            {text: `You got this! No need to study`, nextPageId: 34},
            {text: `You'll do a ton of shopping, and hang out with friends.`, nextPageId: 34},
            {text: `You want to go to the best pizza places Barry mentioned. Maybe you can even go sightseeing.
`, nextPageId: 34},
            {text: `You'll to study as much as possible. Though you do want to relax too, if there is time.
`, nextPageId: 35},
            {text: `You'd like to practice the guitar with Barry, and go over to a friend's place.`, nextPageId: 34},
            {text: `You want to explore the city and the beach. Maybe you'll study a bit on the beach.`, nextPageId: 34}
        ]
    },
    {
        id: 34,
        text: `A month has past, and you have one more night before you partake in the contest tomorrow. What should you do before you go to sleep?
`,
        choices: [
            {text: `Study a bit more`, nextPageId: 34.1},
            {text: `Watch some Youtube videos`, nextPageId: 34.1},
            {text: `Go buy a midnight snack at McDonalds`, nextPageId: 34.1},
            {text: `Relax and read a book`, nextPageId: 34.1}
        ]
    },
    {
        id: 35,
        text: `You have the test tomorrow, should you do some light review?`,
        choices: [
            {text: `No, it's not fun studying!!!`, nextPageId: 34.1}
            ,{text: `I must study!!!`, nextPageId: 35.1}
        ]
    },
    {
        id: 34.1,
        text: `The day of the cooking competition was here! Every student enrolled in the culinary program 
was assigned a room number, where the materials and equipment needed to make the dish 
would be available for use. Sam and Claire have been grouped together but of course you have 
been separated. Teachers and judges would be responsible for getting footage and livestreaming 
it so everyone could watch. The pa system crackled to life. 
<br><br>
“Hello there! I’m Ted Allen and I’ll be the main host of this year’s Cooking Competition” 
<br><br>
You look around but no one seems shocked. How did the school get Ted Allen to host this!? 
<br><br>
“When I say go, the timer will start. You will have around six hours to make the judges 
your best version of baked Alaska! You were given the opportunity to prepare the ice cream 
yesterday and it should be in the freezer in your room.” 
<br><br>
You have been wondering how many flavors to do. Some people only used one while you swear 
you saw someone using seven different flavors. You decide to use the two classics, chocolate and vanilla. 
<br><br>
“Now, it’s time to begin. Three, two, one, go!” Everyone immediately swarms around the freezer to get their ice cream layer. 
Instead of following suit you hurry over to the ingredient rack and start picking out what you think you might need. You grab sugar and 
flour, then run to the refrigerator to get eggs and butter. As you turn to go back to your station you bump shoulders with someone and stumble, 
dropping your eggs. They crack all over the floor. With a sigh you put the butter down and grab paper towels to clean up the mess. No one helps you. 
Five minutes are gone by the time you’re done. You grab more eggs and return to your station to start making the pound cake. You’re unsure of 
how many eggs to put in, so you go with 
`,
        choices: [
            {text: `One egg`, nextPageId: 34.2},
            {text: `Two eggs with no yolk`, nextPageId: 34.2},
            {text: `14 quail eggs`, nextPageId: 34.2},
            {text: `42 eggs`, nextPageId: 34.2},
            {text: `No eggs`, nextPageId: 34.2},
            {text: `21 eggs with the shell`, nextPageId: 34.2},
        ]
    },
    {
        id: 34.2,
        text: `You grab a mixer and aggressively blend it all together, then shove it in 
the oven to bake. How long are you supposed to bake it again? 
`,
        choices: [
            {text: `One minute`, nextPageId: 34.3},
            {text: `30 minutes`, nextPageId: 34.3},
            {text: `An hour`, nextPageId: 34.3},
            {text: `It doesn’t matter so you don’t set a timer, promising to yourself to check in on it soon.`, nextPageId: 34.3}
        ]
    },
    {
        id: 34.3,
        text: `With only one layer left you start to relax a little more. You take more eggs out of the fridge, careful not to bump into anyone. You 
separate the whites and the yolks, add sugar, and whip it until it holds a peak. All that’s left is to combine the layers and 
the toast the meringue. Speaking of toasty, as you’re pulling out your ice cream layer the smell of burning cake bombards you. 
You feel bad for the person who’s going to have to use that cake until you realize, that’s coming from the oven you used. 
It’s your cake! You pull it out and stare guiltily. It may be a little, crispy, but you don’t have time to make another.

<br><br>
You haphazardly combine the layers, not considering that the hot cake might melt the ice cream. By the time you’ve slathered on the 
meringue it looks less like Baked Alaska and more like a dessertified model of Mount Vesuvius erupting. You check the timer- five minutes left. 
There’s no time to freeze the dish enough that it can go in the oven to toast the meringue. You try to fix it up, then throw it in the freezer and call it a day. 
`,
        choices: [
            {text: `Results`, nextPageId: 34.4}
        ]
    },
    {
        id: 34.4,
        text: `The results were in. Principal Doredumble turned from the judges and walked to the microphone. 
Sure, it may not have been your best work, but you had salvaged it in the end and put your whole heart 
into it. Would the judges see that and in return give you a place on the podium? Principal Doredumble starts 
to speak, but you’re too nervous to hear what he’s saying.  
<br><br>
“And in third place, we have”, he announces to the crowd while fumbling with the paper 
“Claire E.!” Claire rises from her seat as the crowd cheers and steps up to receive her award. 
There is still a chance that you could score first or second, right? 
<br><br>
“In second place, we have Thomas Jones!” If the crowd had been loud for Claire, they are even louder now. 
Thomas makes his way through the crowd and accepted the award.  
<br><br>
“Last, but certainly not least, we have the first-place award! This year’s first place in the culinary competition 
goes to…” You were gripping grip your seat so hard that your knuckles are turning white. You close your eyes 
and force yourself to calm down. “Mary Brown!” The crowd cheers. You could barely believe it. You have not even 
placed on the podium! All your hard work was seemingly for nothing. You can feel the eyes of your friends and 
family on you, watching you to see how you react to the news. You take a deep breath and keep clapping. 
Mary deserved the award; she had worked a lot harder than you after all. Principal Doredumble gestures to the crowd to quiet down. 
<br><br>
“ I would like to thank all the participants of this year’s culinary competition! The judges wanted me to say that all 
the dishes were excellent and deserving of first place. However, the students chosen were not only chosen for their 
excellent dishes, but for their studiousness and dedication to learning as well. I hope all the participants can look at the 
winners and aspire to be in their position soon. Parents, thank you for coming out to support your child.”  
<br><br>
As the crowd thinned you look for your parents, who you had seen earlier in the day. Eventually you catch them 
lingering outside the auditorium. You don’t really know what to say to them. You apologize for running way and 
thinking that you could achieve your dream by yourself, and promise to return home at the end of the school year. 
You start avoiding Sam and Claire in the hallways, deleting their messages. You have done better on the written finals 
than you had on the midterms, but they were not up to the standards you had hoped for. On the last day of school, you 
return to your apartment, pack your bags, and head home. Maybe if you had worked harder you could have stayed, 
but that was in the past, and you have to deal with the current consequences now. 

`,
        choices: [
            {text: `Epilogue`, nextPageId: 34.5}
        ]
    },
    {
        id: 34.5,
        text: `You are back in the city to help Uncle Barry move into a new apartment. Your high school 
escapade had made you realize that hard work is a big factor in success, and you applied 
yourself to school more than you ever had before. You hadn’t planned on being a business major, 
but you ended up in a good job with a great salary. Before heading back to the terminal to visit your 
parents you dropped by your old school one last time. Claire had gone on to work with a culinary magazine, 
and Sam had basically dropped off the map. The building looks the same as it did all those years ago. As you 
turned around a glint caught your eye. There, wedged between two rocks, is your old pair of scissors! You had 
no idea how they had stayed there all these years, but you weren’t about to question it. You gently pry them out. 
They are rusty and bent, but are still there nevertheless. Looking back at the school one final time, you pocket the scissors and go home. 
<h1 style="text-align:center;"> SAD ENDING <h1><img src="/about.jpg" alt="Fail Image" style="max-width: 100%;">`,
       
    },
    {
        id: 35.1,
        text: `It's only been a couple of minutes since the competition has started. 
Claire and Sam sit beside you. You eagerly wait for Ted Allen to announce the theme 
of tonight's annual competition. The crowd is full of anticipation and excitement. Allen strides 
onto the stage. He stands looking out to the crowd and then announces, "The annual 
cooking competition has always been looked forward to will be hosted by me, Ted Allen. 
As an alumnus, I hope you will enjoy this competition as much as I did. Without further ado, 
this year's students must put a twist on the classic, notoriously hard Baked Alaska!" 
<br><br>
The crowd is abuzz. You feel confident that you can make it.  
 
<br><br>
Baked Alaska has many steps, but you're sure that you won't make any mistakes. 
Thanks to your effort in studying, you're sure you can pull this off without a hitch. 
Suddenly your train of thought crashes as Ted Allen interrupts with his loud booming voice, "And the clock starts now." 

 <br><br>
You rush to your station and look for the ingredients that you need. 
Since you studied and made Baked Alaska many times you practically know the recipe by heart. 

 
<br><br>
Baked Alaska is a combination of an ice cream cake and a meringue on top of it. 
You start to prep the ice cream, you grab some heavy cream, and sugar to it. Now what flavor should the ice cream be? 
`,
        choices: [
            {text: `Cookies and cream`, nextPageId: 35.2},
            {text: `Chocolate`, nextPageId: 35.2},
            {text: `Mint chocolate chip`, nextPageId: 35.2},
            {text: `Peanut butter`, nextPageId: 35.2},
        ]
    },
    {
        id: 35.2,
        text: `After mixing it for a bit you pour the liquid into a pot and put it over low heat. 
Then you crack some egg yolks and temper it. You make sure the pot isn't too hot otherwise the 
eggs would scramble. After all the egg yolks have been added you put the pot in an ice bath, so 
it can cool down. Next is the méringue, you grab a bunch of egg whites and you take some sugar in 
dump it into a standby mixer and beat it on high. After stiff peaks have formed you stop and put it 
inside a bowl. You go check on your ice cream liquid and you put it into the ice cream machine, it 
should take around 20 minutes before it's done.   

<br><br>
"45 more minutes!" announces Ted Allen with a rather larger microphone. Only 45 minutes? 
Well that should be enough time. Next you have to make the batter for the base of the cake, you 
add some flour, sugar, eggs, and baking powder. Now for the flavor of the cake, what should it be? 
`,
        choices: [
            {text: `Lemon, with a hint of vanilla!`, nextPageId: 35.3},
            {text: `Chocolate!`, nextPageId: 35.3},
            {text: `Red velvet`, nextPageId: 35.3}
        ]
    },
    {
        id: 35.3,
        text: `You mix it a bit more and then transfer the batter to a non-stick 
pan and then you shake the pan and hit it against the counter to get rid of any
excess air bubbles. With only 35 minutes on the clock you rush to the oven and 
put it in. Whew, the batter should be done soon. You look around at the crowd. 
Many alumni like Gordon Ramsey, Ina Garden, Mary Berry, and more are here to 
participate and judge. Families were also allowed to attend the event. Would your 
parents come? Scanning the crowd, you search for your family. 
<br><br>
There they are! Your sister and your parents actually came. Your eyes lock in 
with your father. He nods seriously. Is he accepting it? You laugh in disbelief. 
Finally, you can pursue what you love and you're glad your parents and sister still have a 
decent relationship with you. Even though they are tough on you, you know it's just their way of showing love.  
`,
        choices: [
            {text: `Plating!`, nextPageId: 35.4}
        ]
    },
    {
        id: 35.4,
        text: `You look over to see what Sam and Claire are doing. Claire is busy mixing her cake batter 
and Sam is scooping out his ice cream from the machine. Ah, you should check on your ice 
cream now. You head over to the machine and take a peek inside. Your ice cream is perfect! 
You grab a bowl and dispense the ice cream into it.  

<br><br>
You set the ice cream aside and then take out the cake from the oven. 
You stab it with a tooth pick and when you slide it out it comes out clean. 
You take out the cake from the pan and then let it rest. 
`,
        choices: [
            {text: `Almost done`, nextPageId: 35.5}
        ]
    },
    {
        id: 35.5,
        text: `You grab a plate for your dessert and place it on the counter. 
You then take the cake and saw off the round top, so the base is flat. You grab a 
glass bowl with the same circumference as your circular cake and scoop the ice 
cream into it, making sure to flatten it, then you place the cake onto it. 
<br><br>

Putting the plate upside down onto the bowl you flip it over. 
Carefully you remove the bowl. It came out beautifully! You hurry and 
get your meringue into a piping bag. You snip the end of the bag with 
your trusty scissors and pipe it onto the ice cream. Then you grab your 
blow torch and lightly scorch the meringue, so it is cooked. You take your 
Baked Alaska and put it in the fridge. Hopefully you didn't melt the ice cream 
with the blow torch... You glance at the students in the near vicinity. Some have 
professional Baked Alaska's while others have glops of melted ice cream. It looks 
like a majority of the students have a mix between glops of melted ice cream or 
nothing at all. You guess the dessert was a huge challenge for some of the students. 
Good thing you studied. 
<br><br>

"1-minute left" 
`,
        choices: [
            {text: `Epilogue`, nextPageId: 35.6}
        ]
    },
    {
        id: 35.6,
        text: `It's been 10 years since you've attended Culinary Arts. You think back to your 
fond memories of school, and the competition. Even to this day you can't believe 
you won. Your victory opened up many doors and you even got a scholarship when 
you graduated. After going to the CIA, you worked at various elite restaurants to gain experience. 
Currently you're prepping for the grand opening of your first restaurant. You snap out of your 
thoughts as you hear, "World renown chef Salad, please take the stage." 

 
<br><br>
You smile and walk to the podium. You look down at the students 
staring at you and whispering, "Oh my god is that her?!" 

 <br><br>
Not so long ago you were like them. You grin and grab the microphone, 
"Hello, I'm Cece Salad and I'll be hosting your annual cooking competition. 
This year you guys will create your rendition of Baklava, a famous dessert, 
known for its flakiness. You have 60 minutes to create your dish and present it 
to me and the other judges. The clock starts now." 
<h1 style="text-align:center;"> HAPPY ENDING <h1><img src="/about.jpg" alt="Fail Image" style="max-width: 100%;">`,
       
    },
    // Add more pages as needed
];

// VARIABLES---------------------------------
let currentPageId = 1;
const pageHistory = [];
let careerPath = "";
let famRel = "";

// Function to handle user's choice
function chooseOption(nextPageId) {
    const page = storyPages.find(page => page.id === currentPageId);
    if (page) {
        const choice = page.choices.find(choice => choice.nextPageId === nextPageId);
        if (choice) {
            // Update careerPath based on the choice
            if (choice.id === 3) {
                careerPath = "Chef";
            } else if (choice.id === 4) {
                careerPath = "Baker";
            }
            if (choice.id === 20.1) {
                famRel = "Bad";
            } else if (choice.id === 20.2) {
                famRel = "Good";
            }
            if (choice.id === 20.33) {
                famRel = "Good";
            } else if (choice.id === 20.44) {
                famRel = "Ok";
            }
            } else if (choice.id === 20.55) {
                famRel = "Bad";
            }
        }
    }

// Function to initialize the game
function startGame() {
    showStoryPage(currentPageId);
}

// Function to display a story page
function showStoryPage(pageId) {
    const page = storyPages.find(page => page.id === pageId);
    if (page) {
        document.getElementById('story-text').innerHTML = page.text; // Use innerHTML to render HTML content
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';
        page.choices.forEach(choice => {
            const choiceButton = document.createElement('button');
            choiceButton.innerText = choice.text;
            choiceButton.classList.add('choice-button');
            choiceButton.addEventListener('click', () => {
                const nextPage = choice.nextPageId === "prevPageId" ? pageHistory.pop() : choice.nextPageId;
                chooseOption(nextPage);
            });
            choicesContainer.appendChild(choiceButton);
        });
    }
}

// Function to handle user's choice
function chooseOption(nextPageId) {
    if (nextPageId !== "prevPageId") {
        pageHistory.push(currentPageId);
    }
    currentPageId = nextPageId;
    showStoryPage(currentPageId);
}

// Function to restart the game
function restartGame() {
    currentPageId = 1; // Reset to the first page
    pageHistory.length = 0; // Clear the history
    showStoryPage(currentPageId);
}

function aboutGame(){
    if (currentPageId > 0) {
        pageHistory.push(currentPageId);
    }
    currentPageId = -1;
    showStoryPage(currentPageId);
}

function statGame(){
    if (currentPageId > 0) {
        pageHistory.push(currentPageId);
    }
    currentPageId = -2;
    showStoryPage(currentPageId);
}

// Start the game when the page loads
window.onload = startGame;

// Event listener for restart button
document.getElementById('restart-button').addEventListener('click', restartGame);
document.getElementById('stats-button').addEventListener('click', statGame);
document.getElementById('about-button').addEventListener('click', aboutGame);
