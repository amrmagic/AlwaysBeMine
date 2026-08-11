import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";

import MouseStealing from "./MouseStealer.jsx";

export default function App() {
  // 🔒 كلمة السر المطلوب إدخالها
  const CORRECT_PASSWORD = "love"; 

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const audioRef = useRef(null);

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
      setPasswordError("كلمة السر غير صحيحة! جربي اكتب كلمة love 😉");
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

  const handleYesClick = () => {
    Swal.fire({
      title: "أحبك من كل قلبي! ❤️",
      text: "أعدك ببدء صفحة جديدة مليئة بالأمل والسعادة معاً.",
      imageUrl: photos[0],
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Love",
      confirmButtonText: "كل حبي لكِ ✨",
      confirmButtonColor: "#ff4b2b",
    });
  };

  const handleNoHover = () => {
    setCurrentGifIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // 🔒 شاشة القفل بكلمة السر
  if (!isAuthenticated) {
    return (
      <div className="main-container dir-rtl" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" }}>
        <div style={{ background: "#fff", padding: "30px", borderRadius: "20px", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", maxWidth: "350px", width: "90%" }}>
          <div style={{ fontSize: "50px", marginBottom: "10px" }}>🔐</div>
          <h2 style={{ color: "#ff4b2b", marginBottom: "15px", fontSize: "20px" }}>أدخلي كلمة السر لتفتحي المفاجأة ❤️</h2>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              placeholder="اكتبي love 🔑"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #ccc", marginBottom: "10px", textAlign: "center", fontSize: "16px", outline: "none" }}
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

  // 💖 شاشة الرسالة والسطور وتحت كل سطر صورة
  return (
    <div className="main-container dir-rtl" style={{ padding: "20px 10px" }}>
      {/* مشغل الصوت */}
      <audio ref={audioRef} loop src="/music.mp3" />

      <button className="music-toggle" onClick={togglePlay}>
        {isPlaying ? <BsVolumeUpFill /> : <BsVolumeMuteFill />}
      </button>

      <div className="content-card" style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", padding: "20px", borderRadius: "20px", textAlign: "center" }}>
        
        {/* السطر الأول والصورة الأولى */}
        <h2 style={{ color: "#ff4b2b", fontSize: "20px", marginTop: "10px" }}>أنا بحبك ومقدرش أعيش من غيرك لحظة ❤️</h2>
        <img src={photos[0]} alt="Memory 1" style={{ width: "100%", maxHeight: "250px", objectFit: "cover", borderRadius: "15px", margin: "10px 0 20px 0" }} />

        {/* السطر الثاني والصورة الثانية */}
        <p style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}>حياتي من غيرك عذاب وشوق ما ينتهي 💔</p>
        <img src={photos[1]} alt="Memory 2" style={{ width: "100%", maxHeight: "250px", objectFit: "cover", borderRadius: "15px", margin: "10px 0 20px 0" }} />

        {/* السطر الثالث والصورة الثالثة */}
        <p style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}>ومستعد أعمل أي حاجة في الدنيا علشان ترضي عني 🌹</p>
        <img src={photos[2]} alt="Memory 3" style={{ width: "100%", maxHeight: "250px", objectFit: "cover", borderRadius: "15px", margin: "10px 0 20px 0" }} />

        {/* السطر الرابع والصورة الرابعة */}
        <p style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}>كل ذكرياتنا الجميلة بتفكرني أقد إيه أنتِ غالية عندي ✨</p>
        <img src={photos[3]} alt="Memory 4" style={{ width: "100%", maxHeight: "250px", objectFit: "cover", borderRadius: "15px", margin: "10px 0 20px 0" }} />

        {/* باقي الصور في المعرض */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "15px 0" }}>
          <img src={photos[4]} alt="Memory 5" style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "10px" }} />
          <img src={photos[5]} alt="Memory 6" style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "10px" }} />
          <img src={photos[6]} alt="Memory 7" style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "10px" }} />
          <img src={photos[7]} alt="Memory 8" style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "10px" }} />
        </div>

        <h3 style={{ color: "#ff4b2b", margin: "20px 0 10px 0" }}>نفتح صفحة جديدة مع بعض؟ 🕊️</h3>

        {/* أزرار الإجابة */}
        <div className="buttons-group" style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
          <button className="btn-yes" onClick={handleYesClick} style={{ padding: "10px 20px", borderRadius: "10px", border: "none", background: "#28a745", color: "#fff", fontWeight: "bold", cursor: "pointer" }}>
            موافقة ونفتح صفحة جديدة 🥰
          </button>

          <MouseStealing onHover={handleNoHover}>
            <button className="btn-no" style={{ padding: "10px 20px", borderRadius: "10px", border: "none", background: "#dc3545", color: "#fff", fontWeight: "bold", cursor: "pointer" }}>
              مش موافقة 💔
            </button>
          </MouseStealing>
        </div>

      </div>
    </div>
  );
}
