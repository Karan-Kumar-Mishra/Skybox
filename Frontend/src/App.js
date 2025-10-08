import { useAuth0 } from "@auth0/auth0-react";
import Mainapp from "./component/Mainapp";
import Start from "./component/Start";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUserinfo } from "./Redux/actions/SetUserInfo";
import { signup } from "./Redux/actions/SignUp";
import { getUser } from "./Redux/actions/getUser";
import block from "./lib/BlockDevTools";
import PlayNoitification from "./lib/PlayNoitification";
export default function App() {
  block();
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();

  const store_data = useSelector((state) => state.Data);
  setInterval(() => {
    let div = document.querySelector(".tox-notifications-container");
    if (div != null) div.remove();
  }, 2000);



  useEffect(() => {

    if (isAuthenticated && store_data.ComponentData.loginbtn && user) {
      console.log("user=> ", user)
      dispatch(setUserinfo(user));
      console.log("after set state data=> ", store_data);
      dispatch(signup())
      dispatch(getUser(user.email))
      PlayNoitification()
      toast.success("Login successfully");

    } else {
      console.log("user is not authenticated");
      console.log("user=> ", user)
      console.log("auth=>", isAuthenticated)
    }
  }, [isLoading]);

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
      <audio id="audio">
        <source src='../assets/Skybox.mp3' type="audio/mp3" />
      </audio>
      {(isAuthenticated && user) ? <Mainapp /> : <Start />}
    </>
  );
}
