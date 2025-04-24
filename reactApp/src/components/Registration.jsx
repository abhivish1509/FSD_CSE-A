import { TextField, Button, Box, Typography } from "@mui/material";

function RegistrationForm() {
  function sendData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
  
    fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => alert(data.msg))
      .catch((error) => alert("Error: " + error));
  }
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "linear-gradient(135deg, #6D5BBA, #8D58BF)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 400,
          padding: 4,
          boxShadow: 5,
          borderRadius: 3,
          bgcolor: "white",
        }}
      >
        <Typography variant="h4" textAlign="center" fontWeight="bold" color="primary">
          Register
        </Typography>

        <form onSubmit={sendData}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              py: 1.5,
              fontSize: "1rem",
              textTransform: "none",
              bgcolor: "#6D5BBA",
              "&:hover": { bgcolor: "#5A4BA0" },
            }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default RegistrationForm;
