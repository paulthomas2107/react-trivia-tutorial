import { Question } from '../types';
import Answer from './Answer';
import Answers from './Answers';

type Props = {
    queestion: Question;
    onSubmit: (correct: boolean) => void;
};

function QuestionComp(props: Props) {
    return (
        <div>
            <h3>{props.queestion.question}</h3>
            <Answers question={props.queestion} onSubmit={props.onSubmit} />
        </div>
    );
}

export default QuestionComp;
