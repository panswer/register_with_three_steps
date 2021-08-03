import React from 'react';
import {RegisterContext} from '../context/register-context';


function Step3(props) {
    return (
        <RegisterContext.Consumer>
            {({
                termsAndCondition, marketing, changeStatus, nextStep
            })=>(
                <>
                    <div className="inline">
                        <label htmlFor="termsAndCondition">Terms and condition</label>
                        <input type="checkbox" name="termsAndContition" id="termsAndCondition" value={termsAndCondition} onChange={e=>changeStatus(e)}/>
                    </div>
                    <div className="inline">
                        <label htmlFor="marketing">Marketing</label>
                        <input type="checkbox" name="marketing" id="marketing" value={marketing} onChange={e=>changeStatus(e)} />
                    </div>
                    <input type="button" value="Next" onClick={e=>nextStep(e)} />
                </>
            )}
        </RegisterContext.Consumer>
    );
}

export default Step3;