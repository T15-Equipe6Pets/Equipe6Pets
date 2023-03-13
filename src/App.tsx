import { GlobalStyle } from "./styles/GlobalStyles";
import { AppRoutes } from "./routes/routes";
import { UserProvider } from "./providers/UserContext/UserContext";
import { PostProvider } from "./providers/PostContext/PostContext";
import { LostPetProvider } from "./providers/LostPetContext/LostPetContext";
function App() {
  return (
    <div className="App">
      <LostPetProvider>
        <PostProvider>
          <UserProvider>
            <GlobalStyle />
            <AppRoutes />
          </UserProvider>
        </PostProvider>
      </LostPetProvider>
    </div>
  );
}

export default App;
