import { useNavigate, useLocation} from "react-router-dom";
const AuthHeader = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const isSignupPage = location.pathname === "/signup";
    const buttonText = isSignupPage ? "Login" : "SignUp";

    const handleIt = ()=>{
            if(isSignupPage){
                navigate("/");
            }else{
                navigate("/signup");
            }
        }
    return (
        <div className="w-200 h-20 border-2 mb-30 flex items-center p-7 justify-end">
            <button
            onClick={handleIt} 
            className="w-20 border-2 p-2">
               {buttonText}
            </button>
        </div>
    )
}

export default AuthHeader;