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

    const success = signup(name, password);

    if (!success) {
      alert("user already exists");
    } else {
      navigate("/pricing");
    }
  };

  return (
    <div className="flex flex-row items-center min-h-screen bg-gray-100">
      <Hero />

      <div className="w-200 h-screen flex flex-col items-center bg-white shadow-lg overflow-auto">
        <AuthHeader />

        <div className="h-100 w-100 mt-10 p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Create your account
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Start your free grocery trial.
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
                placeholder="Choose a username"
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
                placeholder="Create a secure password"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              onClick={handleIt}
              className="mt-2 bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-500 transition"
            >
              Create Account
            </button>

            <p className="text-xs text-gray-400 text-center mt-2">
              No credit card required · 7-day free trial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
