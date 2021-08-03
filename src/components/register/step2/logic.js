exports.validateField=(state,callback,e,setError)=>{
    let validate = true;
    let myErrors = {
        password:'',
        repeatPassword:''
    };

    if(!Boolean(state.password)){
        myErrors.password="It's required a password";
        validate=false;
    }else{
        myErrors.password='';
    }

    if(state.password!==state.repeatPassword){
        myErrors.repeatPassword="The password doesn't match";
        validate=false;
    }else{
        myErrors.repeatPassword="";
    }

    if(validate){
        callback(e);
    }else{
        setError(myErrors);
    }
}