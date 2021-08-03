export function changeStatus(state,setState){
    return e=>{
        if(e.target.name){
            setState({
                ...state,
                [e.target.name]:e.target.value
            });
        }
    }
}

export function nextStep(state,setState) {
    return e=>{
        e.preventDefault();
        let next = ++state.step;
        if(next>3){
            setState({
                ...state,
                step:1
            })
        }else{
            setState({
                ...state,
                step:next
            })
        }
    }
}