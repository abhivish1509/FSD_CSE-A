import { TextField, Button, Box, Typography } from "@mui/material";

function Login() {
  async function sendData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    alert(`Email: ${email}\nPassword: ${password}`);

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    alert(res.msg);
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
          Login
        </Typography>

        <form onSubmit={sendData}>
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
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
