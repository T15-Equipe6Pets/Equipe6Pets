import { GlobalStyle } from "./styles/GlobalStyles";
import { AppRoutes } from "./routes/routes";
import { UserProvider } from "./providers/UserContext/UserContext";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <GlobalStyle />
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
