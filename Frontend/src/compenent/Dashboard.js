import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import Notes from "./Notes";
import EditNoteIcon from '@mui/icons-material/EditNote';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SettingsIcon from '@mui/icons-material/Settings';
const NAVIGATION = [
  
  {
    segment: "notes",
    title: "Notes", // Custom title
    icon: <EditNoteIcon />, // Replace with an actual icon
  },
  {
    segment: "notification",
    title: "Notification", // Custom title
    icon: <CircleNotificationsIcon />, // Replace with an actual icon
  },
  {
    segment: "files",
    title: "Files", // Custom title
    icon: <InsertDriveFileIcon />, // Replace with an actual icon
  },
  {
    segment: "Settings",
    title: "Settings", // Custom title
    icon: <SettingsIcon />, // Replace with an actual icon
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
      {pathname === "/notes" && <div className="w-[50rem] flex justify-center "> <Notes/> </div> }
      {pathname !== "/custom" && (   <Typography>Dashboard content for {pathname}</Typography> )}
      {pathname === "/notification" && <div className="w-[50rem] flex justify-center "> <h1>Notification</h1> </div> }

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
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: "MUI",
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
