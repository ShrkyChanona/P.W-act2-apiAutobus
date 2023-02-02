import "../../assets/styles/Buttons.css"

function FormButton({description, event}) {
    return ( 
        <button onClick={event}>{description}</button>
     );
}

export default FormButton;