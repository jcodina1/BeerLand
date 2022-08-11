import { useDispatch } from 'react-redux';
import { useAuth } from "../Context/Contestautenticacion";
import AdminSeller from "../AdminSeller/AdminSeller";
import { useEffect } from 'react';


export default function HomeAdmin() {
  const { user, salir } = useAuth();
  
  async function salir2() {
    await salir();
  }

  
  return (
    <div>
      <div>
        <AdminSeller salir2={salir2} user={user}/>
      </div>
      <button onClick={(e) => salir2(e)}>Get out!</button>
    </div>
  );
}
