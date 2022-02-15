import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout';
import Login from '../Page/Login';
import Register from '../Page/Register';
import MainLayout from '../components/layout/MainLayout';
import Home from '../Page/Home'
import Friend from '../Page/Friend';

function RouteConfig() {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route path="" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            {/* <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="friend" element={<Friend />} />

            </Route> */}
        </Routes>
    )
}

export default RouteConfig;