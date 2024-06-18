const questions = [
    {
        'question': 'what is the base of the binary number system?',
        'a': '10',
        'b': '8',
        'c': '2',
        'd': '16',
        'correct': 'c'
    },
    {
        'question': 'How many digits are used in binary?',
        'a': '4',
        'b': '10',
        'c': '2',
        'd': '8',
        'correct': 'c'
    },
    {
        'question': 'What is the binary equivalent of the decimal number 5?',
        'a': '101',
        'b': '0101',
        'c': '100',
        'd': '00101',
        'correct': 'a'
    },
    {
        'question': 'In binary, which digit represents OFF?',
        'a': '2',
        'b': '1',
        'c': '0',
        'd': 'negative numbers don\'t exist',
        'correct': 'c'
    },
    {
        'question': 'What is the decimal equivalent of the binary number 1101?',
        'a': '10',
        'b': '13',
        'c': '15',
        'd': '12',
        'correct': 'd'
    },
    {
        'question': 'Which of the following is NOT a valid binary number?',
        'a': '1010',
        'b': '011A1', // Contains a letter
        'c': '11001',
        'd': '0000',
        'correct': 'b'
    },
    {
        'question': 'Binary is used extensively in...',
        'a': 'web development',
        'b': 'computer memory',
        'c': 'both a and b',
        'd': 'neither a nor b',
        'correct': 'c'
    },
    {
        'question': 'A collection of 8 binary digits is called a...',
        'a': 'bit',
        'b': 'byte',
        'c': 'word',
        'd': 'segment',
        'correct': 'b'
    },
    {
        'question': 'How can you convert a binary number to decimal?',
        'a': 'multiply each digit by its position value (2 raised to the power of its position)',
        'b': 'add all the digits together',
        'c': 'divide each digit by 2',
        'd': 'it\'s impossible',
        'correct': 'a'
    },
    {
        'question': 'Binary code is the foundation for...',
        'a': 'machine language',
        'b': 'programming languages',
        'c': 'all computer instructions',
        'd': 'a and c only',
        'correct': 'd'
    }
]

let index = 0
let total = questions.length
let right = 0,
    wrong = 0

const question = document.getElementById('question')
const opts = document.querySelectorAll('.opts')

const loadQuestion = () => {
    if (index == questions.length) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    question.innerText = `${index + 1}) ${data.question}`

    opts[1].nextElementSibling.innerText = data.b
    opts[0].nextElementSibling.innerText = data.a
    opts[2].nextElementSibling.innerText = data.c
    opts[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    // console.log(ans, data.correct)
    if (ans === data.correct) {
        right++
    } else {
        wrong++
    }

    index++
    loadQuestion()
}

const getAnswer = () => {
    let answer
    opts.forEach(
        (input) => {
            if (input.checked) {
                // console.log(input.value)
                answer = input.value
            }
        }
    )

    return answer
}

const reset = () => {
    opts.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.querySelector('.box').innerHTML =
        `
        <h2> Thank You For Playing </h2>
        <h3> ${right} / ${total} are correct. </h3>
    `
}

loadQuestion()
