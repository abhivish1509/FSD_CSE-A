import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function StudentAdmin() {
  const [studentData, setStudentData] = useState([]);

  async function showData(e) {
    e.preventDefault();
    const sid = e.target.sid.value;
    console.log(sid);

    if (sid === "*") {
      const response = await fetch("http://localhost:3000/admin/show");
      const res = await response.json();
      console.log(res);
      setStudentData(res.msg);
    } else {
      const response = await fetch(`http://localhost:3000/admin/showByEmailId/${sid}`);
      const res = await response.json();
      console.log(res);
      setStudentData(Array.isArray(res.msg) ? res.msg : [res.msg]);
    }
  }

  async function DeleteData(email) {
    const response = await fetch(`http://localhost:3000/admin/deleteByEmailId/${email}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await response.json();
    console.log(res);

    // Optionally refresh the data
    setStudentData(prev => prev.filter(student => student.email !== email));
  }

  function UpdateData(email) {
    alert(`Update for: ${email}`);
  }

  return (
    <Box
      component="form"
      onSubmit={showData}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        p: 4,
        maxWidth: 600,
        margin: 'auto',
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'white'
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Student Admin
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Enter * or Student ID"
        name="sid"
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
      >
        Search
      </Button>

      <Typography variant="body1" color="text.secondary">
        Output
      </Typography>

      {studentData.length > 0 ? (
        <table border="1" style={{ width: '100%', marginTop: '1rem', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => DeleteData(student.email)}
                    sx={{ mr: 1 }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => UpdateData(student.email)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
          No student available
        </Typography>
      )}
    </Box>
  );
}

export default StudentAdmin;
