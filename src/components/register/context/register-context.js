import {createContext} from 'react';

export const countryList = [{
    value:'united state',
    label:'United State'
},{
    value:'united kingdom',
    label:'United Kingdom'
}];

export const statusDefault={
    // controller
    step:1,
    // step 1
    firstname:'',
    lastname:'',
    email:'',
    country:'',
    // step 2
    password:'',
    repeatPassword:'',
    // step 3
    termsAndCondition:false,
    marketing:false,
    changeStatus:(e={
        name:'',
        value:''
    })=>{},
    nextStep:()=>{}
};

export const RegisterContext = createContext(statusDefault);