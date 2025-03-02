// 퀴즈 질문 데이터
const questions = [
    {
        question: "위급한 상황에서 당신의 반응은?",
        answers: [
            { text: "빠르게 판단하고 즉시 행동한다.", scores: { "백강혁": 2, "한유림": 1 } },
            { text: "당황하지만 최선을 다해 해결하려 한다.", scores: { "양재원": 2, "천장미": 1 } },
            { text: "상황을 냉철하게 분석하고 지휘하는 편이다.", scores: { "한유림": 2, "박경원": 1 } },
            { text: "규칙과 절차를 우선 고려한다.", scores: { "박경원": 2, "양재원": 1 } },
            { text: "남을 돕고 싶지만 신중하게 접근한다.", scores: { "천장미": 2, "백강혁": 1 } }
        ]
    },
    {
        question: "당신이 일할 때 가장 중요하게 여기는 것은?",
        answers: [
            { text: "압도적인 실력과 빠른 판단력", scores: { "백강혁": 2, "한유림": 1 } },
            { text: "끊임없는 배움과 성장", scores: { "양재원": 2, "천장미": 1 } },
            { text: "동료들과의 신뢰와 협력", scores: { "천장미": 2, "박경원": 1 } },
            { text: "리더십과 조직 운영", scores: { "한유림": 2, "백강혁": 1 } },
            { text: "원칙과 절차 준수", scores: { "박경원": 2, "양재원": 1 } }
        ]
    },
    {
        question: "팀워크에서 당신의 역할은?",
        answers: [
            { text: "위기의 순간 해결책을 제시하는 리더", scores: { "백강혁": 2, "한유림": 1 } },
            { text: "부족하지만 계속 성장하는 노력파", scores: { "양재원": 2, "천장미": 1 } },
            { text: "팀의 분위기를 조율하고 돕는 조력자", scores: { "천장미": 2, "박경원": 1 } },
            { text: "냉철하게 지휘하며 책임지는 리더", scores: { "한유림": 2, "백강혁": 1 } },
            { text: "세부적인 부분까지 신경 쓰며 정밀하게 분석하는 실무자", scores: { "박경원": 2, "양재원": 1 } }
        ]
    },
    {
        question: "스트레스 받을 때 당신의 반응은?",
        answers: [
            { text: "해결책을 찾아 바로 실천한다.", scores: { "백강혁": 2, "한유림": 1 } },
            { text: "고민이 많아지지만 결국 해결하려 한다.", scores: { "양재원": 2, "박경원": 1 } },
            { text: "주변 사람과 상의하고 조언을 듣는다.", scores: { "천장미": 2, "양재원": 1 } },
            { text: "외부적으로는 냉정하지만 속으로 많이 생각한다.", scores: { "한유림": 2, "천장미": 1 } },
            { text: "정해진 절차대로 문제를 해결하려 한다.", scores: { "박경원": 2, "백강혁": 1 } }
        ]
    },
    {
        question: "당신이 가장 공감하는 명대사는?",
        answers: [
            { text: "널 믿는 날 믿어. 나 믿지?", scores: { "백강혁": 2, "한유림": 1 } },
            { text: "우리는 계속 뛰어야 한다.", scores: { "양재원": 2, "천장미": 1 } },
            { text: "한 번에 잘하면 펠로우 왜 해요? 교수하지.", scores: { "천장미": 2, "박경원": 1 } },
            { text: "닥쳐! 살려줄 테니까!", scores: { "한유림": 2, "백강혁": 1 } },
            { text: "CT부터 찍어야 하는 거 아닙니까?", scores: { "박경원": 2, "양재원": 1 } }
        ]
    }
];

// 캐릭터 정보
const characters = {
    "백강혁": {
        name: "백강혁",
        description: "뛰어난 실력과 추진력을 가진 외상외과장. 위기 상황에서도 흔들리지 않고 해결책을 찾아내며, 직설적이고 다소 강압적이지만 목표 지향적인 성격의 소유자입니다.",
        image: "images/baek.jpg"
    },
    "양재원": {
        name: "양재원",
        description: "끊임없이 성장하는 노력형 캐릭터. 처음엔 겁이 많지만 점점 강해지고 자신감을 키우며, 팀 내에서 배우며 도전하는 자세를 가진 의사입니다.",
        image: "images/yang.jpg"
    },
    "천장미": {
        name: "천장미",
        description: "따뜻하고 배려심이 많으며 팀워크를 중시하는 간호사. 경험이 풍부하고 위기 상황에서 팀을 돕는 핵심 인력이며, 긍정적이고 주변 사람들에게 신뢰받는 인물입니다.",
        image: "images/cheon.jpg"
    },
    "한유림": {
        name: "한유림",
        description: "냉철한 카리스마를 가진 외과 과장. 초반엔 정치적 성향이 강하지만 개과천선하며 팀을 돕는 리더로서, 위기 상황에서 책임지고 결단을 내리는 타입입니다.",
        image: "images/han.jpg"
    },
    "박경원": {
        name: "박경원",
        description: "실력을 갖춘 마취과 전공의. 원칙과 절차를 중시하며 세부적인 것까지 꼼꼼하게 확인하는 스타일로, 처음엔 중증외상센터와 거리를 두지만 점점 팀에 헌신하는 모습을 보입니다.",
        image: "images/park.jpg"
    }
};

// 전역 변수
let currentQuestion = 0;
let scores = {};

// DOM 요소
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const progressBar = document.querySelector('.progress-bar');

// 초기화
function initializeQuiz() {
    // 모든 캐릭터의 점수를 0으로 초기화
    Object.keys(characters).forEach(character => {
        scores[character] = 0;
    });
    
    // 이벤트 리스너 설정
    startButton.addEventListener('click', startQuiz);
}

// 퀴즈 시작
function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// 질문 표시
function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    
    // 진행 상태 업데이트
    progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
    
    // 답변 버튼 생성
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(answer));
        answersContainer.appendChild(button);
    });
}

// 답변 선택
function selectAnswer(answer) {
    // 점수 계산
    Object.entries(answer.scores).forEach(([character, score]) => {
        scores[character] = (scores[character] || 0) + score;
    });
    
    // 다음 질문으로 이동
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 결과 표시
function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // 최고 점수 캐릭터 찾기
    const maxScore = Math.max(...Object.values(scores));
    const topCharacters = Object.entries(scores)
        .filter(([_, score]) => score === maxScore)
        .map(([character]) => character);
    
    // 동점자 중 랜덤 선택
    const resultCharacter = characters[topCharacters[Math.floor(Math.random() * topCharacters.length)]];
    
    // 결과 표시
    document.getElementById('character-name').textContent = resultCharacter.name;
    document.getElementById('character-description').textContent = resultCharacter.description;
    document.getElementById('character-image').src = resultCharacter.image;
}

// 결과 공유
function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: '중증외상센터 캐릭터 테스트',
            text: `나와 가장 잘 맞는 캐릭터는 ${document.getElementById('character-name').textContent}입니다!`,
            url: window.location.href
        });
    } else {
        alert('공유하기가 지원되지 않는 브라우저입니다.');
    }
}

// 퀴즈 재시작
function restartQuiz() {
    currentQuestion = 0;
    scores = {};
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initializeQuiz); 