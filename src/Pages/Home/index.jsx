import React, {useEffect, useState} from "react";
import {useLoad} from "../../context";
import ApiServices from "../../services/apiServices";
import BG from "../../assets/video/bgVideo.mp4";
import "./index.css";
export default function Home() {
  const {load, setLoad} = useLoad();

  async function fnCarregarSaldo() {
    var init = {
      token: "",
      mes: "",
      ano: "",
    };
    try {
      setLoad(true);
      let response = await ApiServices.apiPost("vitrineorder/saldo", init);
    } catch (err) {
      console.error("err", err);
    } finally {
      setLoad(false);
    }
  }

  function myFunction() {
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("myBtn");

    if (video.paused) {
      video.play();
      btn.textContent = "Pause";
    } else {
      video.pause();
      btn.textContent = "Play";
    }
  }

  return (
    <>
      <div className="divVideo">
        <video autoPlay muted loop id="myVideo">
          <source src={BG} type="video/mp4" /> 
        </video>

        <div className="content">
          <h1>SEJA BEM VINDO!</h1>
          <p>
            Bem-vindo ao nosso site, no momento está em construção! Estamos trabalhando duro para
            trazer a você uma experiência online incrível. Em breve, você poderá navegar pelo nosso
            site e conhecer todos os nossos produtos e serviços. Aguarde um pouco mais e em breve
            estaremos de volta! Obrigado pela sua paciência.
          </p>
          <button id="myBtn" onClick={myFunction}>
            Pause
          </button>
        </div>
      </div>
    </>
  );
}
