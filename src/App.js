import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { privateRoutes } from "./routes"
import AuthProvider from "./Context/AuthProvider"
import AppProvider from './Context/AppProvider';
import AddRooms from './components/Modals/AddRooms';
import InviteMemberModal from './components/Modals/InviteMemberModal';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Routes>
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Routes>
          <AddRooms />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
