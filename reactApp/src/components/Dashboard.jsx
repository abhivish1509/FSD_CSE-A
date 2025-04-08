import React from 'react';
import { Box, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh" 
      bgcolor="#f4f4f4"
    >
      <Box 
        bgcolor="white" 
        p={4} 
        borderRadius={2} 
        boxShadow={3} 
        textAlign="center"
      >
        <Typography variant="h4" fontWeight="bold" color="primary">
          Welcome to our Dashboard
        </Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
