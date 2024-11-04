import { useAuth0 } from "@auth0/auth0-react";
import Mainapp from "./compenent/Mainapp";
import Start from "./compenent/Start";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "./compenent/Cookies";
import { useDispatch, useSelector } from 'react-redux';
import { setUserinfo } from "./Redux/actions/SetUserInfo";
import { signup } from "./Redux/actions/SignUp";

export default function App() {
  const { isAuthenticated, user } = useAuth0();
  const dispatch=useDispatch();
  const store_data = useSelector((state)=>state.Data);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setUserinfo(user))
      console.log("state data=> ",store_data);
      dispatch(signup());
      toast.success("Login successfully")
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
