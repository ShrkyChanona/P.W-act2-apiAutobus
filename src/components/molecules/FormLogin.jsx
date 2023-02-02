import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import FormButton from "../atoms/FormButton";
import "../../assets/styles/FormLogin.css"

function FormLogin() {
    return (
        //la clase container y reg esta siendo llamada desde otro archivo css (FormRegister.css, la verdad nose por que pasa eso xd)
        <div className="container">
            <div><Logo /></div>
            <div className="reg">
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                    </div>
                    <FormButton description="Iniciar Sesion" />
                </form>
                <span>¿No tienes cuenta? <Link to="/register">Registrate</Link></span>
            </div>
        </div>
    );
}

export default FormLogin;