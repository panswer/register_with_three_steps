export function validateFields(state,callback,e,setError){
    let validate = true;

    let myErrors={
        firstname:'',
        lastname:'',
        email:'',
        country:''
    };

    [
        'firstname',
        'lastname',
        'email',
        'country'
    ].forEach(key=>{
        if(!Boolean(state[key])){
            myErrors[key]=`${key} is required`
            validate=false;
        }else{
            myErrors[key]='';
        }
    });

    if(validate){
        callback(e);
    }else{
        setError(myErrors);
    }
}