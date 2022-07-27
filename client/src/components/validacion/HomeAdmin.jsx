import { useAuth } from "../context/Contestautenticacion"

export default function HomeAdmin() {
    const {user, salir} = useAuth()
  async function salir2() {
        await salir ()
        
    }
    console.log(user)
    return (
        <div>
            <h1>Hola admin</h1>
            <button onClick={e=>salir2(e)}>salir</button>

        </div>
        
    )
    
}