import { GlobalStyle } from "./styles/GlobalStyles";
import { AppRoutes } from "./routes/routes";
import { UserProvider } from "./providers/UserContext/UserContext";
import { PostProvider } from "./providers/PostContext/PostContext";
function App() {
  return (
    <div className="App">
      <PostProvider>
        <UserProvider>
          <GlobalStyle />
          <AppRoutes />
        </UserProvider>
      </PostProvider>
    </div>
  );
}

export default App;
