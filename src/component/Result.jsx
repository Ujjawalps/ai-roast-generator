import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateRoast } from "../generateRoast";
import Lottie from "lottie-react";
import avatarAnimation from "../assets/avatar.json";
import '../App.css';
import { motion } from "framer-motion";
// const COHERE_API_KEY=import.meta.env.VITE_API_KEY;




export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const roastRef = useRef(null);
  const userData = location.state || {};
  const [roast, setRoast] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch roast when component mounts
  useEffect(() => {
    let cancelled = false;

    console.log("User Data:", userData); // Log user data for debugging

    const fetchRoast = async () => {
      try {
        const roast = await generateRoast(userData);
        if (!cancelled) {
          setRoast(roast);
          
          setLoading(false);
          // console.log(COHERE_API_KEY)
          console.log("Roast:", roast); // Log roast for debugging
          new Audio("/burn.wav").play();
          setTimeout(() => {
            roastRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      } catch (error) {
        if (!cancelled) console.error("Roast failed:", error);
        setLoading(false);
      }
    };

    fetchRoast();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleRetry = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      {/* Avatar Animation */}
      <div className="w-64 mb-4 select-none pointer-events-none">
        <Lottie animationData={avatarAnimation} loop autoplay />
      </div>

      {/* Loading or Roast */}
      {loading ? (
        <div className="text-lg animate-pulse mt-4">Summoning the flames... 🔥</div>
      ) : (
        <div
          ref={roastRef}
          className="bg-gray-900 rounded-2xl p-6 shadow-2xl max-w-3xl text-center border border-gray-700 animate-fadeIn"
        >
          <h2 className="text-2xl font-bold mb-4 text-red-500">Here’s your Roast 😈</h2>
          <motion.p
            className="glitch text-lg leading-8 mt-4"
            data-text={roast}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {roast}
          </motion.p>



         
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <button
              onClick={handleRetry}
              className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold border border-white hover:bg-white hover:text-black transition cursor-pointer"
            >
              Roast Another Victim 🔁
            </button>

            <button
              onClick={() => navigator.clipboard.writeText(roast)}
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 hover:text-gray-300 transition cursor-pointer"
            >
              Copy Roast 🔗
            </button>
          </div>


        </div>
      )}
    </div>
  );
}
