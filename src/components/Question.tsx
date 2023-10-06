import { Question } from "../types";

type Props = {
    queestion: Question;
    onSubmit: (correct: boolean) => void
}

function QuestionComp(props: Props) {
    return <div>
        <h3>{props.queestion.question}</h3>
        
    </div>
}


export default QuestionComp;