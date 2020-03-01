// https://github.com/VGraupera/1on1-questions

var app4 = new Vue({
    el: '#app-4',
    data: {
        questions: getRandomQuestions()
    }
})

function getRandomQuestions() {
    var groupMap = getQuestions().reduce((agg, q) => {
        var category = q.category;
        var question = q.question
        if (!agg[category]) {
            agg[category] = []
        }
        agg[category].push({ question: question, category: category })
        return agg
    }, {})

    var groups = Object.keys(groupMap).map(g => groupMap[g])

    var questions = []

    for (var i = 0; i < 3; i++) {
        var groupIndex = Math.floor(Math.random() * groups.length)
        var group = groups[groupIndex]
        var questionIndex = Math.floor(Math.random() * group.length)
        var question = group[questionIndex]
        questions.push(question)
        groups.splice(groupIndex, 1)
    }

    return questions
}

function getQuestions() {
    return [
        {
            "id": 306,
            "question": "If you were me, what changes would you make?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.870Z",
            "updated_at": "2017-11-18T14:26:13.870Z"
        },
        {
            "id": 307,
            "question": "How do you prefer to receive feedback?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.874Z",
            "updated_at": "2017-11-18T14:26:13.874Z"
        },
        {
            "id": 308,
            "question": "Do you feel you\u2019re getting enough feedback? Why\/why not?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.878Z",
            "updated_at": "2017-11-18T14:26:13.878Z"
        },
        {
            "id": 309,
            "question": "What aspect of your job you would like more help or coaching?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.881Z",
            "updated_at": "2017-11-18T14:26:13.881Z"
        },
        {
            "id": 310,
            "question": "How can I better support you?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.893Z",
            "updated_at": "2017-11-18T14:26:13.893Z"
        },
        {
            "id": 311,
            "question": "What could I do as a manager to make your work easier?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.896Z",
            "updated_at": "2017-11-18T14:26:13.896Z"
        },
        {
            "id": 312,
            "question": "What is something I could do better? What feedback do you have for me?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.898Z",
            "updated_at": "2017-11-18T14:26:13.898Z"
        },
        {
            "id": 313,
            "question": "What aspects of your work would you like more or less direction from me?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.909Z",
            "updated_at": "2017-11-18T14:26:13.909Z"
        },
        {
            "id": 314,
            "question": "What would you like to know about me?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.912Z",
            "updated_at": "2017-11-18T14:26:13.912Z"
        },
        {
            "id": 315,
            "question": "What do you like about my management style? What do you dislike?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.915Z",
            "updated_at": "2017-11-18T14:26:13.915Z"
        },
        {
            "id": 316,
            "question": "What have your past managers done that you\u2019d like me to also do or not do?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.918Z",
            "updated_at": "2017-11-18T14:26:13.918Z"
        },
        {
            "id": 317,
            "question": "What\u2019s your favorite thing I do as a manager of this team I should keep doing?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.930Z",
            "updated_at": "2017-11-18T14:26:13.930Z"
        },
        {
            "id": 318,
            "question": "Where do you think I can be most helpful?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.933Z",
            "updated_at": "2017-11-18T14:26:13.933Z"
        },
        {
            "id": 319,
            "question": "What are your thoughts on my changes?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.935Z",
            "updated_at": "2017-11-18T14:26:13.935Z"
        },
        {
            "id": 320,
            "question": "How can I make your days more fulfilling?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.938Z",
            "updated_at": "2017-11-18T14:26:13.938Z"
        },
        {
            "id": 321,
            "question": "What can I be doing better to help you in your job?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.950Z",
            "updated_at": "2017-11-18T14:26:13.950Z"
        },
        {
            "id": 322,
            "question": "Are there any obstacles I can remove for you?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.953Z",
            "updated_at": "2017-11-18T14:26:13.953Z"
        },
        {
            "id": 323,
            "question": "What can I do to help you achieve you current goals and priorities?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.956Z",
            "updated_at": "2017-11-18T14:26:13.956Z"
        },
        {
            "id": 324,
            "question": "What can I do to make things more manageable?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.959Z",
            "updated_at": "2017-11-18T14:26:13.959Z"
        },
        {
            "id": 325,
            "question": "How might I make this project more challenging or interesting for you?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.971Z",
            "updated_at": "2017-11-18T14:26:13.971Z"
        },
        {
            "id": 326,
            "question": "What do you think I should know about the project, but might not?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.976Z",
            "updated_at": "2017-11-18T14:26:13.976Z"
        },
        {
            "id": 327,
            "question": "What is the biggest challenge you are currently facing? How can I help with that?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.979Z",
            "updated_at": "2017-11-18T14:26:13.979Z"
        },
        {
            "id": 328,
            "question": "At what point in the past week were you most frustrated with or discouraged by your work? What can I do to help you manage that?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.982Z",
            "updated_at": "2017-11-18T14:26:13.982Z"
        },
        {
            "id": 329,
            "question": "What additional resources can I provide for you between now and the next time we meet?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.995Z",
            "updated_at": "2017-11-18T14:26:13.995Z"
        },
        {
            "id": 330,
            "question": "I\u2019ve noticed that our last several 1-on-1s have stayed pretty surface. What are your honest impressions of this meeting? What could we be doing differently or better?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:13.998Z",
            "updated_at": "2017-11-18T14:26:13.998Z"
        },
        {
            "id": 331,
            "question": "What would you like to see change about these discussions? How could we make them more useful for you?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.009Z",
            "updated_at": "2017-11-18T14:26:14.009Z"
        },
        {
            "id": 332,
            "question": "I\u2019m trying to make my 1-on-1s better and would appreciate your honest feedback on this one \u2014 what did you like about it, and what could be improved?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.013Z",
            "updated_at": "2017-11-18T14:26:14.013Z"
        },
        {
            "id": 334,
            "question": "I'd like to improve as a manager and I could really use your help. Next week, would you be willing to share some feedback on one to two things you think I could do better as your manager?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.028Z",
            "updated_at": "2017-11-18T14:26:14.028Z"
        },
        {
            "id": 335,
            "question": "What can I do to help you enjoy your work more or remove roadblocks to progress?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.030Z",
            "updated_at": "2017-11-18T14:26:14.030Z"
        },
        {
            "id": 336,
            "question": "Which areas would you like more or less direction from me on your work?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.033Z",
            "updated_at": "2017-11-18T14:26:14.033Z"
        },
        {
            "id": 337,
            "question": "What are your impressions of our 1-on-1s? What could we do differently or better?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.045Z",
            "updated_at": "2017-11-18T14:26:14.045Z"
        },
        {
            "id": 338,
            "question": "Do you think that you receive enough feedback? Is feedback helpful for your personal development? What can I do to help you get the feedback you want?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.048Z",
            "updated_at": "2017-11-18T14:26:14.048Z"
        },
        {
            "id": 339,
            "question": "Would you like more coaching? What aspect of your job do you like more help and coaching on?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.051Z",
            "updated_at": "2017-11-18T14:26:14.051Z"
        },
        {
            "id": 340,
            "question": "What can I do as a manager to make your work easier?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.062Z",
            "updated_at": "2017-11-18T14:26:14.062Z"
        },
        {
            "id": 341,
            "question": "What is the percentage of my involvement in your daily tasks? Would you prefer more or less?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.065Z",
            "updated_at": "2017-11-18T14:26:14.065Z"
        },
        {
            "id": 343,
            "question": "What is something I could have done better? What are the situations that I could have helped more but didn\u2019t?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.082Z",
            "updated_at": "2017-11-18T14:26:14.082Z"
        },
        {
            "id": 344,
            "question": "What can I do to help you?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.084Z",
            "updated_at": "2017-11-18T14:26:14.084Z"
        },
        {
            "id": 345,
            "question": "What is the one thing that you need the most from me?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.087Z",
            "updated_at": "2017-11-18T14:26:14.087Z"
        },
        {
            "id": 346,
            "question": "As your manager, what would you like me to stop, start, or continue doing?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.090Z",
            "updated_at": "2017-11-18T14:26:14.090Z"
        },
        {
            "id": 347,
            "question": "What can I do to help remove obstacles?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.102Z",
            "updated_at": "2017-11-18T14:26:14.102Z"
        },
        {
            "id": 348,
            "question": "Do you have any feedback for me?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.105Z",
            "updated_at": "2017-11-18T14:26:14.105Z"
        },
        {
            "id": 350,
            "question": "What can I do to make your job easier?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.121Z",
            "updated_at": "2017-11-18T14:26:14.121Z"
        },
        {
            "id": 352,
            "question": "What can I do for you that I'm not?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.128Z",
            "updated_at": "2017-11-18T14:26:14.128Z"
        },
        {
            "id": 355,
            "question": "What can I do better or differently as your manager to support you?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.146Z",
            "updated_at": "2017-11-18T14:26:14.146Z"
        },
        {
            "id": 356,
            "question": "How could I do a better job communicating with you?",
            "category": "About Manager",
            "created_at": "2017-11-18T14:26:14.149Z",
            "updated_at": "2017-11-18T14:26:14.149Z"
        },
        {
            "id": 357,
            "question": "What do you want to be doing in 5 years? 10 years? 3 years?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.152Z",
            "updated_at": "2017-11-18T14:26:14.152Z"
        },
        {
            "id": 358,
            "question": "What are your long term goals? Have you thought about them?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.155Z",
            "updated_at": "2017-11-18T14:26:14.155Z"
        },
        {
            "id": 359,
            "question": "What are your super powers? What powers would you like to develop?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.166Z",
            "updated_at": "2017-11-18T14:26:14.166Z"
        },
        {
            "id": 360,
            "question": "What do you want to do in your next job?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.171Z",
            "updated_at": "2017-11-18T14:26:14.171Z"
        },
        {
            "id": 361,
            "question": "What skills would you like to develop right now?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.175Z",
            "updated_at": "2017-11-18T14:26:14.175Z"
        },
        {
            "id": 362,
            "question": "What additional training or education would you like?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.186Z",
            "updated_at": "2017-11-18T14:26:14.186Z"
        },
        {
            "id": 363,
            "question": "Do you feel like you\u2019re making progress on your big goals here? Why or why not?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.189Z",
            "updated_at": "2017-11-18T14:26:14.189Z"
        },
        {
            "id": 364,
            "question": "What\u2019s one thing we could do today to help you with your long term goals?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.192Z",
            "updated_at": "2017-11-18T14:26:14.192Z"
        },
        {
            "id": 365,
            "question": "Do you feel we\u2019re helping you advance your career at a pace you would like?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.203Z",
            "updated_at": "2017-11-18T14:26:14.203Z"
        },
        {
            "id": 366,
            "question": "What are your big dreams in life? Are you making progress on them?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.205Z",
            "updated_at": "2017-11-18T14:26:14.205Z"
        },
        {
            "id": 367,
            "question": "Could you see yourself making progress on more of your goals here? What would need to change to do so?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.208Z",
            "updated_at": "2017-11-18T14:26:14.208Z"
        },
        {
            "id": 369,
            "question": "Are there any events or training you\u2019d like to attend to help you grow your skills?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.222Z",
            "updated_at": "2017-11-18T14:26:14.222Z"
        },
        {
            "id": 370,
            "question": "Who in the company would you like to learn from? What do you want to learn?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.225Z",
            "updated_at": "2017-11-18T14:26:14.225Z"
        },
        {
            "id": 371,
            "question": "What can you do to take action or make progress on what we talked about today?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.237Z",
            "updated_at": "2017-11-18T14:26:14.237Z"
        },
        {
            "id": 372,
            "question": "What can I do to take action or make progress on what we talked about today?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.239Z",
            "updated_at": "2017-11-18T14:26:14.239Z"
        },
        {
            "id": 373,
            "question": "Where do you see your career in the next (2\/5\/10) years?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.242Z",
            "updated_at": "2017-11-18T14:26:14.242Z"
        },
        {
            "id": 374,
            "question": "What work are you doing here that you feel is most in line with your long term goals?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.253Z",
            "updated_at": "2017-11-18T14:26:14.253Z"
        },
        {
            "id": 375,
            "question": "What skills are required to reach your goals?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.256Z",
            "updated_at": "2017-11-18T14:26:14.256Z"
        },
        {
            "id": 376,
            "question": "What are some of the work projects you\u2019re most proud of, and what do you think you might want to do next?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.259Z",
            "updated_at": "2017-11-18T14:26:14.259Z"
        },
        {
            "id": 377,
            "question": "What are two to three new skills you\u2019d like to learn on the job? What about those skills interests you?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.272Z",
            "updated_at": "2017-11-18T14:26:14.272Z"
        },
        {
            "id": 378,
            "question": "What other roles here could you see yourself in down the line? Or what areas would you like to explore?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.275Z",
            "updated_at": "2017-11-18T14:26:14.275Z"
        },
        {
            "id": 379,
            "question": "If you were to create your ideal position, how would it differ from what you are currently doing?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.278Z",
            "updated_at": "2017-11-18T14:26:14.278Z"
        },
        {
            "id": 380,
            "question": "How is your current work helping or hurting your professional development?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.290Z",
            "updated_at": "2017-11-18T14:26:14.290Z"
        },
        {
            "id": 381,
            "question": "Which career or development goals do you feel like you\u2019re not able to focus on right now?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.293Z",
            "updated_at": "2017-11-18T14:26:14.293Z"
        },
        {
            "id": 382,
            "question": "What else can I be doing to help you grow\/advance in your career?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.296Z",
            "updated_at": "2017-11-18T14:26:14.296Z"
        },
        {
            "id": 383,
            "question": "Imagine it\u2019s two years from now, and things have gone well: What has been your role in that? What does your role look like?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.307Z",
            "updated_at": "2017-11-18T14:26:14.307Z"
        },
        {
            "id": 384,
            "question": "Have you given any more thought to your long-term goals since our last meeting? What are your latest thoughts?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.310Z",
            "updated_at": "2017-11-18T14:26:14.310Z"
        },
        {
            "id": 385,
            "question": "Where do you see yourself in three years? Five years?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.313Z",
            "updated_at": "2017-11-18T14:26:14.313Z"
        },
        {
            "id": 386,
            "question": "What professional goals would you like to accomplish in the next 6 to 12 months, and what makes you say that?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.326Z",
            "updated_at": "2017-11-18T14:26:14.326Z"
        },
        {
            "id": 387,
            "question": "To help identify and clarify the goal: What do you want to achieve? What will you do to achieve it? When will you do it? Who do you need to involve? When should you see results?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.328Z",
            "updated_at": "2017-11-18T14:26:14.328Z"
        },
        {
            "id": 388,
            "question": "What about this goal is important to you and what will be different when you achieve the goal?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.331Z",
            "updated_at": "2017-11-18T14:26:14.331Z"
        },
        {
            "id": 389,
            "question": "What sort of progress have you made on the next steps we discussed last time?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.343Z",
            "updated_at": "2017-11-18T14:26:14.343Z"
        },
        {
            "id": 390,
            "question": "What development areas do you want to work on in the coming weeks?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.345Z",
            "updated_at": "2017-11-18T14:26:14.345Z"
        },
        {
            "id": 391,
            "question": "What actions will you take before our next 1-on-1 to make progress on X? (Also discuss and agree on actions you will take to help.)",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.348Z",
            "updated_at": "2017-11-18T14:26:14.348Z"
        },
        {
            "id": 392,
            "question": "During this meeting you\u2019ve mentioned that you\u2019d like to pursue X. What steps can you take toward that before our next 1-on-1?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.359Z",
            "updated_at": "2017-11-18T14:26:14.359Z"
        },
        {
            "id": 393,
            "question": "Have you ever felt undervalued here?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.361Z",
            "updated_at": "2017-11-18T14:26:14.361Z"
        },
        {
            "id": 394,
            "question": "What are the projects you would be interested in working on next?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.365Z",
            "updated_at": "2017-11-18T14:26:14.365Z"
        },
        {
            "id": 396,
            "question": "How do you think about your progress on your big goals? What needs to be done to move towards the goals? What can we do to help?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.379Z",
            "updated_at": "2017-11-18T14:26:14.379Z"
        },
        {
            "id": 397,
            "question": "Which part of the work here do you feel as most relevant to your long-term goals? What kinds of projects do you want to take part in to move toward your goals?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.392Z",
            "updated_at": "2017-11-18T14:26:14.392Z"
        },
        {
            "id": 398,
            "question": "Do you feel like you are learning at work? What are the new things you learned lately? What are the areas you want to learn about?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.394Z",
            "updated_at": "2017-11-18T14:26:14.394Z"
        },
        {
            "id": 399,
            "question": "Do you have the tools you need to reach your goals?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.397Z",
            "updated_at": "2017-11-18T14:26:14.397Z"
        },
        {
            "id": 400,
            "question": "How do you think you did on your performance review this year? What do you think the results will be?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.408Z",
            "updated_at": "2017-11-18T14:26:14.408Z"
        },
        {
            "id": 401,
            "question": "Where do you see your career in 1 year, 3 years? What can you do to make sure you reach those goals? How can we as HR help you to reach those goals (assuming the goals relate to the company)?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.411Z",
            "updated_at": "2017-11-18T14:26:14.411Z"
        },
        {
            "id": 402,
            "question": "Is there a different way we can develop your skills   outside of traditional training?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.413Z",
            "updated_at": "2017-11-18T14:26:14.413Z"
        },
        {
            "id": 403,
            "question": "What would make this your perfect job?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.422Z",
            "updated_at": "2017-11-18T14:26:14.422Z"
        },
        {
            "id": 404,
            "question": "Are there any projects you\u2019d really like to work on if you were given the opportunity?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.425Z",
            "updated_at": "2017-11-18T14:26:14.425Z"
        },
        {
            "id": 405,
            "question": "What parts of your job would you like to deepen your skills in or get additional training in?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.436Z",
            "updated_at": "2017-11-18T14:26:14.436Z"
        },
        {
            "id": 406,
            "question": "Is there an aspect of your job you would like more help or coaching?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.439Z",
            "updated_at": "2017-11-18T14:26:14.439Z"
        },
        {
            "id": 407,
            "question": "What areas of your job do you find difficult that getting better skills at would help?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.451Z",
            "updated_at": "2017-11-18T14:26:14.451Z"
        },
        {
            "id": 408,
            "question": "What skills do you have that you think are underutilized?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.453Z",
            "updated_at": "2017-11-18T14:26:14.453Z"
        },
        {
            "id": 409,
            "question": "What capabilities do you want to develop?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.456Z",
            "updated_at": "2017-11-18T14:26:14.456Z"
        },
        {
            "id": 410,
            "question": "Tell me about something new you learned since we met last.",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.459Z",
            "updated_at": "2017-11-18T14:26:14.459Z"
        },
        {
            "id": 411,
            "question": "What opportunities have you had recently to learn something new?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.473Z",
            "updated_at": "2017-11-18T14:26:14.473Z"
        },
        {
            "id": 412,
            "question": "What would you like to learn about in the future?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.476Z",
            "updated_at": "2017-11-18T14:26:14.476Z"
        },
        {
            "id": 413,
            "question": "What kind of training or experience would be most helpful to you right now?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.479Z",
            "updated_at": "2017-11-18T14:26:14.479Z"
        },
        {
            "id": 414,
            "question": "What do you see as the next step in your career?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.491Z",
            "updated_at": "2017-11-18T14:26:14.491Z"
        },
        {
            "id": 415,
            "question": "What goals have you set for your career?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.494Z",
            "updated_at": "2017-11-18T14:26:14.494Z"
        },
        {
            "id": 416,
            "question": "How do you feel you are progressing in your career?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.497Z",
            "updated_at": "2017-11-18T14:26:14.497Z"
        },
        {
            "id": 417,
            "question": "What big questions do you have about your career opportunities in the future?",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.499Z",
            "updated_at": "2017-11-18T14:26:14.499Z"
        },
        {
            "id": 418,
            "question": "What are your goals (for our group for you personally)",
            "category": "Career development",
            "created_at": "2017-11-18T14:26:14.510Z",
            "updated_at": "2017-11-18T14:26:14.510Z"
        },
        {
            "id": 419,
            "question": "Tell me a story...",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.513Z",
            "updated_at": "2017-11-18T14:26:14.513Z"
        },
        {
            "id": 420,
            "question": "How are you? How is life outside of work?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.516Z",
            "updated_at": "2017-11-18T14:26:14.516Z"
        },
        {
            "id": 421,
            "question": "If around a holiday: Do you celebrate [Holiday]? If so, can I ask what are you plans?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.529Z",
            "updated_at": "2017-11-18T14:26:14.529Z"
        },
        {
            "id": 422,
            "question": "How are your parents\/grandparents? Where do they live? Do you visit them?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.531Z",
            "updated_at": "2017-11-18T14:26:14.531Z"
        },
        {
            "id": 423,
            "question": "If they have children: How is [name of child] doing? (Ask something related to their age like starting school, playing sports, or other interests.)",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.533Z",
            "updated_at": "2017-11-18T14:26:14.533Z"
        },
        {
            "id": 424,
            "question": "What do you like to do in your free time? What are your hobbies?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.545Z",
            "updated_at": "2017-11-18T14:26:14.545Z"
        },
        {
            "id": 425,
            "question": "Who do you really admire? Why? (People often admire those they want to become)",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.547Z",
            "updated_at": "2017-11-18T14:26:14.547Z"
        },
        {
            "id": 426,
            "question": "Tell me about what you\u2019ve been working on.",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.550Z",
            "updated_at": "2017-11-18T14:26:14.550Z"
        },
        {
            "id": 427,
            "question": "Tell me about your week \u2013 what\u2019s it been like?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.561Z",
            "updated_at": "2017-11-18T14:26:14.561Z"
        },
        {
            "id": 428,
            "question": "Tell me about your family\/weekend\/ activities?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.564Z",
            "updated_at": "2017-11-18T14:26:14.564Z"
        },
        {
            "id": 429,
            "question": "Tell me about anything you stumbled over.",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.566Z",
            "updated_at": "2017-11-18T14:26:14.566Z"
        },
        {
            "id": 430,
            "question": "Would you update me on Project X?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.579Z",
            "updated_at": "2017-11-18T14:26:14.579Z"
        },
        {
            "id": 431,
            "question": "Are you on track to meet the deadline?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.581Z",
            "updated_at": "2017-11-18T14:26:14.581Z"
        },
        {
            "id": 432,
            "question": "How is your family?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.584Z",
            "updated_at": "2017-11-18T14:26:14.584Z"
        },
        {
            "id": 433,
            "question": "How was your weekend?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.586Z",
            "updated_at": "2017-11-18T14:26:14.586Z"
        },
        {
            "id": 435,
            "question": "How\u2019s it going?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.601Z",
            "updated_at": "2017-11-18T14:26:14.601Z"
        },
        {
            "id": 436,
            "question": "So, what\u2019s on your mind? (or Anything on your mind?)",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.604Z",
            "updated_at": "2017-11-18T14:26:14.604Z"
        },
        {
            "id": 437,
            "question": "What would you like to start with?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.618Z",
            "updated_at": "2017-11-18T14:26:14.618Z"
        },
        {
            "id": 438,
            "question": "Hey, what\u2019s going on?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.621Z",
            "updated_at": "2017-11-18T14:26:14.621Z"
        },
        {
            "id": 439,
            "question": "Would you like to walk today, or go somewhere else outside the office?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.624Z",
            "updated_at": "2017-11-18T14:26:14.624Z"
        },
        {
            "id": 440,
            "question": "I\u2019ve noticed you\u2019re a little quieter than usual. Is there anything you\u2019d like to talk about?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.626Z",
            "updated_at": "2017-11-18T14:26:14.626Z"
        },
        {
            "id": 441,
            "question": "What can I do to make your day better?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.637Z",
            "updated_at": "2017-11-18T14:26:14.637Z"
        },
        {
            "id": 442,
            "question": "What's something I don't know, but should?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.640Z",
            "updated_at": "2017-11-18T14:26:14.640Z"
        },
        {
            "id": 443,
            "question": "Tell me about last week.",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.643Z",
            "updated_at": "2017-11-18T14:26:14.643Z"
        },
        {
            "id": 444,
            "question": "What would you like to focus on at this meeting?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.654Z",
            "updated_at": "2017-11-18T14:26:14.654Z"
        },
        {
            "id": 445,
            "question": "What have you been doing for fun lately?",
            "category": "Conversation starters",
            "created_at": "2017-11-18T14:26:14.657Z",
            "updated_at": "2017-11-18T14:26:14.657Z"
        },
        {
            "id": 447,
            "question": "How do you feel your work\/life balance is right now?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.661Z",
            "updated_at": "2017-11-18T14:26:14.661Z"
        },
        {
            "id": 448,
            "question": "What drives you? What motivates you to come to work each day?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.674Z",
            "updated_at": "2017-11-18T14:26:14.674Z"
        },
        {
            "id": 449,
            "question": "Do you feel challenged at work? Are you learning new things?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.677Z",
            "updated_at": "2017-11-18T14:26:14.677Z"
        },
        {
            "id": 450,
            "question": "What\u2019s a recent situation you wish you handled differently? What would you change?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.679Z",
            "updated_at": "2017-11-18T14:26:14.679Z"
        },
        {
            "id": 451,
            "question": "What\u2019s an area of your work you want to improve?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.691Z",
            "updated_at": "2017-11-18T14:26:14.691Z"
        },
        {
            "id": 452,
            "question": "How many hours a day do you feel you\u2019re productive? How could we help you be more productive?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.694Z",
            "updated_at": "2017-11-18T14:26:14.694Z"
        },
        {
            "id": 453,
            "question": "What could I do to make you enjoy your work more?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.696Z",
            "updated_at": "2017-11-18T14:26:14.696Z"
        },
        {
            "id": 454,
            "question": "Do you think our company is loyal to its employees? Why or why not?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.707Z",
            "updated_at": "2017-11-18T14:26:14.707Z"
        },
        {
            "id": 455,
            "question": "What would convince you to leave for a job somewhere else?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.710Z",
            "updated_at": "2017-11-18T14:26:14.710Z"
        },
        {
            "id": 456,
            "question": "Do you feel over-worked, under-worked, or just the right workload?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.712Z",
            "updated_at": "2017-11-18T14:26:14.712Z"
        },
        {
            "id": 457,
            "question": "What do you like most about working on our team?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.725Z",
            "updated_at": "2017-11-18T14:26:14.725Z"
        },
        {
            "id": 458,
            "question": "What do you feel is your greatest accomplishment here?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.727Z",
            "updated_at": "2017-11-18T14:26:14.727Z"
        },
        {
            "id": 459,
            "question": "When was the time you enjoyed working here the most?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.730Z",
            "updated_at": "2017-11-18T14:26:14.730Z"
        },
        {
            "id": 460,
            "question": "Are you happy with your recent work? Why or why not?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.742Z",
            "updated_at": "2017-11-18T14:26:14.742Z"
        },
        {
            "id": 461,
            "question": "What would make you leave this job for another?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.744Z",
            "updated_at": "2017-11-18T14:26:14.744Z"
        },
        {
            "id": 462,
            "question": "Tell me about what you\u2019ve learned on this project.",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.746Z",
            "updated_at": "2017-11-18T14:26:14.746Z"
        },
        {
            "id": 463,
            "question": "What do you like most about your job today?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.757Z",
            "updated_at": "2017-11-18T14:26:14.757Z"
        },
        {
            "id": 464,
            "question": "What do you like the least?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.760Z",
            "updated_at": "2017-11-18T14:26:14.760Z"
        },
        {
            "id": 465,
            "question": "What\u2019s one thing about your job that, if we fixed, would make you never want to leave?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.763Z",
            "updated_at": "2017-11-18T14:26:14.763Z"
        },
        {
            "id": 466,
            "question": "What are you most excited about?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.765Z",
            "updated_at": "2017-11-18T14:26:14.765Z"
        },
        {
            "id": 467,
            "question": "What are you most worried about?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.779Z",
            "updated_at": "2017-11-18T14:26:14.779Z"
        },
        {
            "id": 468,
            "question": "How do you think of your current workload and how are you coping with them?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.782Z",
            "updated_at": "2017-11-18T14:26:14.782Z"
        },
        {
            "id": 469,
            "question": "What do you need or want to accomplish and by when?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.784Z",
            "updated_at": "2017-11-18T14:26:14.784Z"
        },
        {
            "id": 470,
            "question": "What feedback\/praises have you been getting about your current priorities?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.799Z",
            "updated_at": "2017-11-18T14:26:14.799Z"
        },
        {
            "id": 471,
            "question": "How are you feeling about your role?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.802Z",
            "updated_at": "2017-11-18T14:26:14.802Z"
        },
        {
            "id": 472,
            "question": "Are you happy here? What makes you say that?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.805Z",
            "updated_at": "2017-11-18T14:26:14.805Z"
        },
        {
            "id": 473,
            "question": "Do you feel like you're growing in your role? What makes you say that?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.817Z",
            "updated_at": "2017-11-18T14:26:14.817Z"
        },
        {
            "id": 474,
            "question": "What interests you about the project(s) you\u2019re currently working on, and why?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.820Z",
            "updated_at": "2017-11-18T14:26:14.820Z"
        },
        {
            "id": 475,
            "question": "What is your favorite\/least favorite thing about your work right now?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.823Z",
            "updated_at": "2017-11-18T14:26:14.823Z"
        },
        {
            "id": 476,
            "question": "How do you think that least favorite thing affects your overall performance?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.837Z",
            "updated_at": "2017-11-18T14:26:14.837Z"
        },
        {
            "id": 477,
            "question": "What\u2019s working well for you in your current position?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.840Z",
            "updated_at": "2017-11-18T14:26:14.840Z"
        },
        {
            "id": 478,
            "question": "In what ways does your current position allow you to use your skills and talents?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.847Z",
            "updated_at": "2017-11-18T14:26:14.847Z"
        },
        {
            "id": 479,
            "question": "Which areas make you feel like your hands are tied or you are unable to reach your full potential?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.859Z",
            "updated_at": "2017-11-18T14:26:14.859Z"
        },
        {
            "id": 480,
            "question": "What do you think you could be doing differently?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.862Z",
            "updated_at": "2017-11-18T14:26:14.862Z"
        },
        {
            "id": 481,
            "question": "If you could work on anything for the next month, what would it be? What makes you say that?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.865Z",
            "updated_at": "2017-11-18T14:26:14.865Z"
        },
        {
            "id": 482,
            "question": "What\u2019s one thing that could make your work more satisfying, and why?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.881Z",
            "updated_at": "2017-11-18T14:26:14.881Z"
        },
        {
            "id": 483,
            "question": "How are you feeling about the project?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.884Z",
            "updated_at": "2017-11-18T14:26:14.884Z"
        },
        {
            "id": 484,
            "question": "What aspect of this project has been particularly interesting for you?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.898Z",
            "updated_at": "2017-11-18T14:26:14.898Z"
        },
        {
            "id": 485,
            "question": "What do you feel like you're learning from this project?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.901Z",
            "updated_at": "2017-11-18T14:26:14.901Z"
        },
        {
            "id": 486,
            "question": "What frustrates you about the project?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.904Z",
            "updated_at": "2017-11-18T14:26:14.904Z"
        },
        {
            "id": 487,
            "question": "Which areas would you like to spend more time on and why?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.908Z",
            "updated_at": "2017-11-18T14:26:14.908Z"
        },
        {
            "id": 488,
            "question": "What do you think has gone well? What do you think you could have done better? What, if anything, would you like to do, but haven't been able to?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.920Z",
            "updated_at": "2017-11-18T14:26:14.920Z"
        },
        {
            "id": 489,
            "question": "What are your biggest concerns about your current project(s)?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.923Z",
            "updated_at": "2017-11-18T14:26:14.923Z"
        },
        {
            "id": 490,
            "question": "I\u2019ve noticed X about the project\u2026 Can you help me understand that better? Talk me through your process.",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.926Z",
            "updated_at": "2017-11-18T14:26:14.926Z"
        },
        {
            "id": 491,
            "question": "Which parts of your project are unclear or confusing?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.938Z",
            "updated_at": "2017-11-18T14:26:14.938Z"
        },
        {
            "id": 492,
            "question": "What was that experience like for you?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.941Z",
            "updated_at": "2017-11-18T14:26:14.941Z"
        },
        {
            "id": 493,
            "question": "What did you like most\/least about that?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.943Z",
            "updated_at": "2017-11-18T14:26:14.943Z"
        },
        {
            "id": 494,
            "question": "How did that affect you?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.955Z",
            "updated_at": "2017-11-18T14:26:14.955Z"
        },
        {
            "id": 495,
            "question": "How did that make you feel?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.957Z",
            "updated_at": "2017-11-18T14:26:14.957Z"
        },
        {
            "id": 496,
            "question": "If you could change what happened, how would you alter it?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.960Z",
            "updated_at": "2017-11-18T14:26:14.960Z"
        },
        {
            "id": 497,
            "question": "What do you think caused that to happen?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.962Z",
            "updated_at": "2017-11-18T14:26:14.962Z"
        },
        {
            "id": 498,
            "question": "What\u2019s your No. 1 problem right now? How are you feeling about it?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.965Z",
            "updated_at": "2017-11-18T14:26:14.965Z"
        },
        {
            "id": 499,
            "question": "What would be the most helpful thing for you to take away from this conversation in order to make progress on it?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.977Z",
            "updated_at": "2017-11-18T14:26:14.977Z"
        },
        {
            "id": 500,
            "question": "What have you tried so far to make progress on it?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.980Z",
            "updated_at": "2017-11-18T14:26:14.980Z"
        },
        {
            "id": 501,
            "question": "In our last 1-on-1 you mentioned that you\u2019d like to grow in X \u2014 how has that been going?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.991Z",
            "updated_at": "2017-11-18T14:26:14.991Z"
        },
        {
            "id": 502,
            "question": "In our last 1-on-1 you mentioned you were frustrated by X and wanted to try Y as a solution. How has that been going?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.993Z",
            "updated_at": "2017-11-18T14:26:14.993Z"
        },
        {
            "id": 503,
            "question": "Can you name three things we can do to help so you can enjoy your job more?What is the best accomplishment you had since you are here? Do you feel appreciated for it?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:14.996Z",
            "updated_at": "2017-11-18T14:26:14.996Z"
        },
        {
            "id": 504,
            "question": "What talents do you have that you feel we are fully utilizing?  Which of your talents are we not fully leveraging?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:15.007Z",
            "updated_at": "2017-11-18T14:26:15.007Z"
        },
        {
            "id": 505,
            "question": "What do you enjoy the most in your current role?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:15.009Z",
            "updated_at": "2017-11-18T14:26:15.009Z"
        },
        {
            "id": 506,
            "question": "Happiness level, 1 to 10?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:15.012Z",
            "updated_at": "2017-11-18T14:26:15.012Z"
        },
        {
            "id": 507,
            "question": "What\u2019s the best part of your job?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:15.025Z",
            "updated_at": "2017-11-18T14:26:15.025Z"
        },
        {
            "id": 508,
            "question": "What\u2019s the worst part about your job?",
            "category": "Job satisfaction",
            "created_at": "2017-11-18T14:26:15.028Z",
            "updated_at": "2017-11-18T14:26:15.028Z"
        },
        {
            "id": 509,
            "question": "What\u2019s one thing we could change about work for you that would improve your personal life?",
            "category": "Other",
            "created_at": "2017-11-18T14:26:15.031Z",
            "updated_at": "2017-11-18T14:26:15.031Z"
        },
        {
            "id": 510,
            "question": "What did you do for fun in the past that you haven\u2019t had as much time for lately?",
            "category": "Other",
            "created_at": "2017-11-18T14:26:15.043Z",
            "updated_at": "2017-11-18T14:26:15.043Z"
        },
        {
            "id": 511,
            "question": "As a kid, what did you want to be when you grew up?",
            "category": "Other",
            "created_at": "2017-11-18T14:26:15.046Z",
            "updated_at": "2017-11-18T14:26:15.046Z"
        },
        {
            "id": 512,
            "question": "If you had millions of dollars, what would you do every day?",
            "category": "Other",
            "created_at": "2017-11-18T14:26:15.048Z",
            "updated_at": "2017-11-18T14:26:15.048Z"
        },
        {
            "id": 513,
            "question": "What questions do you have about the project?",
            "category": "Other",
            "created_at": "2017-11-18T14:26:15.060Z",
            "updated_at": "2017-11-18T14:26:15.060Z"
        },
        {
            "id": 514,
            "question": "What ideas can you bring in from past successes?",
            "category": "Other",
            "created_at": "2017-11-18T14:26:15.062Z",
            "updated_at": "2017-11-18T14:26:15.062Z"
        },
        {
            "id": 515,
            "question": "What haven\u2019t you tried yet?",
            "category": "Other",
            "created_at": "2017-11-18T14:26:15.065Z",
            "updated_at": "2017-11-18T14:26:15.065Z"
        },
        {
            "id": 516,
            "question": "What would you be doing right now if we weren\u2019t having this meeting? How do you feel about being taken away from that task?",
            "category": "Other",
            "created_at": "2017-11-18T14:26:15.067Z",
            "updated_at": "2017-11-18T14:26:15.067Z"
        },
        {
            "id": 517,
            "question": "How are things going for you outside of work?",
            "category": "Other",
            "created_at": "2017-11-18T14:26:15.081Z",
            "updated_at": "2017-11-18T14:26:15.081Z"
        },
        {
            "id": 518,
            "question": "Is there anything blocking you from getting your work done?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.083Z",
            "updated_at": "2017-11-18T14:26:15.083Z"
        },
        {
            "id": 519,
            "question": "What area of the company would you like to learn more about?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.086Z",
            "updated_at": "2017-11-18T14:26:15.086Z"
        },
        {
            "id": 520,
            "question": "Are there any roles in the company you\u2019d like to learn more about?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.098Z",
            "updated_at": "2017-11-18T14:26:15.098Z"
        },
        {
            "id": 521,
            "question": "What do you think are the key skills for your role? How would you rate yourself for each of them?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.101Z",
            "updated_at": "2017-11-18T14:26:15.101Z"
        },
        {
            "id": 522,
            "question": "Is there a situation you\u2019d like my help with?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.104Z",
            "updated_at": "2017-11-18T14:26:15.104Z"
        },
        {
            "id": 523,
            "question": "What is the company not doing today that we should do to better compete in the market?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.107Z",
            "updated_at": "2017-11-18T14:26:15.107Z"
        },
        {
            "id": 524,
            "question": "What\u2019s one thing we\u2019d be *crazy* not to do in the next quarter to improve our product?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.119Z",
            "updated_at": "2017-11-18T14:26:15.119Z"
        },
        {
            "id": 525,
            "question": "If you were CEO, what\u2019s the first thing you\u2019d change?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.122Z",
            "updated_at": "2017-11-18T14:26:15.122Z"
        },
        {
            "id": 526,
            "question": "Are there any aspects of our culture you wish you could change?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.134Z",
            "updated_at": "2017-11-18T14:26:15.134Z"
        },
        {
            "id": 527,
            "question": "What are your favorite parts about our culture?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.136Z",
            "updated_at": "2017-11-18T14:26:15.136Z"
        },
        {
            "id": 528,
            "question": "Which company values do you like the most? Which the least? Why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.139Z",
            "updated_at": "2017-11-18T14:26:15.139Z"
        },
        {
            "id": 529,
            "question": "What is the #1 Problem at our company? Why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.150Z",
            "updated_at": "2017-11-18T14:26:15.150Z"
        },
        {
            "id": 530,
            "question": "How could we be more creative or innovative as a company?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.153Z",
            "updated_at": "2017-11-18T14:26:15.153Z"
        },
        {
            "id": 531,
            "question": "How well do you feel like you relate to you coworkers? Do you view them as friends, acquaintances, or strangers?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.155Z",
            "updated_at": "2017-11-18T14:26:15.155Z"
        },
        {
            "id": 532,
            "question": "How could we change our team meetings to be more effective?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.158Z",
            "updated_at": "2017-11-18T14:26:15.158Z"
        },
        {
            "id": 533,
            "question": "Why do you think [employee who recently quit] left? What did they tell you?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.169Z",
            "updated_at": "2017-11-18T14:26:15.169Z"
        },
        {
            "id": 534,
            "question": "Do you feel like you\u2019re on the same page with the team? How often do you think you need meetings to ensure you stay that way?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.174Z",
            "updated_at": "2017-11-18T14:26:15.174Z"
        },
        {
            "id": 535,
            "question": "Are there any meetings or discussions you feel you should be a part of that you\u2019re not? Are you included in any you don\u2019t want to be a part of?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.177Z",
            "updated_at": "2017-11-18T14:26:15.177Z"
        },
        {
            "id": 536,
            "question": "Who would you like to work more often with? Why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.189Z",
            "updated_at": "2017-11-18T14:26:15.189Z"
        },
        {
            "id": 537,
            "question": "Is everyone pulling their weight on the team?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.192Z",
            "updated_at": "2017-11-18T14:26:15.192Z"
        },
        {
            "id": 538,
            "question": "Who is kicking ass on the team? What have they done?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.194Z",
            "updated_at": "2017-11-18T14:26:15.194Z"
        },
        {
            "id": 539,
            "question": "Who on the team do you have the most difficulty working with? Why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.206Z",
            "updated_at": "2017-11-18T14:26:15.206Z"
        },
        {
            "id": 540,
            "question": "Do you help other members on the team? Do others help you when you need it?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.209Z",
            "updated_at": "2017-11-18T14:26:15.209Z"
        },
        {
            "id": 541,
            "question": "Are you uncomfortable giving any of your peers constructive criticism? If so, why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.212Z",
            "updated_at": "2017-11-18T14:26:15.212Z"
        },
        {
            "id": 542,
            "question": "What\u2019s an inexpensive thing we could do to improve our office environment for the team?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.224Z",
            "updated_at": "2017-11-18T14:26:15.224Z"
        },
        {
            "id": 543,
            "question": "Is your job what you expected when you accepted it?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.227Z",
            "updated_at": "2017-11-18T14:26:15.227Z"
        },
        {
            "id": 544,
            "question": "Who are you friends with at work? (Shown to be a key to enjoying your job)",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.231Z",
            "updated_at": "2017-11-18T14:26:15.231Z"
        },
        {
            "id": 545,
            "question": "What\u2019s something you feel is undervalued that you contribute to the team?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.245Z",
            "updated_at": "2017-11-18T14:26:15.245Z"
        },
        {
            "id": 546,
            "question": "What part of your job do you wish you didn\u2019t have to do?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.249Z",
            "updated_at": "2017-11-18T14:26:15.249Z"
        },
        {
            "id": 548,
            "question": "Who do you admire within the company and why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.263Z",
            "updated_at": "2017-11-18T14:26:15.263Z"
        },
        {
            "id": 549,
            "question": "Who has really been kicking ass lately?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.265Z",
            "updated_at": "2017-11-18T14:26:15.265Z"
        },
        {
            "id": 550,
            "question": "What do you like about working here? What\u2019s not fun about working here?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.268Z",
            "updated_at": "2017-11-18T14:26:15.268Z"
        },
        {
            "id": 551,
            "question": "If we could improve in any way, how would we do it?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.281Z",
            "updated_at": "2017-11-18T14:26:15.281Z"
        },
        {
            "id": 552,
            "question": "What\u2019s the number one problem within our organization? Why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.284Z",
            "updated_at": "2017-11-18T14:26:15.284Z"
        },
        {
            "id": 553,
            "question": "What\u2019s the biggest opportunity we\u2019re missing out on?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.286Z",
            "updated_at": "2017-11-18T14:26:15.286Z"
        },
        {
            "id": 555,
            "question": "What would you like to learn more about this year?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.301Z",
            "updated_at": "2017-11-18T14:26:15.301Z"
        },
        {
            "id": 557,
            "question": "Which areas would you would like more feedback on?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.306Z",
            "updated_at": "2017-11-18T14:26:15.306Z"
        },
        {
            "id": 559,
            "question": "What would you like to see change here? Why do you say that?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.320Z",
            "updated_at": "2017-11-18T14:26:15.320Z"
        },
        {
            "id": 560,
            "question": "What\u2019s the No. 1 problem with our organization, and what do you think's causing it?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.323Z",
            "updated_at": "2017-11-18T14:26:15.323Z"
        },
        {
            "id": 561,
            "question": "What are we not doing that we should be doing? What makes you say that?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.336Z",
            "updated_at": "2017-11-18T14:26:15.336Z"
        },
        {
            "id": 562,
            "question": "What are we doing that you think we should stop doing, and why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.339Z",
            "updated_at": "2017-11-18T14:26:15.339Z"
        },
        {
            "id": 563,
            "question": "How are you feeling about the company\u2019s future overall? What makes you say that?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.342Z",
            "updated_at": "2017-11-18T14:26:15.342Z"
        },
        {
            "id": 564,
            "question": "How would you describe the personality of the team? What sort of person would be a good fit here? What sort of person would add something we're currently missing?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.353Z",
            "updated_at": "2017-11-18T14:26:15.353Z"
        },
        {
            "id": 565,
            "question": "How would you say we're doing at working together as team? What makes you say that?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.356Z",
            "updated_at": "2017-11-18T14:26:15.356Z"
        },
        {
            "id": 566,
            "question": "What are some ways we could improve at teamwork? What makes you say that?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.359Z",
            "updated_at": "2017-11-18T14:26:15.359Z"
        },
        {
            "id": 568,
            "question": "How would you describe the division of work among team members?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.376Z",
            "updated_at": "2017-11-18T14:26:15.376Z"
        },
        {
            "id": 569,
            "question": "Do you feel adequately supported by other team members? What makes you say that?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.379Z",
            "updated_at": "2017-11-18T14:26:15.379Z"
        },
        {
            "id": 570,
            "question": "Is there anything you\u2019d like to see change about the team, and if so, why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.382Z",
            "updated_at": "2017-11-18T14:26:15.382Z"
        },
        {
            "id": 571,
            "question": "How are you feeling about the recent news? Why do you say that?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.394Z",
            "updated_at": "2017-11-18T14:26:15.394Z"
        },
        {
            "id": 572,
            "question": "What concerns do you have about the change that haven't been addressed?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.396Z",
            "updated_at": "2017-11-18T14:26:15.396Z"
        },
        {
            "id": 573,
            "question": "What\u2019s going well and not so well with the new situation\/development? Why do you think this might be happening?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.399Z",
            "updated_at": "2017-11-18T14:26:15.399Z"
        },
        {
            "id": 574,
            "question": "Do you have a clear understanding of the new goals and expectations? What makes you say that?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.410Z",
            "updated_at": "2017-11-18T14:26:15.410Z"
        },
        {
            "id": 575,
            "question": "How is the new situation\/development affecting your work? What could be getting in the way of your being effective?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.413Z",
            "updated_at": "2017-11-18T14:26:15.413Z"
        },
        {
            "id": 576,
            "question": "What sort of resources could you use right now to make things more manageable?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.416Z",
            "updated_at": "2017-11-18T14:26:15.416Z"
        },
        {
            "id": 577,
            "question": "Could you tell me a little more about that?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.428Z",
            "updated_at": "2017-11-18T14:26:15.428Z"
        },
        {
            "id": 578,
            "question": "Can you share some of the details around that particular issue? (Who was involved? Where? When? For how long?)",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.431Z",
            "updated_at": "2017-11-18T14:26:15.431Z"
        },
        {
            "id": 579,
            "question": "What are some possible ways to get the solution you need?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.434Z",
            "updated_at": "2017-11-18T14:26:15.434Z"
        },
        {
            "id": 580,
            "question": "What additional resources from me would be helpful for you as you solve this problem?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.446Z",
            "updated_at": "2017-11-18T14:26:15.446Z"
        },
        {
            "id": 581,
            "question": "What are your next steps to make progress on this problem?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.449Z",
            "updated_at": "2017-11-18T14:26:15.449Z"
        },
        {
            "id": 582,
            "question": "What do you do when you get stuck on something? What is your process of getting unstuck? Who is the team member you turn to for help?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.452Z",
            "updated_at": "2017-11-18T14:26:15.452Z"
        },
        {
            "id": 583,
            "question": "Who inspire you in the team? Whose opinions do you respect? What have they done?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.454Z",
            "updated_at": "2017-11-18T14:26:15.454Z"
        },
        {
            "id": 584,
            "question": "Is there anybody in the team that you find it difficult to work with? Can you tell me why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.465Z",
            "updated_at": "2017-11-18T14:26:15.465Z"
        },
        {
            "id": 585,
            "question": "What do you think about the amount of feedback in our team? When do others give feedback to you? Would you like to hear more feedback from other team member and me?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.468Z",
            "updated_at": "2017-11-18T14:26:15.468Z"
        },
        {
            "id": 586,
            "question": "What do you think would help us work together better?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.481Z",
            "updated_at": "2017-11-18T14:26:15.481Z"
        },
        {
            "id": 587,
            "question": "Whom in the team do you want to learn from? Whom do you get valuable feedback from?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.483Z",
            "updated_at": "2017-11-18T14:26:15.483Z"
        },
        {
            "id": 588,
            "question": "What are your top three motivators?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.495Z",
            "updated_at": "2017-11-18T14:26:15.495Z"
        },
        {
            "id": 589,
            "question": "What excites you about our business?  The company?  What concerns you?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.498Z",
            "updated_at": "2017-11-18T14:26:15.498Z"
        },
        {
            "id": 590,
            "question": "What do you think about _________?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.501Z",
            "updated_at": "2017-11-18T14:26:15.501Z"
        },
        {
            "id": 591,
            "question": "What\u2019s the No. 1 problem with our organization? Why?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.504Z",
            "updated_at": "2017-11-18T14:26:15.504Z"
        },
        {
            "id": 593,
            "question": "Who is really kicking ass in the company? Who do you admire?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.518Z",
            "updated_at": "2017-11-18T14:26:15.518Z"
        },
        {
            "id": 594,
            "question": "Is any part of your project unclear or confusing?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.521Z",
            "updated_at": "2017-11-18T14:26:15.521Z"
        },
        {
            "id": 595,
            "question": "Has anyone on the team ever made you feel uncomfortable? What happened?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.524Z",
            "updated_at": "2017-11-18T14:26:15.524Z"
        },
        {
            "id": 596,
            "question": "What characteristics make someone a good fit for our team? How would you look for those characteristics in an interview?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.536Z",
            "updated_at": "2017-11-18T14:26:15.536Z"
        },
        {
            "id": 597,
            "question": "What\u2019s the biggest thing you\u2019d like to change about our team?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.539Z",
            "updated_at": "2017-11-18T14:26:15.539Z"
        },
        {
            "id": 598,
            "question": "What\u2019s one thing we should change about how our team works together?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.542Z",
            "updated_at": "2017-11-18T14:26:15.542Z"
        },
        {
            "id": 599,
            "question": "Where do you think we can do better?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.554Z",
            "updated_at": "2017-11-18T14:26:15.554Z"
        },
        {
            "id": 600,
            "question": "How would you rate our communication as a team?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.557Z",
            "updated_at": "2017-11-18T14:26:15.557Z"
        },
        {
            "id": 601,
            "question": "What kind of communication or information do you wish you had more of?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.559Z",
            "updated_at": "2017-11-18T14:26:15.559Z"
        },
        {
            "id": 602,
            "question": "What areas are ahead of schedule?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.562Z",
            "updated_at": "2017-11-18T14:26:15.562Z"
        },
        {
            "id": 603,
            "question": "Is there anything that\u2019s slowing you down from getting your work done?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.578Z",
            "updated_at": "2017-11-18T14:26:15.578Z"
        },
        {
            "id": 604,
            "question": "Are there any problems or issues that I should know about?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.581Z",
            "updated_at": "2017-11-18T14:26:15.581Z"
        },
        {
            "id": 605,
            "question": "What do you think you can do to fix that problem?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.584Z",
            "updated_at": "2017-11-18T14:26:15.584Z"
        },
        {
            "id": 606,
            "question": "What could you have done differently?",
            "category": "Team and company",
            "created_at": "2017-11-18T14:26:15.598Z",
            "updated_at": "2017-11-18T14:26:15.598Z"
        },
        {
            "id": 607,
            "question": "What worries you? What\u2019s on your mind?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.601Z",
            "updated_at": "2017-11-18T14:26:15.601Z"
        },
        {
            "id": 608,
            "question": "What areas of your work are you confident about?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.604Z",
            "updated_at": "2017-11-18T14:26:15.604Z"
        },
        {
            "id": 609,
            "question": "What worries you?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.608Z",
            "updated_at": "2017-11-18T14:26:15.608Z"
        },
        {
            "id": 610,
            "question": "What suggestions do you have?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.612Z",
            "updated_at": "2017-11-18T14:26:15.612Z"
        },
        {
            "id": 611,
            "question": "What questions do you have about this project?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.626Z",
            "updated_at": "2017-11-18T14:26:15.626Z"
        },
        {
            "id": 612,
            "question": "How are you going to approach this?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.630Z",
            "updated_at": "2017-11-18T14:26:15.630Z"
        },
        {
            "id": 613,
            "question": "How are you planning to balance work and personal life this year?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.632Z",
            "updated_at": "2017-11-18T14:26:15.632Z"
        },
        {
            "id": 614,
            "question": "What are you doing for yourself outside of work?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.635Z",
            "updated_at": "2017-11-18T14:26:15.635Z"
        },
        {
            "id": 615,
            "question": "Is there anything you\u2019d like to be doing on your own time to relieve stress that you\u2019re not getting to? How can I help you achieve those personal goals?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.650Z",
            "updated_at": "2017-11-18T14:26:15.650Z"
        },
        {
            "id": 616,
            "question": "What does your ideal weekday look like?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.653Z",
            "updated_at": "2017-11-18T14:26:15.653Z"
        },
        {
            "id": 617,
            "question": "How is your workload right now?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.655Z",
            "updated_at": "2017-11-18T14:26:15.655Z"
        },
        {
            "id": 619,
            "question": "How do you feel about your work\/life balance?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.671Z",
            "updated_at": "2017-11-18T14:26:15.671Z"
        },
        {
            "id": 620,
            "question": "What, if anything, did you used to do that you find you don\u2019t have time for right now?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.673Z",
            "updated_at": "2017-11-18T14:26:15.673Z"
        },
        {
            "id": 621,
            "question": "What could we change about work that would improve the rest of your life?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.678Z",
            "updated_at": "2017-11-18T14:26:15.678Z"
        },
        {
            "id": 622,
            "question": "Which part of the day do you feel most productive? When do you feel that your energy and focus are at the lowest level? What are the changes that can be made so you can take the best out of a work day?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.682Z",
            "updated_at": "2017-11-18T14:26:15.682Z"
        },
        {
            "id": 623,
            "question": "What were your biggest time wasters or roadblocks last week or the week before?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.694Z",
            "updated_at": "2017-11-18T14:26:15.694Z"
        },
        {
            "id": 624,
            "question": "What stands in your way?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.697Z",
            "updated_at": "2017-11-18T14:26:15.697Z"
        },
        {
            "id": 625,
            "question": "What was difficult this week? what have you learned?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.700Z",
            "updated_at": "2017-11-18T14:26:15.700Z"
        },
        {
            "id": 626,
            "question": "When was your last vacation? ",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.711Z",
            "updated_at": "2017-11-18T14:26:15.711Z"
        },
        {
            "id": 627,
            "question": "When is your next vacation?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.714Z",
            "updated_at": "2017-11-18T14:26:15.714Z"
        },
        {
            "id": 628,
            "question": "What part of the day do you have the most energy and focus? When do you have the least? What changes could we make to your work schedule to accommodate this?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.717Z",
            "updated_at": "2017-11-18T14:26:15.717Z"
        },
        {
            "id": 629,
            "question": "What are 3 things could we do to improve your productivity if money was no object?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.729Z",
            "updated_at": "2017-11-18T14:26:15.729Z"
        },
        {
            "id": 630,
            "question": "What is an ideal, productive day at work for you? Walk me through the day\u2026",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.732Z",
            "updated_at": "2017-11-18T14:26:15.732Z"
        },
        {
            "id": 631,
            "question": "What\u2019s an inexpensive thing we could do to improve our office environment?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.734Z",
            "updated_at": "2017-11-18T14:26:15.734Z"
        },
        {
            "id": 632,
            "question": "What are the biggest time wasters for you each week?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.745Z",
            "updated_at": "2017-11-18T14:26:15.745Z"
        },
        {
            "id": 633,
            "question": "What makes you excited and motivated to work on a project?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.748Z",
            "updated_at": "2017-11-18T14:26:15.748Z"
        },
        {
            "id": 634,
            "question": "When you get stuck on something, what is your process for getting unstuck? Who do you turn to for help?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.750Z",
            "updated_at": "2017-11-18T14:26:15.750Z"
        },
        {
            "id": 635,
            "question": "What part of your work routine do you find is working best? What area do you want to improve?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.753Z",
            "updated_at": "2017-11-18T14:26:15.753Z"
        },
        {
            "id": 636,
            "question": "What do you do when you feel low energy or unmotivated?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.764Z",
            "updated_at": "2017-11-18T14:26:15.764Z"
        },
        {
            "id": 637,
            "question": "How can I help\u2026? (be more productive\/happier at work\/enjoy work more\/etc)",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.767Z",
            "updated_at": "2017-11-18T14:26:15.767Z"
        },
        {
            "id": 638,
            "question": "Is there anything that you\u2019re struggling with?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.769Z",
            "updated_at": "2017-11-18T14:26:15.769Z"
        },
        {
            "id": 639,
            "question": "Is there anything that you need from me?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.782Z",
            "updated_at": "2017-11-18T14:26:15.782Z"
        },
        {
            "id": 640,
            "question": "What is the most important thing we need to discuss today?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.785Z",
            "updated_at": "2017-11-18T14:26:15.785Z"
        },
        {
            "id": 641,
            "question": "What are your most significant accomplishments since we last met?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.788Z",
            "updated_at": "2017-11-18T14:26:15.788Z"
        },
        {
            "id": 642,
            "question": "What are the most important things you will focus on before we meet next?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.800Z",
            "updated_at": "2017-11-18T14:26:15.800Z"
        },
        {
            "id": 643,
            "question": "What obstacles are you encountering right now?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.802Z",
            "updated_at": "2017-11-18T14:26:15.802Z"
        },
        {
            "id": 644,
            "question": "How are you feeling about work?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.805Z",
            "updated_at": "2017-11-18T14:26:15.805Z"
        },
        {
            "id": 645,
            "question": "What about your job is most satisfying for you?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.808Z",
            "updated_at": "2017-11-18T14:26:15.808Z"
        },
        {
            "id": 646,
            "question": "What about work is frustrating?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.819Z",
            "updated_at": "2017-11-18T14:26:15.819Z"
        },
        {
            "id": 647,
            "question": "If you could change one thing about your job today, what would you change?",
            "category": "Work-life",
            "created_at": "2017-11-18T14:26:15.822Z",
            "updated_at": "2017-11-18T14:26:15.822Z"
        }
    ];
}
