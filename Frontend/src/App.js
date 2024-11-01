import { useAuth0 } from "@auth0/auth0-react";
import Mainapp from "./compenent/Mainapp";
import Start from "./compenent/Start";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "./compenent/Cookies";
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const { isAuthenticated, user } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      console.log("user=>", user);
    } else {
      console.log("user is not authenticated");
    }
  }, [user]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "black",
            color: "white",
          },
        }}
      />
      {isAuthenticated ? <Mainapp /> : <Start />}
    </>
  );
}
