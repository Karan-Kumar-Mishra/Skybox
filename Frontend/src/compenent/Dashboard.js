import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import Notes from "./Notes";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Logo from "../compenent/Images/Logo.png";

const NAVIGATION = [
  {
    segment: "notes",
    title: "Notes",
    icon: <EditNoteIcon />,
  },
  {
    segment: "notification",
    title: "Notification",
    icon: <CircleNotificationsIcon />,
  },
  {
    segment: "files",
    title: "Files",
    icon: <InsertDriveFileIcon />,
  },
  {
    segment: "settings",
    title: "Settings",
    icon: <SettingsIcon />,
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

function DemoPageContent({ pathname }) {
  const navigate = useNavigate();
  const { logout } = useAuth0();
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
          {" "}
          <Notes />{" "}
        </div>
      )}
      {pathname !== "/custom" && (
        <Typography>Dashboard content for {pathname}</Typography>
      )}
      {pathname === "/notification" && (
        <div className="w-[50rem] flex justify-center ">
          {" "}
          <h1>Notification</h1>{" "}
        </div>
      )}
      {pathname === "/settings" && navigate("/settings")}
      {pathname === "/logout" && logout()}
    </Box>
  );
}
DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};
function Dashboard(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window !== undefined ? window() : undefined;
  React.useEffect(() => {
    let ele = document.querySelector(".css-t3xolk");
    ele.style.width = "95vw";
  }, []);
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: (
          <img
            className="rounded-full"
            src="https://raw.githubusercontent.com/Karan-Kumar-Mishra/Skybox/refs/heads/main/Frontend/src/compenent/Images/Logo.png"
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
  );
}
export default Dashboard;
