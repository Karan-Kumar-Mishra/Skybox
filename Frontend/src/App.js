import { useAuth0 } from "@auth0/auth0-react";
import Mainapp from "./compenent/Mainapp";
import Start from "./compenent/Start";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SingUp } from "./Redux/dataSlice";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
      dispatch(SingUp(user));
      toast.success("login successfully");
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
