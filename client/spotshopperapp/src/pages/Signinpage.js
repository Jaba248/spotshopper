import logo from '../spot-logo.png';
import Form from "../components/forms/Form"
import {routes} from "../api/utils"
import './Signinpage.css'
import {useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"
function Signinpage() {
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
   id:2,
      name:"Password",
      type:"password",
      placeholder:"Password...",
      // errorMessage:"Email Address...",
      // label:"Password"
    }, 
  ]
  


  const handleData = ({setLoading,apiData:{user,token}}) => {
   // returns data from api
   //todo store token
   if(token){
    navigate("/")
   }
   else{
    setLoading(false)
   }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div><h1 id="signuptext">SIGN IN</h1></div>
      <div className="signupformcontainer">
      <Form method="POST" action={routes.login} handleData={handleData} inputs={inputs}/>
      </div>
        <Link to="/signup" id="backtosignup">Back to Sign Up</Link>
      </header>
    </div>
  );
}

export default Signinpage
