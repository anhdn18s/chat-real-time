import Login from '../components/Login';
import ChatRoom from '../components/ChatRoom';
import { Router, Route, Routes, BrowserRouter } from "react-router-dom"

const privateRoutes = [
    {
        path: '/', component: ChatRoom
    },
    {
        path: '/login', component: Login
    }
]
export { privateRoutes };