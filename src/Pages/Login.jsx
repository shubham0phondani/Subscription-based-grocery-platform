import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import Hero from "../components/Hero";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleIt = () => {
    if (!name || !password) {
      alert("please enter all fields");
      return;
    }

    const success = login(name, password);

    if (!success) {
      alert("user doesn't exist");
      setName("");
      setPassword("");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-row items-center min-h-screen bg-gray-100">
      <Hero />

      <div className="w-max h-screen flex flex-col items-center bg-white shadow-lg overflow-auto">
        <AuthHeader />

        <div className="h-100 w-100 mt-10 p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Log in to continue managing your groceries.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your username"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex justify-end">
              <Link
                to={"forgotpassword"}
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              onClick={handleIt}
              className="mt-2 bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-500 transition"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
