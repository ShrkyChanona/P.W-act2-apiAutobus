import { useState } from "react";
import { useRef } from "react";
import FormButton from "../atoms/FormButton";
import Logo from "../atoms/Logo";
import "../../assets/styles/FormAutobus.css";


function FormAutobus() {
    const [licenceNumber,setLicenceNumber] = useState("");
    
    const handlerLoad = (e) =>{
            const code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            let guie = "";

            //Ordenamiento fisher-yates
            for (let i = code.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1)); //random index
                [code[i], code[j]] = [code[j], code[i]]; // intercambio
                guie += code.pop();
            }
            setLicenceNumber(guie)
    }

    const form = useRef()
    const handlerClick = (e) =>{
        e.preventDefault();
        const formData = new FormData(form.current);
        let URI = "http://34.225.239.102/api/autobus/register";
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clave: formData.get('clave'),
                placa: formData.get('placa'),
                numasientos: formData.get('numasientos'),
                fecha: formData.get('fecha'),
                tipo: formData.get('tipo'),
                nombre: formData.get('nameChofer'),
                licencia: formData.get('numeroL')
            })
        }
        fetch(URI,options)
        .then(response => response.json())
        .then(data =>{alert(JSON.stringify(data))})
    }
    

    return (
        <div className="container-autobus" onLoad={handlerLoad}>
            <div><Logo /></div>
            <div>
                <form ref={form}>
                    <div className="data">
                        <div className="row-camps">
                            <label htmlFor="Clave Autobus">Clave Autobus</label>
                            <input type="text" name="clave" />
                        </div>
                        <div className="row-camps">
                            <label htmlFor="Placa autobus">Placa Autobus</label>
                            <input type="text" name="placa" />
                        </div>
                    </div>
                    <div className="data">
                        <div className="row-camps">
                            <label htmlFor="Numero de asientos">Numero de asientos</label>
                            <input type="number" name="numasientos" />
                        </div>
                        <div className="row-camps">
                            <label htmlFor="Fecha de alta">Fecha de alta</label>
                            <input type="date" name="fecha" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="Tipo">Tipo</label>
                        <select className="camps" name="tipo">
                            <option>Turismo</option>
                            <option>Lujo</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="Nombre del chofer">Nombre del chofer</label>
                        <input  type="text" name="nameChofer" />
                    </div>
                    <div>
                        <label htmlFor="Numero de licencia">Numero de licencia</label>
                        <input type="text" readOnly="readonly" value={licenceNumber} name="numeroL" />
                    </div>
                    <button onClick={handlerClick}>Alta de autobus</button>
                    {/* <FormButton description="Alta de autobus" onClick={handlerLoad} ></FormButton> */}
                </form>
                
            </div>
        </div>
    );
}

export default FormAutobus;