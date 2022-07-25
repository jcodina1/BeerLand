
import { useAuth } from "../context/contestautenticacion";
import Home from "../Home/Home";
import HomeAdmin from "./HomeAdmin";


export default function ValidacionUSer() {
    const {user} = useAuth()
    console.log(user)
    
    return (
        <div>
            {
                 user === null ? <Home/> : user.rol === 'user' ?<Home/> : <HomeAdmin/>
            }
        </div>
    )
    
}