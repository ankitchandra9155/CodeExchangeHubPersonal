import CardComponent from "./CardComponent"
export default function AllquestionComponents({setAllQuestionVisable,setQuestionDescription})
{
    return(<>
        <CardComponent setAllQuestionVisable={setAllQuestionVisable} setQuestionDescription={setQuestionDescription}/>
        <CardComponent setAllQuestionVisable={setAllQuestionVisable} setQuestionDescription={setQuestionDescription}/>
        <CardComponent setAllQuestionVisable={setAllQuestionVisable} setQuestionDescription={setQuestionDescription}/>
        <CardComponent setAllQuestionVisable={setAllQuestionVisable} setQuestionDescription={setQuestionDescription}/>
        <CardComponent setAllQuestionVisable={setAllQuestionVisable} setQuestionDescription={setQuestionDescription}/>
        
    </>)
}