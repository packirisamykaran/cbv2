import React, { useEffect } from 'react'
import "./style/Home.css"
import cloud1 from "./Assets/3 CLOUD1.png"
import cloud2 from "./Assets/4 CLOUD2.png"
import title from "./Assets/5 _CRYPTOBENGZ_ TITLE.png"
import game from "./Assets/6 _ARE YOU GAME_.png";
import v from "./Assets/7 _V_.png"
import sun from "./Assets/2SUN.png";
import cloud1btm from "./Assets/3 CLOUD1btm.png"
import cloud2btm from "./Assets/4 CLOUD2btm.png"
import gp from "./Assets/8 GACHAPON VIDEO.mp4";
import { Link } from 'react-router-dom'
import Merchant from './Merchant'
import Join from './Join'
import { useState } from 'react'

export default function Home() {

    const [skipstyle, setskipstyle] = useState("hide");
    const [mintstyle, setmintstyle] = useState("mint");
    const [blankstyle, setblankstyle] = useState("hide");
    const [collectstyle, setcollectstyle] = useState("hide");




    function showSkipbtn() {
        setskipstyle("skip")
    }
    function hideSkipbtn() {
        setskipstyle("hide")
    }

    function showMintbtn() {
        setmintstyle("mint")
    }
    function hideMintbtn() {
        setmintstyle("hide")
    }


    function showBlank() {
        setblankstyle("blank");
    }
    function hideBlank() {
        setblankstyle("hide");
    }

    function showCollect() {
        setcollectstyle("collect");
    }

    function hideCollect() {
        setcollectstyle("hide");
    }


    function skiptoend() {
        const video = document.getElementById("gp");
        video.currentTime = video.duration;
    }

    const playGP = () => {
        const video = document.getElementById("gp");
        // if (video.paused == true) {
        //     video.play();
        // }
        // else {
        //     video.pause();
        // }
        video.play();
        hideMintbtn();
        showSkipbtn();
    }


    function onVidEnd() {
        hideSkipbtn()
        showCollect()
        showBlank()


    }

    function onCollect() {
        const video = document.getElementById("gp");
        video.currentTime = 0.3;
        showMintbtn()
        hideBlank();
        hideCollect();
    }


    // useEffect(() => {
    //     const video = document.getElementById("gp");
    //     video.currentTime = 0.1;
    //     console.log(video.currentTime)
    // }, [])


    try {
        const video = document.getElementById("gp");
        console.log(video.currentTime)
    } catch (error) {

    }
    // const partnerLogos = ["52 WEN MOON LOGO.png", "53 NBCB LOGO.jpg", "54 BENGWHOCOOKS LOGO.jpg", "55 MIRAGE LOGO.png", "56 LOS AMIGOS LOGO.jpg", "57 SG PUBCRAWL LOGO.png"]

    return (
        <div className="home">
            <div className="mintSection">
                <div className="bg">
                    <img src={cloud2} alt="" className='right' />
                    <img src={cloud1} alt="" className='left' />
                    <img src={cloud1} alt="" className='right' />
                    <img src={cloud2} alt="" className='left bottom' />
                    <img src={cloud2} alt="" className='right bottom' />
                    <img src={cloud1} alt="" className='left bottom' />
                </div>
                <div className="hero">
                    <img src={sun} alt="" className="sun" />
                    <img src={title} alt="" className="title" />
                    <img src={game} alt="" className="game" />
                    <img src={v} alt="" className="v" />
                    <img src={v} alt="" className="v" />
                    <p>Pixel by pixel, we celebrate everything Singaporean. The CryptoBengz collection is an NFT project that forever holds the beauty of the Lion City's diverse personalities on the blockchain.</p>
                    <br />
                    <p>U in a not, cb kia?</p>

                    <div className="video">
                        <img className={blankstyle} src={require("./Assets/blank.png")} alt="" />
                        <div className={collectstyle} onClick={onCollect}>Collect</div>
                        <video id='gp' className='gp' onEnded={onVidEnd} autoPlay={false} controls={false} preload='auto' playsInline>
                            <source src={gp + "#t=0.3"} type="video/mp4" />
                        </video>
                        {/* <div className={mintstyle} onClick={playGP}>mint now</div> */}
                        <div className={skipstyle} onClick={skiptoend}>SKIP ANIMATION</div>

                    </div>

                </div>
            </div>
            {/* <div className="left">
                <img src={cloud1} alt="" />
                <img src={cloud2} alt="" />
                <img src={cloud1} alt="" />
            </div>
            <div className="right">
                <img src={cloud2} alt="" />
                <img src={cloud1} alt="" />
                <img src={cloud2} alt="" />
            </div> */}


            <div className="collection_LB" >
                {/* <div className="bg">
                    <div className="left"><div className="container">CRYPTOBENGZ V2 CRYPTOBENGZ V2</div></div>
                    <div className="right"><div className="container">CRYPTOBENGZ V2 CRYPTOBENGZ V2</div></div>
                </div> */}
                <div className="collection">
                    <div className="heading">
                        THE COLLECTION
                    </div>
                    <div className="nfts">
                        <img src={require("./Assets/9 PIC1.png")} alt="" />
                        <img src={require("./Assets/10 PIC2.png")} alt="" />
                        <img src={require("./Assets/11 PIC3.jpg")} alt="" />
                        <img src={require("./Assets/12 PIC4.png")} alt="" />
                    </div>
                    <p>
                        A - ??? [error error] - supply of generative CryptoBengz Is here! Representing our little red dot. Cryptobengz GEN Z is the Grand Collection by Team Cryptobengz of this local brand. Our collection includes utility-enabled collectIbles that depict a variety of local Singaporean culture-inspired traits as seen through the team's eyes. Members of the Cryptobengz Genesis, Cryptobengz GEN Z and Cryptokakis will have access to exclusive airdrops, merchandise drops, merchant partnerships, and community events.
                        <br /><br />
                        A home to call your own. Where you can relive your Ahbeng lifestyle through us again and again.
                    </p>
                </div>

                <div className="LB">
                    <div className="heading">
                        LEGENDARY BENGZ
                    </div>
                    <div className="legends">
                        {[...Array(10).keys()].map((x, index) => {
                            return <img key={index + "img"} src={require(`./Assets/${x + 13} LEGENDARY${index + 1}.png`)} alt="" className="legend" />
                        })}
                    </div>
                    <p>10 legendary 1/1 Bengz are hiding in the collection. Will you be the lucky one? Wear a pair of red underwear and get minting!</p>
                </div>
            </div>



            <div className="loreLoot" id="about">
                <div className="heading"><span>&#183;</span>  <p>CRYPTOBENGZ LORE</p> <span>&#183;</span> </div>
                <div className="chatbox">
                    <img src={require("./Assets/Narrator.PNG")} alt="" className='nar1' />
                    <img src={require("./Assets/Narrator2.PNG")} alt="" className='nar2' />
                </div>
                <div className="heading"><span>&#183;</span> <p>CB KIA’S UNLOCKABLE LOOT</p> <span>&#183;</span> </div>

                <div className="perks">
                    <div className="perk">
                        <img src={require("./Assets/26 LETTER.png")} alt="" />
                        <p>EXCLUSIVE INVITES TO IRL EVENTS</p>
                    </div>
                    <div className="perk">
                        <img src={require("./Assets/27 TICKET.png")} alt="" />
                        <p>EXCLUSIVE PERKS, PROMOS AND ACCESS TO MANY <br /> MERCHANT PARTNERS</p>
                    </div>
                    <div className="perk">
                        <img src={require("./Assets/28 KEY.png")} alt="" />
                        <p>EARLY ACCESS TO FUTURE LAUNCHES</p>
                    </div>
                    <div className="perk">
                        <img src={require("./Assets/29 MERCH.png")} alt="" />
                        <p>MERCH DROPS AND MANY MORE!</p>
                    </div>
                </div>
                <img src={cloud2btm} alt="" className='cloud' />
            </div>

            <div className="roadmap" id="roadmap">
                <div className="bgclr"></div>
                <img className='map' src={require("./Assets/Roadmap.png")} alt="" />
                <img src={cloud1btm} alt="" className='cloud' />
            </div>

            <div className="team" id="team">
                <div className="heading">
                    THE TEAM
                </div>
                <div className="members">
                    <a href='https://twitter.com/CryptoBroski3' className="member" target="_blank" rel="noreferrer" style={{ color: "#C0D157" }}>
                        <img className='diamond' src={require("./Assets/42 GREEN GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/47 DENZEL.png")} alt="" />
                        <div className="cb ">CRYPTOBROSKI</div>
                        <div className="namerole">Denzel<br />Business Dev</div>
                    </a>
                    <a href='https://linktr.ee/roshaanth?utm_source=linktree_profile_share&ltsid=3f023b27-09cd-48af-b271-9040d605f202' className="member" target="_blank" rel="noreferrer" style={{ color: "#E88B3F" }}>
                        <img className='diamond' src={require("./Assets/43 ORANGE GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/48 ROSE.png")} alt="" />
                        <div className="cb">CRYPTOTHAMBI</div>
                        <div className="namerole">Rose<br />Marketing, PR</div>
                    </a>
                    <a href='https://linktr.ee/freyatan' className="member" target="_blank" rel="noreferrer" style={{ color: "#83DBD2" }}>
                        <img className='diamond' src={require("./Assets/44 BLUE GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/49 FREYA.png")} alt="" />
                        <div className="cb">CRYPTOCHAII</div>
                        <div className="namerole">Freya<br />Artist, Creative Director</div>
                    </a>
                    <a href='https://linktr.ee/Ferrisffrancis' className="member" target="_blank" rel="noreferrer" style={{ color: "#FFD770" }}>
                        <img className='diamond' src={require("./Assets/45 YELLOW GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/50 FERRIS.png")} alt="" />
                        <div className="cb">CRYPTOHIADI</div>
                        <div className="namerole">Ferris<br />Marketing, Finance</div>
                    </a>
                    <a href='' className="member" target="_blank" rel="noreferrer" style={{ color: "#D44848" }}>
                        <img className='diamond' src={require("./Assets/46 RED GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/51 AVDHESH.png")} alt="" />
                        <div className="cb">CRYPTOBHAU</div>
                        <div className="namerole">Avdhesh<br />Developer</div>
                    </a>
                </div>
            </div>
            <Merchant />
            <Join />

            {/* <div className="partners">
                <div className="heading">MERCHANT PARTNERS</div>
                <div className="logos">
                    {partnerLogos.map((img, index) => {
                        return <img src={require(`./Assets/${img}`)} alt="logo" />
                    })}
                </div>
                <p>
                    ...AND MANY MORE! CLICK <Link to="/merchant">HERE</Link> TO SEE FULL LIST OF MERCHANT PARTNERS
                </p>
            </div> */}
        </div>
    )
}
