import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../atoms/Logo";
import FormButton from "../atoms/FormButton";
import "../../assets/styles/FormRegister.css"

function FormRegister() {
    const redirection = useNavigate();
    const form = useRef();
    const handlerClick = (e) =>{
        e.preventDefault();
        const formData = new FormData(form.current);
        let URI = "http://34.225.239.102/api/registrar/usuario";
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: formData.get('name'),
                usuario: formData.get('user'),
                correo: formData.get('email'),
                contrasenia: formData.get('password')
            })
        }
        fetch(URI,options)
        .then(response => response.json())
        .then(data =>{
            alert(JSON.stringify(data));
            if(data.status){
                redirection("/")
            }
        })
    }
    return (

        <div className="container">
            <div><Logo /></div>
            <div className="reg">
                <form ref={form}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email"/>
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="user" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <FormButton description="Registro" event={handlerClick} />
                </form>
            </div>
        </div>
    );
}

export default FormRegister;