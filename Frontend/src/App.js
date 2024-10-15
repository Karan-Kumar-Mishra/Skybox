import { useAuth0 } from "@auth0/auth0-react";
import Mainapp from "./compenent/Mainapp";
import Start from "./compenent/Start";
import { useEffect } from "react";
import TextBox from "./compenent/TextBox";
export default function App() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
    } else {
      console.log("user is not authenticated");
    }
  }, [user]);
  return (
    <>
      {/* { isAuthenticated ?  <Mainapp/> : <Start/>} */}
      {/* <Mainapp/> */}
      <TextBox/>
      
    </>
  );
}
