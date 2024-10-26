import { AuthProvider } from "./contexts/auth";
import { Router } from "./router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
