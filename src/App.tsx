import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Router from "./Router";

export default function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container component="main" sx={{ mb: 2 }}>
        <Header />
        <Router />
      </Container>
      <Box component="footer" sx={{ px: 2, mt: "auto" }}>
        <Container>
          <p className="text-end">
            © Copyright {new Date().getFullYear()} Viajar&Pintar
          </p>
        </Container>
      </Box>
    </Box>
  );
}
