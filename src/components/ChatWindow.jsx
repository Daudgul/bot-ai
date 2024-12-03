import React, { useState } from "react";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";

const ChatWindow = ({ onSaveChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState({});

  const mockAIResponse = {
    hello: "Hi there! How can I assist you today?",
    default: "I'm not sure how to respond to that, but I'm learning every day!",
  };

  const sendMessage = () => {
    if (!input) return;

    const userMessage = { text: input, sender: "user" };
    const aiResponse = {
      text: mockAIResponse[input.toLowerCase()] || mockAIResponse.default,
      sender: "ai",
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInput("");
  };

  const giveFeedback = (index, type) => {
    setFeedback((prev) => ({ ...prev, [index]: type }));
  };

  return (
    <Box p={2} sx={{ maxWidth: 600, margin: "auto" }}>
      <Box>
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              alignItems: "center",
              marginBottom: 1,
              position: "relative",
            }}
          >
            <Typography
              sx={{
                padding: "8px 12px",
                borderRadius: 4,
                backgroundColor: msg.sender === "user" ? "#cfe8fc" : "#f0f0f0",
              }}
            >
              {msg.text}
            </Typography>
            {msg.sender === "ai" && (
              <Box
                sx={{
                  position: "absolute",
                  marginLeft: 1,
                  display: "flex",
                }}
              >
                <IconButton
                  onClick={() => giveFeedback(index, "like")}
                  color={feedback[index] === "like" ? "primary" : "default"}
                >
                  <ThumbUp />
                </IconButton>
                <IconButton
                  onClick={() => giveFeedback(index, "dislike")}
                  color={
                    feedback[index] === "dislike" ? "secondary" : "default"
                  }
                >
                  <ThumbDown />
                </IconButton>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box display="flex" mt={2}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={sendMessage} variant="contained" sx={{ ml: 1 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
