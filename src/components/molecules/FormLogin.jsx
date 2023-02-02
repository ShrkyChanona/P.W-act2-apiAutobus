import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../atoms/Logo";
import FormButton from "../atoms/FormButton";
import "../../assets/styles/FormLogin.css"

function FormLogin() {

    const navigate = useNavigate();
    const form = useRef()
    const handlerClick = (e) =>{
        e.preventDefault();
        const formData = new FormData(form.current);
        let URI = "http://34.225.239.102/api/iniciar";
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: formData.get('user'),
                contrasenia: formData.get('password')
            })
        }
        fetch(URI,options)
        .then(response => response.json())
        .then(data =>{
            alert(JSON.stringify(data))
            if(data.status){
                navigate("/autobus");
            }
        })
    }
    return (
        //la clase container y reg esta siendo llamada desde otro archivo css (FormRegister.css, la verdad nose por que pasa eso xd)
        <div className="container">
            <div><Logo /></div>
            <div className="reg">
                <form ref={form}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="user" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <FormButton description="Iniciar Sesion" event={handlerClick} />
                </form>
                <span>¿No tienes cuenta? <Link to="/register">Registrate</Link></span>
            </div>
        </div>
    );
}

export default FormLogin;