import { useAuth } from "../Context/Contestautenticacion"
import UserPurchases from "../Purchases/UserPurchases/UserPurchases";


export default function HomeAdmin() {
  const { user, salir } = useAuth();
  async function salir2() {
    await salir();
  }
  console.log(user);
  return (
    <div>
      <h1>Hola admin</h1>
      <div>
        <UserPurchases/>
      </div>
      <button onClick={(e) => salir2(e)}>salir</button>
    </div>
  );
}
