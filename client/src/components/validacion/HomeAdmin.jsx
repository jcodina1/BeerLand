import { useAuth } from "../Context/Contestautenticacion";
import BrewerySales from "../Purchases/BrewerySales"


export default function HomeAdmin() {
  const { user, salir } = useAuth();
  async function salir2() {
    await salir();
  }
  
  return (
    <div>
      <h1>Hola admin</h1>
      <button onClick={(e) => salir2(e)}>salir</button>
      <BrewerySales/>
    </div>
  );
}
