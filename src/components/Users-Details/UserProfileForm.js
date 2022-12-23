import React, { Fragment ,useRef,useContext,useEffect, useCallback} from "react";
import { Button,Card } from "react-bootstrap";
import HeaderPage from "./HeaderPage";
import { GoMarkGithub } from "react-icons/go";
import { HiGlobeAlt } from "react-icons/hi";
import AuthContext from "../Store/Auth-context";

const UserProfileForm = (props)=>{
   const authCtx = useContext(AuthContext); 
   const inputUserName =useRef(); 
   const inputUserUrl = useRef();
   const getDataFromServer = useCallback( async ()=>{
     try {
          const response = fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCXji1ddbboAkkLZmjuj16NFATSWk4uHz0",
            {
              method: "POST",
              body: JSON.stringify({
                idToken: authCtx.token,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if(!response.ok){
            throw new Error(`something went wrong`)
          }
          const data = await response.json();
          console.log(data); 
        } 
        catch (error) {
          // console.log(error)
        }
      
   },[])

     const UserData =useEffect(() => {
      getDataFromServer();
      
    },[getDataFromServer]);
      
    
   
   
   async function  submitHandler (event){
     event.preventDefault();
        const EnteredUserName = inputUserName.current.value;
        const EnteredUserUrl = inputUserUrl.current.value;

        const EnteredValues = {
          name: EnteredUserName,
          url: EnteredUserUrl,
        };
        // console.log(EnteredValues);
      
       try{
         const response = await fetch(
           "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCXji1ddbboAkkLZmjuj16NFATSWk4uHz0",
           {
             method: "POST",
             body: JSON.stringify({
               idToken: authCtx.token,
               displayName: EnteredUserName,
               photoUrl: EnteredUserUrl,
              //  deleteAttribute: EnteredUserUrl,

               returnSecureToken: true,
             }),
             headers: {
               "Content-Type": "application/json",
             },
           }
         ); 
          const data = await response.json();
          console.log(data);      
        }
        catch (error){
        
       }
   }
    

      async function  verifyMailHandler (){
       try {
            const response = await fetch(
              "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCXji1ddbboAkkLZmjuj16NFATSWk4uHz0",
              {
                method: "POST",
                body: JSON.stringify({
                  idToken: authCtx.token,
                  requestType: "VERIFY_EMAIL",
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await response.json();
            console.log(data); 
        }
         catch (error) {
          console.log(error)
        }   
        
     }
    return (
      <Fragment>
        <header>
          <HeaderPage
            heading={"Winner never quit,Quitters never win "}
            title={`Your profile is 64% is Completed.
               A complete profile 
               has higher chances of landing of job.`}
            link={"#form"}
            linkTitle={"Complete Now"}
          />
        </header>
        <Card style={{ width: "70rem" }}>
          <main>
            <form onSubmit={submitHandler}>
              <span>
                <h3 className="space">Contact Details</h3>
              </span>

              <span>
                <label className="space" htmlFor="text">
                  <GoMarkGithub />
                  Full Name
                </label>
                <input type="text" id="text" ref={inputUserName} />
                <label className="space" htmlFor="url">
                  <HiGlobeAlt />
                  Profile Photo URL
                </label>
                <input type="url" id="url" ref={inputUserUrl} />
                <Button className="btn-btn" variant="danger" onClick={props.hide}>
                  Cancel
                </Button>
              </span>
              <br />
              <div>
                <Button
                  className="space"
                  variant="success"
                  onClick={submitHandler}
                >
                  Update
                </Button>
              </div>
            </form>
            <div>
              <Button
                className="space"
                variant="success"
                onClick={verifyMailHandler}
              >
                Verify-Email
              </Button>
            </div>
          </main>
        </Card>
      </Fragment>
    );

}

export default UserProfileForm ;