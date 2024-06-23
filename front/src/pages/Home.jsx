import img1 from "../assets/sliderphotos/img1.webp";
import img2 from "../assets/sliderphotos/img2.webp";
import img3 from "../assets/sliderphotos/img3.jfif";
import img4 from "../assets/sliderphotos/img4.webp";
import img5 from "../assets/sliderphotos/img5.webp";
import img6 from "../assets/sliderphotos/img6.webp";
import img7 from "../assets/sliderphotos/img7.jpg";
import img8 from "../assets/sliderphotos/img8.webp";
import img9 from "../assets/sliderphotos/img9.webp";
import img10 from "../assets/sliderphotos/img10.jpg";
import robohand from "../assets/robohand.webp";
import { useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [spin, setSpin] = useState(Math.ceil(Math.random() * 1800));

    const handleSpin = () => {
        setSpin(prevState => prevState + Math.ceil(Math.random() * 3600));
    }


    return (
        <>
            <div className='banner'>
                <div className="slider" style={{ "--quantity": 10, transform: `perspective(1000px) rotateX(-12deg) rotateY(${spin}deg)` }}>
                    <div className='item' style={{ "--position": 1 }}><Link to="/quiz"><img src={img1} alt="4th industriial revolution" /></Link></div>
                    <div className='item' style={{ "--position": 2 }}><Link to="/quiz"><img src={img2} alt="thinking woman" /></Link></div>
                    <div className='item' style={{ "--position": 3 }}><Link to="/quiz"><img src={img3} alt="man simvolicly holding technological ideas" /></Link></div>
                    <div className='item' style={{ "--position": 4 }}><Link to="/quiz"><img src={img4} alt="man working on laptop" /></Link></div>
                    <div className='item' style={{ "--position": 5 }}><Link to="/quiz"><img src={img5} alt="AI robot" /></Link></div>
                    <div className='item' style={{ "--position": 6 }}><Link to="/quiz"><img src={img6} alt="4th industriial revolution" /></Link></div>
                    <div className='item' style={{ "--position": 7 }}><Link to="/quiz"><img src={img7} alt="AI robot" /></Link></div>
                    <div className='item' style={{ "--position": 8 }}><Link to="/quiz"><img src={img8} alt="artificial brain" /></Link></div>
                    <div className='item' style={{ "--position": 9 }}><Link to="/quiz"><img src={img9} alt="AI robot" /></Link></div>
                    <div className='item' style={{ "--position": 10 }}><Link to="/quiz"><img src={img10} alt="AI robot" /></Link></div>
                </div>
            </div>
            <div className="robohand">
                <button onClick={handleSpin}>Çarxı fırlat</button>
                <img src={robohand} alt="robot hand" />
            </div>
        </>
    );
}

export default Home;