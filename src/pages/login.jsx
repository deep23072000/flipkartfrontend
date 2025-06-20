import { useNavigate } from "react-router-dom";
import "../assets/login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const regnav = useNavigate();
  const [mobile, setMobile] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:3000/login", { mobile });

      if (res.data.success) {
        // Save mobile in localStorage to use it in OTP verification
        localStorage.setItem("mobile", mobile);
        regnav("/otp"); // redirect to OTP input page
      } else {
        alert(res.data.message || "Mobile number not registered.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending OTP. Please try again.");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="login-left">
            <h2>Login</h2>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </div>

          <div className="login-right">
            <form onSubmit={handleLogin}>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Mobile number"
                required
              />

              <p className="terms">
                By continuing, you agree to Flipkart's{" "}
                <a href="#">Terms of Use</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>
              <button type="submit" className="btn-login">
                Request OTP
              </button>
              <p className="or">OR</p>
              <button
                type="button"
                className="btn-register"
                onClick={() => regnav("/registration")}
              >
                New to Flipkart? Create an account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
