import React, { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import FeedbackForm from "../components/FeedbackForm";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

const mockData = [
  {
    qus: "Hi, what is the weather",
    ans: "Get immediate AI generated response",
  },
  {
    qus: "Hi, what is my location",
    ans: "Get immediate AI generated response",
  },
  {
    qus: "Hi, what is the temperature",
    ans: "Get immediate AI generated response",
  },
  {
    qus: "Hi, how are you",
    ans: "Get immediate AI generated response",
  },
];

const ChatPage = () => {
  const [conversations, setConversations] = useState([]);

  const saveConversation = (feedback) => {
    setConversations([...conversations, feedback]);
  };
  const btn = {
    width: "71px",
    background: "#d7c7f4",
    color: " black",
    height: "41px",
    borderRadius: "5px",
    textTransform: "capitalize",
  };

  return (
    <Box
      sx={{
        display: "flex ",
        justifyContent: "end",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Box textAlign={"center"}>
        <h1>How Can I Help You Today?</h1>{" "}
        <img
          style={{
            margin: "8px 0 30px",
            borderRadius: "50%",
            boxShadow: "-4px 4px 10px 0px #00000026",
          }}
          src="/back.png"
          alt="User icon"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Grid container spacing={2} sx={{ mt: "10%", mb: 2 }}>
          {/* First column */}
          {mockData.map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Paper sx={{ padding: 2, backgroundColor: "white" }}>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: 700 }}
                  variant="h6"
                >
                  {item.qus}
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", color: "#00000080", fontWeight: 400 }}
                  variant="h6"
                >
                  {item.ans}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          py: 3,
          width: "100%",
          //   mr: 5,
        }}
      >
        <TextField
          fullWidth
          sx={{
            background: "#fff",
            // height: "41px",
          }}
          size="small"
          //   helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          //   label="Name"
        />
        <Button sx={btn}>Ask</Button>
        <Button sx={btn}>Save</Button>
      </Box>

      {/* <ChatWindow onSaveChat={saveConversation} /> */}
      {/* <FeedbackForm onSubmit={saveConversation} /> */}
    </Box>
  );
};

export default ChatPage;
