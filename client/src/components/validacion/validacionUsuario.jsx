import { useAuth } from "../Context/Contestautenticacion";
import Home from "../Home/Home";
import HomeAdmin from "./HomeAdmin";

export default function ValidacionUSer() {
  const { user } = useAuth();

  return (
    <div>
      {user === null ? (
        <Home />
      ) : user.rol === "user" ? (
        <Home />
      ) : (
        <HomeAdmin />
      )}
    </div>
  );
}
