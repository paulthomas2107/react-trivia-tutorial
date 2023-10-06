import QuestionComp from './components/Question';
import StatBar from './components/StatBar';
import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';

function App() {
    const allQuestions = questions as Questions;
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [inCorrectAnswers, setInCorrectAnswers] = useState(0);

    return (
        <div>
            <StatBar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={inCorrectAnswers}
            />
            <QuestionComp
                queestion={allQuestions.questions[currentQuestionIdx]}
                onSubmit={() => {}}
            />
        </div>
    );
}

export default App;
