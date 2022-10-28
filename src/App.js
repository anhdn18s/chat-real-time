import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { privateRoutes } from "./routes"
import AuthProvider from "./Context/AuthProvider"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;