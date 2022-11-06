import { useState } from 'react';
//import {Redirect} from 'react-router-dom'

import './index.css'







const Login = () => {

    const [regSuccess, setRegSuccess] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isMember, setIsMember] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [firstError, setFirstError] = useState(false);
    const [lastError, setLastError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);


    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("");

    const [showSubmitError, setShowSubmitError] = useState(false)


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

    // return empty Values..................///////////////////////.............////////
    const isFirstName = () => {
        return firstName !== ''
      }
      const isLastName = () => {
        return lastName !== ''
      }
      const isEmailName = () => {
        return email !== ''
      }
      const isPasswordName = () => {
        return password !== ''
      }

    // Blur Functions ...................../////////////............/////////////
    const onBlurFirstFunction = () => {
        const firstName = isFirstName()
        setFirstError(!firstName)
    }
    const onBlurLastFunction = () => {
        const lastName = isLastName()
        setLastError(!lastName)
    }
    const onBlurEmailFunction = () => {
        const emailName = isEmailName()
        setEmailError(!emailName)
    }
    const onBlurPasswordFunction = () => {
        const passwordName = isPasswordName()
        setPasswordError(!passwordName)
    }


    
    
    const onLoginChangeEmailEvent = (event) => {
        setLoginEmail(event.target.value);
    }
    const onLoginChangePasswordEvent = (event) => {
        setLoginPassword(event.target.value)  

    }

    const onSubmitEvent = (event) => {
        event.preventDefault();
        //console.log(email);
        //console.log(password);
        

        const firstName = isFirstName();
        const lastName  = isLastName();
        const emailName = isEmailName();
        const passwordName = isPasswordName();

        if (firstName && lastName && emailName && passwordName ) {
            setRegSuccess(!regSuccess)
            localStorage.setItem('Username', JSON.stringify(email))
            localStorage.setItem('password', JSON.stringify(password))   
        } else {
            alert("Please fill the MANDATORY Fields")
        }  
    }



    const onSubmitSuccess = () => {
        // const {history} = this.props
    
        // history.replace('/')
      }
    
    const onSubmitFailure = () => {
        setShowSubmitError(!showSubmitError)
      }

    




    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Success")

    const LocalUsername = localStorage.getItem('Username')
    const LocalPassword = localStorage.getItem('password')
    const validUsername = JSON.parse(LocalUsername)
    const validPassword = JSON.parse(LocalPassword)

    if (
      loginEmail === validUsername && loginPassword === validPassword && loginEmail !== '' ) {
      console.log("Success")
      onSubmitSuccess()
    } else {
      console.log("Failure")
      onSubmitFailure()
    }
  }

    // const onLoginForm = () => {
    //   console.log("is_login_success")
    // }
    

    return (

        <>
        {regSuccess ? 
        <> 
        <div className="container">
            <div className="form"  >
    
            <img
            className="website-logo"
            src="https://secureservercdn.net/160.153.137.91/nhd.f13.myftpupload.com/wp-content/uploads/2022/06/logo-1-14.svg?time=1665549221"
            alt="website logo"
            />

            {!isMember ? (

                <form onSubmit={onSubmitHandler}>
    
                <h1 className="heading">{isMember ? "SIGN-IN" : "REGISTER"}</h1>
        
                <div className="label-container">
                <label htmlFor='password' className="label_form">email </label> <br/>
                <input type="text" name="email" 
                placeholder="username                              @gmail.com"
                value={loginEmail}
                onChange={onLoginChangeEmailEvent}
                />
                </div>
    
                <div className="label-container">
                <label htmlFor='password' className="label_form">Password </label> <br/>
                <input type="password" name="password" 
                value={loginPassword}
                onChange={onLoginChangePasswordEvent} 
                />
                </div>
    
                
                <button className="login_button" type="submit">Sign-In</button>
                {showSubmitError && (
                    <p className="error-message">Invalid username and password</p>
                  )}
                </form>

             ) : (

                <form onSubmit={onSubmitEvent}>
    
                <h1 className="heading">{isMember ? "SIGN-IN" : "REGISTER"}</h1>
        
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
                </form>


             )}
    
            
    
            <div className="member_container">
    
            <h4>{isMember ? "Not a member at" : "Already a member"}</h4>
            <button onClick={toggleMember} className="member_button" >{isMember ? "Register" : "Sign-In"}</button>
            
            </div>
           
            
            </div>
    
            <hr/>
            </div>
        </>
         : 
        <>
        <div className="reg_success">

        <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button onClick={() => {
        window.location.href = 'details.html';
      }}> login </button>
        
        </div>
        
        </>
        }
        
        </>

    )
}

export default Login