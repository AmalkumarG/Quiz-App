const initialState={
    rightAns:0,wrongAns:0
}

const answerReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "rightAnswer":
            return{
                ...state,
                rightAns:state.rightAns+1
            }
        case "wrongAnswer":return{
            ...state,
            wrongAns:state.wrongAns+1
        }
        case "cleardata":return{
            ...state,
            rightAns:state.rightAns=0,
            wrongAns:state.wrongAns=0
        }
        default:
            return state
    }

}

export default answerReducer