import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer, toast } from "react-toastify";
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
            <ToastContainer />
          </UserProvider>
        </PostProvider>
      </LostPetProvider>
    </div>
  );
}

export default App;
