import { useNavigate, useLocation } from "react-router-dom";
const AuthHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isSignupPage = location.pathname === "/signup";
    const buttonText = isSignupPage ? "Login" : "SignUp";

    const handleIt = () => {
        if (isSignupPage) {
            navigate("/");
        } else {
            navigate("/signup");
        }
    }
    return (
        <div className="w-200 h-20 border-b-2 border-gray-400 mb-30 flex items-center p-7 justify-between ">
            <div className="text-lg font-medium text-gray-700">
                Grocrr
            </div>

            <button
                onClick={handleIt}
                className={`w-20 border-2 p-2 ${buttonText === "SignUp" ? `bg-red-700` : `bg-green-700`} text-blue-50 cursor-pointer rounded-md`}>
                {buttonText}
            </button>
        </div>
    )
}

export default AuthHeader;