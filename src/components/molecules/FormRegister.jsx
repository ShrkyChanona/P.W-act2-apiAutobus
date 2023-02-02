import { useRef } from "react";
import Logo from "../atoms/Logo";
import FormButton from "../atoms/FormButton";
import "../../assets/styles/FormRegister.css"

function FormRegister() {
    
    return (

        <div className="container">
            <div><Logo /></div>
            <div className="reg">
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                    </div>
                    <FormButton description="Registro" />
                </form>
            </div>
        </div>
    );
}

export default FormRegister;