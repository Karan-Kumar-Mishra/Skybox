import { useAuth0 } from "@auth0/auth0-react";
import Mainapp from "./component/Mainapp";
import Start from "./component/Start";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUserinfo } from "./Redux/actions/SetUserInfo";
import { signup } from "./Redux/actions/SignUp";
import { getUser } from "./Redux/actions/getUser";

export default function App() {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const store_data = useSelector((state) => state.Data);
  setInterval(() => {
    let div = document.querySelector(".tox-notifications-container");
    if (div != null) div.remove();
  }, 2000);


  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setUserinfo(user));
      dispatch(getUser());
      console.log("state data=> ", store_data);
      dispatch(signup());
      toast.success("Login successfully");
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
