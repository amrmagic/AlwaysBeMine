import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";

import MouseStealing from "./MouseStealer.jsx";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const audioRef = useRef(null);

  // صور رومانسية جاهزة عبر روابط مباشرة
  const yesGifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY5dnM3b3dqYWFqd2ZxcTNhOWp2OGVwNDdkOWd3ZnVsYWhmZ3F6OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L3X9GvEGEYBSRlq43Y/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjRsczJseHlycnpxNmVraHR5cnRqdThjczl2NGVvMTh4aWZqZHAxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26hpKMT7M4SOT5lQc/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJhYWZubDF2cXQ3bmlzbnNmc241b3F1Zmt5czV2OWQzaWZtazJldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKoWXm3okO1kgHC/giphy.gif"
  ];

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
      imageUrl: yesGifs[0],
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Love",
      confirmButtonText: "كل حبي لكِ ✨",
      confirmButtonColor: "#ff4b2b",
    });
  };

  const handleNoHover = () => {
    setCurrentGifIndex((prevIndex) => (prevIndex + 1) % yesGifs.length);
  };

  return (
    <div className="main-container dir-rtl">
      {/* مشغل الصوت */}
      <audio ref={audioRef} loop src="/music.mp3" />

      <button className="music-toggle" onClick={togglePlay}>
        {isPlaying ? <BsVolumeUpFill /> : <BsVolumeMuteFill />}
      </button>

      <div className="content-card">
        <img src={yesGifs[currentGifIndex]} alt="Love GIF" className="main-gif" style={{ maxWidth: "250px", borderRadius: "15px" }} />

        <h1 className="title-text">أنا بحبك ومقدرش أعيش من غيرك لحظة ❤️</h1>
        
        <p className="description-text">
          حياتي من غيرك عذاب، ومستعد أعمل أي حاجة ترضيكي في الدنيا..
          <br />
          نفتح صفحة جديدة مع بعض؟ 🌹
        </p>

        <div className="buttons-group">
          <button className="btn-yes" onClick={handleYesClick}>
            موافقة ونفتح صفحة جديدة 🥰
          </button>

          <MouseStealing onHover={handleNoHover}>
            <button className="btn-no">مش موافقة 💔</button>
          </MouseStealing>
        </div>
      </div>
    </div>
  );
}
