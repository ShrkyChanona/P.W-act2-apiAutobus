import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Autobus from '../pages/Autobus';
import Login from "../pages/Login";
import Register from "../pages/Register"

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/autobus" element={<Autobus/>}/>
            </Routes>
        </BrowserRouter>
     );
}

export default App;