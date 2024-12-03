import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const FeedbackTable = ({ feedbackData }) => {
  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>
        All Feedback
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Conversation</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbackData.map((feedback, index) => (
            <TableRow key={index}>
              <TableCell>{`Conversation ${index + 1}`}</TableCell>
              <TableCell>{feedback.rating}</TableCell>
              <TableCell>{feedback.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default FeedbackTable;
