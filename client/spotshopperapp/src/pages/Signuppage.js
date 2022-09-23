import logo from '../spot-logo.png';
import Form from "../components/forms/Form"
import {routes} from "../api/utils"
import {useNavigate } from "react-router-dom"
import './Signuppage.css';

function Signuppage() {
  const navigate=useNavigate()
  const inputs = [
    {
   id:0,
      name:"Username",
      type:"text",
      placeholder:"Username...",
      // errorMessage:"Email Address...",
      // label:"Username"
    },
    {
   id:1,
      name:"Email",
      type:"text",
      placeholder:"Email Address...",
      // errorMessage:"Email Address...",
      // label:"Email"
    },
    {
   id:2,
      name:"Password",
      type:"password",
      placeholder:"Password...",
      // errorMessage:"Email Address...",
      // label:"Password"
    }, 
    {
   id:3,
      name:"ConfirmPassword",
      type:"password",
      placeholder:"Confirm Password...",
      // errorMessage:"Email Address...",
      // label:"Confirm Password"
    }
  ]

  const handleValidation=({values,setValues,setError})=>{
    // Run before request is made
    let isValid=true;
    // todo validate email
    if(values.Password!==values.ConfirmPassword){
      setError({name:"ConfirmPassword",errorMessage:"Passwords do not match"})
      isValid=false
    }
    return isValid;
  }
  const handleData = ({setLoading,apiData:{registered,errorMessage}}) => {
    // returns data from api
    registered?navigate("/signin"):setLoading(false)
   };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div><h1 id="signuptext">SIGN UP</h1></div>
      <div className="signupformcontainer">
      <Form method="POST" action={routes.register} handleData={handleData} inputs={inputs} handleValidation={handleValidation}/>
      </div>
        <div id="alreadyuser"><p>Already a User?</p></div>
        {/* <link to='/Signinpage' id="signinlink">SIGN IN</link> */}
      </header>
    </div>
  );
}

export default Signuppage
