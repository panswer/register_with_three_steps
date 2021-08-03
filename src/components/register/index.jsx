import React,{useState} from 'react';
import './styles/form.css';
import {RegisterContext,statusDefault} from './context/register-context';

import {changeStatus,nextStep} from './context/logic';

import Step1 from './step1/step1';
import Step2 from './step2/step2';
import Step3 from './step3/step3';

function Register(props) {
    const [status,setStatus] = useState(statusDefault);

    return (
        <RegisterContext.Provider value={{
            ...status,
            changeStatus:changeStatus(status,setStatus),
            nextStep:nextStep(status,setStatus)
        }}>
            <div className="container">
                <form className="register">
                    <h1>Register</h1>
                    {
                        status.step===1
                            ? <Step1 />
                            : 
                        status.step===2
                            ? <Step2 />
                            : 
                        status.step===3
                            ?  <Step3 />
                            : <h1>Page Not Found</h1>
                    }
                </form>
            </div>
        </RegisterContext.Provider>
    );
}

export default Register;