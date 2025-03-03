// 퀴즈 데이터
const quizData = {
    questions: [
        {
            id: 1,
            question: "당신은 갑작스러운 응급 상황에서 가장 먼저 무엇을 하나요?",
            options: [
                { id: "1", text: "일단 주변을 빠르게 스캔하고 가장 필요한 조치를 한다.", type: "FIRE" },
                { id: "2", text: "당황하지만 프로토콜을 생각하며 차근차근 대응한다.", type: "BOOK" },
                { id: "3", text: "바로 전문가에게 도움을 요청하며 지원을 기다린다.", type: "MASK" },
                { id: "4", text: "'아, 이거 다 내 일이야?' 하며 고민하다가 결국 손을 뻗는다.", type: "STOP" }
            ]
        },
        {
            id: 2,
            question: "당신이 가장 잘 맞을 것 같은 의료 팀원은?",
            options: [
                { id: "1", text: "무조건 실력 우선! 말도 안 되는 상황도 해결하는 괴물 같은 존재", type: "FIRE" },
                { id: "2", text: "처음엔 삽질하지만 결국엔 성장하는 열정파", type: "BOOK" },
                { id: "3", text: "터프하고 노련하지만 속은 따뜻한 베테랑", type: "MASK" },
                { id: "4", text: "첫인상은 별로지만 알고 보면 의리 있는 현실주의자", type: "STOP" }
            ]
        },
        {
            id: 3,
            question: "응급 수술 중 당신의 스타일은?",
            options: [
                { id: "1", text: "\"닥쳐, 살려줄 테니까!\"", type: "FIRE" },
                { id: "2", text: "\"CT부터 찍어야 하는 거 아닙니까?\"", type: "BOOK" },
                { id: "3", text: "\"너도 너만의 이유를 찾아~\"", type: "MASK" },
                { id: "4", text: "\"근데... 나 진짜 이거 해야 돼?\"", type: "STOP" }
            ]
        },
        {
            id: 4,
            question: "위급한 상황에서 당신이 가장 듣고 싶은 말은?",
            options: [
                { id: "1", text: "\"이건 네가 할 수 있어!\"", type: "FIRE" },
                { id: "2", text: "\"차분히 하나씩 해결해보자.\"", type: "BOOK" },
                { id: "3", text: "\"그냥 나만 믿어.\"", type: "MASK" },
                { id: "4", text: "\"야, 이거 우리 일이냐?\"", type: "STOP" }
            ]
        },
        {
            id: 5,
            question: "당신이 가장 피하고 싶은 직장 동료 유형은?",
            options: [
                { id: "1", text: "내 일까지 떠넘기는 무능력한 사람", type: "FIRE" },
                { id: "2", text: "정치질만 하는 사람", type: "BOOK" },
                { id: "3", text: "감정적으로 휘둘리는 사람", type: "MASK" },
                { id: "4", text: "나만 힘든데 혼자 너무 열심히 하는 사람", type: "STOP" }
            ]
        },
        {
            id: 6,
            question: "당신의 스트레스 해소법은?",
            options: [
                { id: "1", text: "헬스장 가서 웨이트 치기", type: "FIRE" },
                { id: "2", text: "혼자 조용히 독서하기", type: "BOOK" },
                { id: "3", text: "술 한잔하며 푸념하기", type: "MASK" },
                { id: "4", text: "그냥 자버리기", type: "STOP" }
            ]
        },
        {
            id: 7,
            question: "한밤중에 병원에서 귀신을 봤다면?",
            options: [
                { id: "1", text: "\"뭐야, 넌 누구야? 진료 기록 있냐?\"", type: "FIRE" },
                { id: "2", text: "\"혹시 병원 역사에 대해 아십니까?\"", type: "BOOK" },
                { id: "3", text: "\"이거 실화냐?\"", type: "MASK" },
                { id: "4", text: "\"아... 몰라... 그냥 퇴근할래.\"", type: "STOP" }
            ]
        },
        {
            id: 8,
            question: "위급한 환자가 이송되었는데 장비가 부족하다면?",
            options: [
                { id: "1", text: "\"닥치고 수술한다!\"", type: "FIRE" },
                { id: "2", text: "\"장비 없으면 이건 불가능한데…\"", type: "BOOK" },
                { id: "3", text: "\"내가 할 수 있을까...?\"", type: "MASK" },
                { id: "4", text: "\"진짜 왜 나한테만 이런 일이…\"", type: "STOP" }
            ]
        },
        {
            id: 9,
            question: "병원에서 당신이 하고 싶은 역할은?",
            options: [
                { id: "1", text: "\"나는 무조건 집도의!\"", type: "FIRE" },
                { id: "2", text: "\"환자 상담 & 기록 정리\"", type: "BOOK" },
                { id: "3", text: "\"나는 백업, 서포트 담당\"", type: "MASK" },
                { id: "4", text: "\"난 그냥 행정직이 나을 듯\"", type: "STOP" }
            ]
        },
        {
            id: 10,
            question: "만약 당신이 이 병원에서 살아남는다면, 이유는?",
            options: [
                { id: "1", text: "\"내가 제일 잘하니까.\"", type: "FIRE" },
                { id: "2", text: "\"모든 걸 계획적으로 대비했으니까.\"", type: "BOOK" },
                { id: "3", text: "\"운도 실력도 따라줬으니까.\"", type: "MASK" },
                { id: "4", text: "\"그냥 버텼을 뿐인데?\"", type: "STOP" }
            ]
        }
    ]
};

// 성향 타입 정의
const personalityTypes = {
    FIRE: {
        name: "백강혁 타입",
        title: "절대적 실력파",
        quote: "닥쳐! 살려줄 테니까!",
        traits: [
            "타고난 리더십 & 추진력",
            "어려운 상황에서도 결단력 발휘",
            "논리보다 실전 경험을 믿음",
            "때론 싸가지 없어 보이지만, 결국엔 실력으로 증명"
        ]
    },
    BOOK: {
        name: "양재원 타입",
        title: "성장형 주인공",
        quote: "CT부터 찍어야 하는 거 아닙니까?",
        traits: [
            "처음엔 불안하지만 성장하는 타입",
            "원칙과 논리를 중시하는 신중함",
            "선배들에게 잔소리 듣지만 나중엔 인정받음",
            "극한 상황에서 빛을 발하는 노력파"
        ]
    },
    MASK: {
        name: "천장미 타입",
        title: "센터의 히든 히어로",
        quote: "이거 안 하면 누가 해요?",
        traits: [
            "유쾌하지만, 일할 땐 진지한 타입",
            "위기 상황에서도 침착한 대응",
            "뒷수습 담당이지만 없으면 큰일 나는 존재",
            "팀을 살리는 숨은 조력자"
        ]
    },
    STOP: {
        name: "한유림 타입",
        title: "현실적 생존자",
        quote: "나도 일단 살아야지!",
        traits: [
            "처음엔 적대하지만 나중엔 아군이 되는 타입",
            "조직 내 생존 본능 강함",
            "처음엔 비판받지만 결국 인정받음",
            "귀찮아 보이지만 최후의 보루"
        ]
    }
};

// 전역 변수
let currentQuestion = 0;
let userAnswers = [];
let introPlayer = null; // 시작화면 YouTube 플레이어
let resultPlayer = null; // 결과화면 YouTube 플레이어

// DOM 요소 참조
const introScreen = document.getElementById('intro');
const quizContainer = document.getElementById('quiz-container');
const resultScreen = document.getElementById('result');
const startButton = document.querySelector('.start-btn');
const questionElement = document.querySelector('.question');
const answersContainer = document.querySelector('.answers-container');
const progressBar = document.querySelector('.progress-bar');
const backButton = document.querySelector('.back-btn');

// 초기화
function initializeQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    updateProgressBar();

    const introVideo = document.getElementById('intro-video');
    if (introVideo) {
        introPlayer = new YT.Player('intro-video', {
            events: {
                'onReady': (event) => {
                    event.target.playVideo();
                }
            }
        });
    }
}

// 진행 상태 업데이트
function updateProgressBar() {
    const progress = (currentQuestion / quizData.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// 이전 문제로 이동하는 함수 추가
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// 퀴즈 시작
function startQuiz() {
    if (introPlayer) {
        introPlayer.destroy(); // 시작화면 플레이어 제거
        introPlayer = null;
    }
    introScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    resultScreen.style.display = 'none';
    currentQuestion = 0;
    userAnswers = [];
    showQuestion();
    
    // 이전 버튼에 이벤트 리스너 추가
    backButton.addEventListener('click', goToPreviousQuestion);
}

// 질문 표시
function showQuestion() {
    const question = quizData.questions[currentQuestion];
    
    // 질문 표시 - 번호를 포함하여 더 명확하게
    questionElement.textContent = question.question;
    
    // 질문 카운터 업데이트
    const questionCounter = document.querySelector('.question-counter');
    questionCounter.textContent = `${currentQuestion + 1}/${quizData.questions.length}`;
    
    // 뒤로가기 버튼 상태 업데이트
    if (backButton) {
        backButton.style.display = currentQuestion === 0 ? 'none' : 'block';
    }
    
    // 답변 버튼 생성
    answersContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.setAttribute('data-option-number', index + 1);
        
        // 번호와 텍스트를 분리하여 설정
        const numberSpan = document.createElement('span');
        numberSpan.className = 'option-number';
        numberSpan.textContent = `${index + 1}`;
        
        const textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.textContent = option.text;
        
        button.appendChild(numberSpan);
        button.appendChild(textSpan);
        
        if (userAnswers[currentQuestion] && userAnswers[currentQuestion].id === option.id) {
            button.classList.add('selected');
        }
        
        button.addEventListener('click', () => handleAnswer(option));
        answersContainer.appendChild(button);
    });
    
    updateProgressBar();
}

// 답변 처리 - 딜레이 제거 및 즉각적인 반응
function handleAnswer(answer) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // 번호를 제외한 텍스트만 비교
    const selectedButton = Array.from(buttons).find(btn => {
        const textSpan = btn.querySelector('.option-text');
        return textSpan.textContent === answer.text;
    });
    
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
    
    userAnswers[currentQuestion] = answer;
    
    // 딜레이 제거하고 즉시 다음 문제로 이동
    currentQuestion++;
    if (currentQuestion < quizData.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 결과 계산
function calculateResult() {
    const typeCounts = {
        FIRE: 0,
        BOOK: 0,
        MASK: 0,
        STOP: 0
    };
    
    userAnswers.forEach(answer => {
        if (answer && answer.type) {
            typeCounts[answer.type]++;
        }
    });
    
    // 최대 점수를 받은 타입 찾기
    const maxCount = Math.max(...Object.values(typeCounts));
    const maxTypes = Object.keys(typeCounts).filter(type => typeCounts[type] === maxCount);
    
    // 동점일 경우 랜덤 선택
    return maxTypes[Math.floor(Math.random() * maxTypes.length)];
}

// 결과 표시
function showResult() {
    const resultType = calculateResult();
    const personality = personalityTypes[resultType];
    
    if (resultPlayer) {
        resultPlayer.destroy(); // 이전 결과화면 플레이어 제거
        resultPlayer = null;
    }
    
    quizContainer.style.display = 'none';
    resultScreen.style.display = 'block';
    
    // 캐릭터별 영상 시작 시간 매핑
    const characterTimes = {
        'FIRE': 19, // 백강혁
        'BOOK': 46, // 양재원
        'MASK': 42, // 천장미
        'STOP': 29  // 한유림
    };
    
    const resultHTML = `
        <div class="result-content">
            <h2>🩸 당신의 성향은...</h2>
            <h3>${personality.name} - ${personality.title}</h3>
            <div class="youtube-container">
                <iframe 
                    id="result-video"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/GsHTag-UMvY?si=nsa5_bTtWwvWuewu&start=${characterTimes[resultType]}&autoplay=1" 
                    title="중증외상센터 예고편" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <p class="quote">💉 "${personality.quote}"</p>
            <ul>
                ${personality.traits.map(trait => `<li>${trait}</li>`).join('')}
            </ul>
            <button onclick="restartQuiz()" class="restart-btn">
                <span class="btn-text">다시 테스트하기</span>
                <span class="btn-icon">↺</span>
            </button>
        </div>
    `;
    
    resultScreen.innerHTML = resultHTML;
}

// 퀴즈 재시작
function restartQuiz() {
    if (resultPlayer) {
        resultPlayer.destroy();
        resultPlayer = null;
    }

    resultScreen.style.display = 'none';

    // intro 화면 표시 전에 기존 YouTube iframe 제거
    const introVideoContainer = document.getElementById('intro-video');
    if (introVideoContainer) {
        introVideoContainer.remove();
    }

    // 새로운 iframe을 생성하여 intro에 추가
    const newIframe = document.createElement('iframe');
    newIframe.id = 'intro-video';
    newIframe.width = '560';
    newIframe.height = '315';
    newIframe.src = "https://www.youtube.com/embed/GsHTag-UMvY?si=nsa5_bTtWwvWuewu&mute=1&enablejsapi=1";
    newIframe.title = "중증외상센터 예고편";
    newIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    newIframe.allowFullscreen = true;

    // 새 iframe을 intro에 추가
    document.querySelector('.youtube-container').appendChild(newIframe);

    introScreen.style.display = 'block';

    // 새로운 YouTube 플레이어 초기화
    setTimeout(() => {
        const introVideo = document.getElementById('intro-video');
        if (introVideo) {
            introPlayer = new YT.Player('intro-video', {
                events: {
                    'onReady': (event) => {
                        event.target.playVideo();
                    }
                }
            });
        }
    }, 500);

    initializeQuiz();
}


// 문서가 로드되면 초기화
document.addEventListener('DOMContentLoaded', () => {
    initializeQuiz();
    
    // YouTube API 스크립트 로드
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 시작 버튼 이벤트 리스너
    startButton.addEventListener('click', () => {
        introPlayer.destroy(); // 시작화면 플레이어 제거
        introPlayer = null;
        startQuiz();
    });
});

// YouTube API 준비 완료 시 호출되는 함수
window.onYouTubeIframeAPIReady = function() {
    // 시작화면 비디오 초기화
    setTimeout(() => {
        const introVideo = document.getElementById('intro-video');
        if (introVideo && !introPlayer) {
            introPlayer = new YT.Player('intro-video', {
                events: {
                    'onReady': (event) => {
                        event.target.playVideo();
                    }
                }
            });
        }
    }, 100);
};

// 결과화면 YouTube 플레이어 초기화를 위한 MutationObserver
const resultObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            const resultVideo = document.getElementById('result-video');
            if (resultVideo && !resultPlayer) {
                resultPlayer = new YT.Player('result-video', {
                    events: {
                        'onReady': (event) => {
                            event.target.playVideo();
                        }
                    }
                });
            }
        }
    });
});

// 결과 화면 관찰 시작
resultObserver.observe(resultScreen, { childList: true, subtree: true });

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
let scores = {};

// 초기화
function initializeQuiz() {
    // 모든 캐릭터의 점수를 0으로 초기화
    Object.keys(characters).forEach(character => {
        scores[character] = 0;
    });
    currentQuestion = 0;
}

// 문서가 로드되면 초기화
document.addEventListener('DOMContentLoaded', () => {
    initializeQuiz();
    startButton.addEventListener('click', startQuiz);
});

// 답변 선택
function selectAnswer(answer) {
    // 점수 계산
    Object.entries(answer.scores).forEach(([character, score]) => {
        scores[character] = (scores[character] || 0) + score;
    });
    
    // 다음 질문으로 이동
    currentQuestion++;
    
    if (currentQuestion < quizData.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initializeQuiz); 
