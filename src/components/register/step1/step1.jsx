import React,{useState} from 'react';
import {RegisterContext,countryList} from '../context/register-context';

import {validateFields} from './logic';

function Step1(props) {
    const [error,setError]=useState({
        firstname:'',
        lastname:'',
        email:'',
        country:''
    });
    return (
        <RegisterContext.Consumer>
            {
                ({
                    firstname,lastname,country,email,changeStatus,nextStep
                })=>(
                    <>
                        <div className="">
                            <label htmlFor="firstnae">Firstname</label>
                            <input type="text" name="firstname" id="firstname" value={firstname} onChange={e=>changeStatus(e)} />
                            <div className="box-error">
                                <span className='block-error'>{error.firstname}</span>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" name="lastname" id="lastname" value={lastname} onChange={e=>changeStatus(e)} />
                            <div className="box-error">
                                <span className='block-error'>{error.lastname}</span>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={e=>changeStatus(e)} />
                            <div className="box-error">
                                <span className='block-error'>{error.email}</span>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="country">Country</label>
                            <select name="country" id="country" value={country} onChange={e=>changeStatus(e)}>
                                {
                                    countryList.map(
                                        (country,index)=><option value={country.value} key={index}>{country.label}</option>
                                    )
                                }
                            </select>
                            <div className="box-error">
                                <span className='block-error'>{error.country}</span>
                            </div>
                        </div>
                        <input type="button" value="Next" onClick={e=>validateFields({firstname,lastname,country,email},nextStep,e,setError)} />
                    </>
                )
            }
        </RegisterContext.Consumer>
    );
}

export default Step1;