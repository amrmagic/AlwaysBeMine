import React, { useState, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Swal from "sweetalert2";
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/react-icons";

import MouseStealing from "./MouseStealer.js";
import loveSvg from "./assets/All You Need Is Love.svg";
import LoveGif from "./assets/GifData/main_theme.gif";
import heartGif from "./assets/GifData/happy_cat.gif";
import sadGif from "./assets/GifData/sad.gif";
import WordMareque from "./MarqueeProposal.jsx";
import purposerose from "./assets/GifData/Rose_Main.gif";
import swalbg from "./assets/Lovingbg2_main.gif";
import loveu from "./assets/GifData/cutieSwal.gif";

import yesgif0 from "./assets/GifData/Yes/love.gif";
import yesgif1 from "./assets/GifData/Yes/love2.gif";
import yesgif2 from "./assets/GifData/Yes/love3.gif";
import yesgif3 from "./assets/GifData/Yes/love4.gif";
import yesgif4 from "./assets/GifData/Yes/love5.gif";
import yesgif5 from "./assets/GifData/Yes/love6.gif";
import yesgif6 from "./assets/GifData/Yes/love7.gif";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const audioRef = useRef(null);

  const yesGifs = [
    yesgif0,
    yesgif1,
    yesgif2,
    yesgif3,
    yesgif4,
    yesgif5,
    yesgif6,
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
      imageUrl: loveu,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      background: `#fff url(${swalbg})`,
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
        <img src={yesGifs[currentGifIndex]} alt="Love GIF" className="main-gif" />

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
