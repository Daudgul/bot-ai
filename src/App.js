import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Drawer, IconButton, Box, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import ChatPage from "./pages/ChatPage";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import FeedbackTable from "./components/FeedbackTable";

const gradient = `
linear-gradient(0deg, #D7C7F4, #D7C7F4),
linear-gradient(0deg, #D7C7F4, #D7C7F4),
linear-gradient(0deg, #D7C7F4, #D7C7F4),
linear-gradient(0deg, #D7C7F4, #D7C7F4)
`;

const App = () => {
  const [conversations, setConversations] = useState([]);

  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<ChatPage />} />
            <Route
              path="/all-feedback"
              element={<FeedbackTable feedbackData={conversations} />}
            />
          </Routes>
        </Router>
      </Layout>
    </>
  );
};

export default App;

function Layout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [open, setOpen] = useState(!isMobile);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        background:
          "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        onClick={toggleDrawer}
        sx={{ m: 2, width: "40px", height: "40px", color: "#9785BA" }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            background: gradient,
            py: "12px",
          }}
        >
          {" "}
          <img
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
              width: "34px",
              height: "32px",
              borderRadius: "10px",
            }}
            src="./back.png"
            alt="icon img"
          />{" "}
          <h2 style={{ fontSize: "20px", fontWeight: "400" }}>New Chat</h2>{" "}
          <DrawOutlinedIcon />
        </Box>
        <Typography
          sx={{
            margin: "11px 16px",
            background: gradient,
            borderRadius: "10px",
            padding: "11px 14px",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: 700,
          }}
        >
          Past Conversations
        </Typography>
      </Drawer>

      <Box
        sx={{
          flexGrow: 1,
          height: "100vh",
          pr: "50px",
        }}
      >
        <Box sx={{ height: "calc(100% - 64px)" }}>
          <h1
            style={{
              color: "#9785BA",
              fontSize: "28px",
              lineHeight: "32px",
              margin: "16px 0",
            }}
          >
            Bot AI
          </h1>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
