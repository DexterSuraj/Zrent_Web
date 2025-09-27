import React, { useState } from "react";
import { Eye, EyeOff, User, Lock } from "lucide-react";

// Mock Link component (replace with react-router-dom Link in actual project)
const Link = ({ to, children, className, ...props }) => (
  <button
    onClick={() => console.log(`Navigate to: ${to}`)}
    className={className}
    {...props}
  >
    {children}
  </button>
);

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Signup successful:", formData);
      alert(`Welcome ${formData.username}! Signup successful.`);
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-300 via-purple-400 to-purple-600">
      {/* Signup Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-sm sm:max-w-md">
          {/* Signup Card */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-6 sm:p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Sign Up
              </h1>
              <p className="text-white/80 text-sm">
                Create your account to get started.
              </p>
            </div>

            {/* Signup Form */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                {/* Username Field */}
                <div className="space-y-0.5">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2.5 bg-white/10 border ${
                        errors.username
                          ? "border-red-400 focus:ring-red-400"
                          : "border-white/30 focus:ring-purple-400"
                      } rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm backdrop-blur-sm`}
                      placeholder="Username"
                    />
                  </div>
                  <p className="text-red-500 text-xs ml-1 min-h-[1rem]">
                    {errors.username || ""}
                  </p>
                </div>

                {/* Password Field */}
                <div className="space-y-0.5">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-10 py-2.5 bg-white/10 border ${
                        errors.password
                          ? "border-red-400 focus:ring-red-400"
                          : "border-white/30 focus:ring-purple-400"
                      } rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm backdrop-blur-sm`}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <p className="text-red-500 text-xs ml-1 min-h-[1rem]">
                    {errors.password || ""}
                  </p>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-0.5">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-10 py-2.5 bg-white/10 border ${
                        errors.confirmPassword
                          ? "border-red-400 focus:ring-red-400"
                          : "border-white/30 focus:ring-purple-400"
                      } rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm backdrop-blur-sm`}
                      placeholder="Confirm Password"
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60"
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <p className="text-red-500 text-xs ml-1 min-h-[1rem]">
                    {errors.confirmPassword || ""}
                  </p>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="
                        peer
                        w-4 h-4
                        appearance-none
                        border-2 border-white rounded-md
                        checked:bg-gradient-to-r checked:from-purple-600 checked:to-blue-600
                        transition-all duration-200
                      "
                    />
                    {/* white tick mark */}
                    <svg
                      className="pointer-events-none absolute w-3 h-3 text-white left-0.5 top-0.5 hidden peer-checked:block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </label>

                  <span className="text-white/80 text-sm">Remember Me</span>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-sm 
                hover:shadow-purple-800/50 hover:shadow-lg transition rounded-xl px-4 py-2 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] 
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    <span className="text-sm">Signing up...</span>
                  </>
                ) : (
                  <span className="text-sm">Sign Up</span>
                )}
              </button>

              {/* Already have an account link */}
              <p className="text-center text-white/70 text-sm mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-white font-semibold hover:underline transition-all duration-200"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
