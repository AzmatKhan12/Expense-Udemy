import { useState,useRef ,useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../Store/Auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading]=useState(false);
  const [isCnfPassword,setCnfPassword]= useState(false);
  const [isForgetPassword,setForgetPassword]= useState(true);
  const [isHide,setHide] =useState(false)
  const authCtx = useContext(AuthContext);
  const emailInputRef= useRef();
  const passwordInputRef=useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setCnfPassword((prevState) => !prevState);
    // setForgetPassword((prevState)=>! prevState);
  };

  const forgetPasswordHandler = () => {
    setForgetPassword((prevState) => !prevState);
    setHide((prevState)=> !prevState);
  };
   
  

  const submitHandler = (event)=>{
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    
    setLoading(true);
    
    let url;
    if(isLogin){
      url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXji1ddbboAkkLZmjuj16NFATSWk4uHz0";
    }
    else{
      url ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXji1ddbboAkkLZmjuj16NFATSWk4uHz0";
     
    }
   fetch(
        url,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        setLoading(false)
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication Failed! ";

            if (data && data.error && data.error.message){
              errorMessage = data.error.message
            }
            throw new Error(errorMessage)
           
          });
        }
      }).then(data=>{
         authCtx.login(data.idToken); // set the token for login
         history.replace('/')
      })
        .catch(err=>{
          alert(err.message);
        });
  }

  async function resetPasswordRequest (event){
     
    event.preventDefault();
     const enteredEmail = emailInputRef.current.value;
      try{
         const response = await fetch(
           "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCXji1ddbboAkkLZmjuj16NFATSWk4uHz0",
           {
             method: "POST",
             body: JSON.stringify({
               requestType: "PASSWORD_RESET",
               email: enteredEmail,
             }),
             headers: {
               "Content-type": "application/json",
             },
           }
         );
          if (!response.ok) {
            throw new Error(`something went wrong`);
          }
         const data = await response.json()
         console.log (data);
      }
      catch(error){
        console.log(error)
      } 
      alert('Request sent to your E-mail')
      
  }
   

  return (
    <section className={classes.auth}>
      {!isHide && <h1>{isLogin ? "Login" : "Sign Up"}</h1>}
      <h1 style={{ fontSize: "15px" }}>
        {isForgetPassword ? "" : "Enter the email which you have registered"}
      </h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          {isForgetPassword && <label htmlFor="password">Your Password</label>}
          {isForgetPassword && (
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          )}
        </div>
        <div className={classes.control}>
          {isCnfPassword && <label htmlFor="password">Confirm Password</label>}

          {isCnfPassword && (
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          )}
        </div>
        <div className={classes.actions}>
         
          {isForgetPassword && (
            <button
              onClick={forgetPasswordHandler}
              type="button"
              className={classes.toggle}
            >
              Forget Password
            </button>
          )}
          {!isLoading && !isHide && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isHide && <button onClick={resetPasswordRequest}>Send Link</button>}

          {isLoading && <p>Sending request..</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin
              ? " Don't have an account? Sin up"
              : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
