import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addWinner } from "../store/Register";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
    const { data } = await axios.post("/contact", {
        name,
        surname,
        email
    })
    // const response = await fetch("http://localhost:8000/contact", {
    //     method: 'POST',
    //     mode: "cors",
    //     credentials: "same-origin",
    //     body: JSON.stringify(name, surname, email),
    // }
    // )
    // if (!response.ok) {
    //     throw new Error("Server error");
    // }
    // const data = await response.json();
    // console.log(data);
    // return data;
    if (data) {
        alert("Qeydə alındınız.");
        navigate("/");
    } else {
        console.log(data.error);
        return data.error;
    }
        } catch (error) {
            console.log(error);
            return error;
        }

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         dispatch(addWinner({name, surname, email}))
    //     } catch (error) {
    //         console.log(error);
    //         return error
    //     }
    // }


    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" >Ad</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="surname" >Soyad</label>
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button>Təsdiq et</button>
        </form>
    );
}

export default ContactForm;
