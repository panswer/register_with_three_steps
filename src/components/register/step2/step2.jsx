import React,{useState} from 'react';
import {RegisterContext} from '../context/register-context';

import {validateField} from './logic';

function Step2(props) {
    const [error,setError] = useState({
        password:'',
        repeatPassword:''
    });
    return (
        <RegisterContext.Consumer>
            {({
                password,repeatPassword,changeStatus,nextStep
            })=>(
                <>
                    <div className="">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={e=>changeStatus(e)} />
                        <div className="block-error">
                            <span className="box-error">
                                {error.password}
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="repeatPassword">Repeat password</label>
                        <input type="password" name="repeatPassword" id="repeatPassword" value={repeatPassword} onChange={e=>changeStatus(e)} />
                        <div className="block-error">
                            <span className="block-error">
                                {error.repeatPassword}
                            </span>
                        </div>
                    </div>
                    <input type="button" value="Next" onClick={e=>validateField({password,repeatPassword},nextStep,e,setError)} />
                </>
            )}
        </RegisterContext.Consumer>
    );
}

export default Step2;