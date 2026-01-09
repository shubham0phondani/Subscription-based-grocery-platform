import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import Hero from "../components/Hero";

const SignUp = () => {
    const { signup } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleIt = () => {
        if (!name || !password) {
            alert("please enter all fields");
            return;
        }

        const success = signup(name, password)

        if (!success) {
            alert("user already exists")
        } else {
            navigate("/pricing")
        }
    }

    return (

        <div className="flex flex-row items-center">
            <Hero/>
            <div className="w-200 h-screen flex flex-col items-center">
                <AuthHeader />
                <div className="h-100 w-100 border-2 flex flex-col items-center">
                    <label htmlFor="">Username</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" className="border-2 w-60" />
                    <label htmlFor="">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" className="border-2 w-60" />
                    <button
                        onClick={handleIt}
                        className="border-2">
                        SignUp
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SignUp;