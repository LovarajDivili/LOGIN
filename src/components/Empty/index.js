import { useState } from 'react';
//import { Link } from 'react-router-dom';


import './index.css'







const LoginPage = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isMember, setIsMember] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [firstError, setFirstError] = useState(false);
    const [lastError, setLastError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [register_success, setRegister_success] = useState(true);

    const toggleMember = () => {
        setIsMember(!isMember)
    }
    // on change functions...............................*--------*
    const onChangeEmailEvent = (event) => {
        setEmail(event.target.value);
    }
    const onChangePasswordEvent = (event) => {
        setPassword(event.target.value)  

    }
    const onChangeFirstNameEvent = (event) => {
        setFirstName(event.target.value)
    }
    const onChangeLastNameEvent = (event) => {
        setLastName(event.target.value)
    }

    // Blur functions...............................*......*
    const onBlurFirstFunction = () => {
        
    }
    const onBlurLastFunction = () => {
        
    }
    const onBlurEmailFunction = () => {
        
    }
    const onBlurPasswordFunction = () => {
        
    }

    

    // SUBMIT FORM ..............................*...........*
    const onSubmitEvent = (event) => {
        event.preventDefault();
        
        
    }



    


    return(
        <>

            <div className="container">
            <form className="form" onSubmit={onSubmitEvent} >
    
            <img
            className="website-logo"
            src="https://secureservercdn.net/160.153.137.91/nhd.f13.myftpupload.com/wp-content/uploads/2022/06/logo-1-14.svg?time=1665549221"
            alt="website logo"
            />
    
            <h1 className="heading">{isMember ? "SIGN-IN" : "REGISTER"}</h1>
    
    
    
            {!isMember && (
    
                <>
    
            <div className="first_last">
            <div className="label-container">
            <label htmlFor='password' className="label_form">First-Name </label> <br/>
            <input type="text" name="firstname" 
            value={firstName}
            onChange={onChangeFirstNameEvent} 
            onBlur={onBlurFirstFunction} 
            />
            
            {firstError ? <p className="error-message">***Please provide valid First-Name</p> : "" }
            </div>
    
            <div className="label-container">
            <label htmlFor='password' className="label_form">Last-Name </label> <br/>
            <input type="text" name="lastname" 
            value={lastName}
            onChange={onChangeLastNameEvent} 
            onBlur={onBlurLastFunction} 
            />
            {lastError ? <p className="error-message">***Please provide valid Last-Name</p> : ""}

            </div>
            </div>
    
            </>
                
                )}
    
            <div className="label-container">
            <label htmlFor='password' className="label_form">email </label> <br/>
            <input type="text" name="email" 
            placeholder="username                              @gmail.com"
            value={email}
            onChange={onChangeEmailEvent}
            onBlur={onBlurEmailFunction} 
            />
            {emailError ? <p className="error-message">***Please provide valid Email-Address</p> : " "} 
            </div>
            <div className="label-container">
            <label htmlFor='password' className="label_form">Password </label> <br/>
            <input type="password" name="password" 
            value={password}
            onChange={onChangePasswordEvent} 
            onBlur={onBlurPasswordFunction} 
            />
            {passwordError ? <p className="error-message">***Please provide valid Password</p> : ""}
            
            
            </div>
            
            <button className="login_button" type="submit">Sign-In</button>
    
            
    
            <div className="member_container">
    
            <h4>{isMember ? "Not a member at" : "Already a member"}</h4>
            <button onClick={toggleMember} className="member_button" >{isMember ? "Register" : "Sign-In"}</button>
            
            </div>
           
            
            </form>
    
            <hr/>
            </div>
          
        </>
    )
}

export default LoginPage