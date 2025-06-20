// VerifyOTP.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const nav = useNavigate();
  const mobile = localStorage.getItem("mobile");

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/otp", {
        mobile,
        otpnum: otp
      });

      if (res.data.success) {
        alert("Login successful");
        nav("/"); // or wherever you want to redirect
      } else {
        alert(res.data.message || "Verification failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP");
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
      />
      <button type="submit">Verify OTP</button>
    </form>
  );
};

export default VerifyOTP;
