import { useAuth0 } from "@auth0/auth0-react";

import Mainapp from "./compenent/Mainapp";
import Start from "./compenent/Start";

export default function App() {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
 

    return (
          <>
          { isAuthenticated ?  <Mainapp/> : <Start/>}
          {/* <Mainapp/> */}
          </>     
    )
  }
  