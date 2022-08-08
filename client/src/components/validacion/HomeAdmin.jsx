import { useAuth } from "../Context/Contestautenticacion"
import UserPurchases from "../Purchases/UserPurchases/UserPurchases";
import BrewerySales from "../Purchases/BrewerySales"


export default function HomeAdmin() {
  const { user, salir } = useAuth();
  async function salir2() {
    await salir();
  }
  
  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <div>
        <UserPurchases/>
      </div>
      <button onClick={(e) => salir2(e)}>Get out!</button>
    </div>
  );
}
