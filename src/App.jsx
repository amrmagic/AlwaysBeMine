import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";

export default function App() {
  // 🔒 كلمة السر المطلوب إدخالها
  const CORRECT_PASSWORD = "love"; 

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 🎯 موقع زرار "مش موافقة" للهروب
  const [noBtnPosition, setNoBtnPosition] = useState({ top: "auto", left: "auto", position: "static" });

  // 📸 روابط الصور المباشرة المرفوعة على ImgBB
  const photos = [
    "https://i.ibb.co/6JfdPKHw/image.jpg",
    "https://i.ibb.co/rf7yFq28/image.jpg",
    "https://i.ibb.co/6RYkh9Vr/image.jpg",
    "https://i.ibb.co/TMK601TN/image.jpg",
    "https://i.ibb.co/F47cPVp4/image.jpg",
    "https://i.ibb.co/5gQc3tW5/image.jpg",
    "https://i.ibb.co/zTQtPQNw/image.jpg",
    "https://i.ibb.co/Kcp3CRSC/image.jpg",
  ];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput.trim().toLowerCase() === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError("");
    } else {
      setPasswordError("كلمة السر غير صحيحة! جربي اكتبي كلمة love 😉");
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 🎉 عند الضغط على زر "موافقة"
  const handleYesClick = () => {
    Swal.fire({
      title: "<span style='font-size: 30px; color: #ff4b2b;'>هييييييييه وبحبك ❤️</span>",
      html: "<div style='font-size: 70px; margin: 10px 0;'>❤️</div><p style='font-size: 18px; color: #333;'>أحلى وأجمل صفحة جديدة في حياتنا مع بعض 🥰</p>",
      confirmButtonText: "كل حبي لك ❤️",
      confirmButtonColor: "#ff4b2b",
    });
  };

  // 🥺 عند الضغط على زر "مش موافقة"
  const handleNoClick = () => {
    Swal.fire({
      title: "هحاول تاني وتالت لحد ما أكسَب قلبك 🥺",
      text: "مش هيأس أبداً! 💔",
      imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnRmcWVsOTR6dmxndW53cTdzbWJ1NDFjc2RwNzUxeTlxaTBpdmsyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L9523421HC6J2/giphy.gif",
      imageWidth: 180,
      imageHeight: 180,
      imageAlt: "Sad Emoji",
      confirmButtonText: "اديني فرصة تانية 🌹",
      confirmButtonColor: "#dc3545",
    });
  };

  // 🏃‍♂️ دالة جعل الزرار يهرب بعيداً عشوائياً عند تحريك الماوس أو اللمس
  const moveNoButton = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 120));
    const y = Math.floor(Math.random() * (window.innerHeight - 60));
    setNoBtnPosition({
      position: "fixed",
      left: `${x}px`,
      top: `${y}px`,
      zIndex: 9999
    });
  };

  // 🔒 شاشة القفل بكلمة السر
  if (!isAuthenticated) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", padding: "20px" }}>
        <div style={{ background: "#fff", padding: "30px", borderRadius: "20px", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", maxWidth: "350px", width: "100%" }}>
          <div style={{ fontSize: "50px", marginBottom: "10px" }}>🔐</div>
          <h2 style={{ color: "#ff4b2b", marginBottom: "15px", fontSize: "20px" }}>أدخلي كلمة السر لتفتحي المفاجأة ❤️</h2>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              placeholder="اكتبي love 🔑"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #ccc", marginBottom: "10px", textAlign: "center", fontSize: "16px", outline: "none", boxSizing: "border-box" }}
            />
            {passwordError && <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>{passwordError}</p>}
            <button
              type="submit"
              style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "none", background: "#ff4b2b", color: "#fff", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}
            >
              افتحي المفاجأة ✨
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 💖 شاشة الرسالة والصور (محتوى مرن ينزل لآخر الصفحة)
  return (
    <div style={{ width: "100%", backgroundColor: "#fff5f5", padding: "20px 10px 100px 10px", boxSizing: "border-box", minHeight: "100vh" }}>
      
      {/* مشغل الصوت */}
      <audio ref={audioRef} loop src="/music.mp3" />

      <button onClick={togglePlay} style={{ position: "fixed", top: "15px", right: "15px", zIndex: 1000, background: "#fff", border: "none", borderRadius: "50%", padding: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", cursor: "pointer" }}>
        {isPlaying ? <BsVolumeUpFill size={22} color="#ff4b2b" /> : <BsVolumeMuteFill size={22} color="#ff4b2b" />}
      </button>

      <div style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", padding: "20px", borderRadius: "20px", textAlign: "center", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        
        {/* السطر الأول والصورة الأولى */}
        <h2 style={{ color: "#ff4b2b", fontSize: "18px", marginTop: "10px" }}>أنا بحبك ومقدرش أعيش من غيرك لحظة ❤️</h2>
        <img src={photos[0]} alt="Memory 1" style={{ width: "100%", borderRadius: "15px", margin: "10px 0 20px 0", display: "block" }} />

        {/* السطر الثاني والصورة الثانية */}
        <p style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}>حياتي من غيرك عذاب وشوق ما ينتهي 💔</p>
        <img src={photos[1]} alt="Memory 2" style={{ width: "100%", borderRadius: "15px", margin: "10px 0 20px 0", display: "block" }} />

        {/* السطر الثالث والصورة الثالثة */}
        <p style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}>ومستعد أعمل أي حاجة في الدنيا علشان ترضي عني 🌹</p>
        <img src={photos[2]} alt="Memory 3" style={{ width: "100%", borderRadius: "15px", margin: "10px 0 20px 0", display: "block" }} />

        {/* السطر الرابع والصورة الرابعة */}
        <p style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}>كل ذكرياتنا الجميلة بتفكرني قد إيه أنتِ غالية عندي ✨</p>
        <img src={photos[3]} alt="Memory 4" style={{ width: "100%", borderRadius: "15px", margin: "10px 0 20px 0", display: "block" }} />

        {/* باقي الصور في شبكة (Grid) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "20px 0" }}>
          {photos.slice(4).map((imgUrl, idx) => (
            <img key={idx} src={imgUrl} alt={`Memory ${idx + 5}`} style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "10px" }} />
          ))}
        </div>

        <h3 style={{ color: "#ff4b2b", margin: "25px 0 15px 0" }}>نفتح صفحة جديدة مع بعض؟ 🕊️</h3>

        {/* أزرار الإجابة */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px", minHeight: "60px", position: "relative" }}>
          <button onClick={handleYesClick} style={{ padding: "12px 20px", borderRadius: "10px", border: "none", background: "#28a745", color: "#fff", fontWeight: "bold", fontSize: "15px", cursor: "pointer" }}>
            موافقة ونفتح صفحة جديدة 🥰
          </button>

          <button 
            onMouseEnter={moveNoButton} 
            onTouchStart={moveNoButton} 
            onClick={handleNoClick}
            style={{ 
              padding: "12px 20px", 
              borderRadius: "10px", 
              border: "none", 
              background: "#dc3545", 
              color: "#fff", 
              fontWeight: "bold", 
              fontSize: "15px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              ...noBtnPosition 
            }}
          >
            مش موافقة 💔
          </button>
        </div>

      </div>
    </div>
  );
}
