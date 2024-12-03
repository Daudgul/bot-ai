import React, { useState } from "react";
import { Box, Typography, Rating, TextField, Button } from "@mui/material";

const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(3);
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    onSubmit({ rating, comments });
  };

  return (
    <Box p={2}>
      <Typography variant="h6">Rate your experience</Typography>
      <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} />
      <TextField
        fullWidth
        multiline
        rows={4}
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        placeholder="Your feedback..."
        sx={{ mt: 2 }}
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Submit Feedback
      </Button>
    </Box>
  );
};

export default FeedbackForm;
