import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import NotesDashboard from "./NotesDashboard";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Logo from "../component/Images/Logo.png";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationListDashboard from "./NotificationListDashboard";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar"


const NAVIGATION = [
  {
    segment: "notes",
    title: "Notes",
    icon: <EditNoteIcon />,
  },
  {
    segment: "notification",
    title: "Notification",
    icon: (
      <CircleNotificationsIcon />
    ),
  },
  {
    segment: "files",
    title: "Files",
    icon: <InsertDriveFileIcon />,
  },
  // {
  //   segment: "settings",
  //   title: "Settings",
  //   icon: <SettingsIcon />,
  // },
  {
    segment: "profile",
    title: "Profile",
    icon: <AccountCircleIcon />,
  },
  {
    segment: "logout",
    title: "Logout",
    icon: <LogoutIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function logoutUser(params) {

}

function DemoPageContent({ pathname }) {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  function logoutUser(params) {
   setTimeout(()=>{
    logout()
   },2000)
  }
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {pathname === "/notes" && (
        <div className="w-[50rem] flex justify-center ">
          <NotesDashboard />
        </div>
      )}
      {pathname === "/notification" && (
        <div className="w-[50rem] flex justify-center ">
          <NotificationListDashboard />
        </div>
      )}
      {pathname === "/files" && navigate("/Filesystem")}
      {pathname === "/settings" && navigate("/settings")}
      {pathname === "/profile" && navigate("/profile")}
      {pathname === "/logout" && logoutUser()}
    </Box>
  );
}
DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};
function Dashboard(props) {
  const { window } = props;
  const router = useDemoRouter("/notes");
  const { isAuthenticated, user } = useAuth0();
  const demoWindow = window !== undefined ? window() : undefined;

  React.useEffect(() => {

    let ele = document.querySelector(".css-t3xolk");
    let ele2 = document.querySelector(".css-23htwk");
    if (ele2) {
      ele2.className = "hide-scrollbar";
    }
    // ele.style.height = "80vh";
    ele.style.width = "98vw";
  }, []);
  const store_data = useSelector((state) => state.Data);
  React.useEffect(() => {
    console.log("state in dashborad =>", store_data)
    console.log("user=> ", user)
  }, [user, isAuthenticated, store_data, store_data.ComponentData.currentNote])
  return (
    <>
      <Navbar />
  
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo: (
            <img
              className="rounded-full"
              src="https://raw.githubusercontent.com/Karan-Kumar-Mishra/Skybox/refs/heads/main/Frontend/src/component/Images/Logo.png"
              alt="MUI logo"
            />
          ),
          title: "Skybox",
          homeUrl: "/toolpad/core/introduction",
        }}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </>
  );
}
export default Dashboard;
