import "./assets/styles/global.css";
import AppRouter from "./navigation/AppRouter";
import Header from "./components/Header/Header";
import Toast from "components/Toast/Toast";


function App() {
  return (
    <div>
      <Header />
      <AppRouter />
      <Toast />
    </div>
  );
}

export default App;
