import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout';
import Login from '../Page/Login';
import Register from '../Page/Register';

function RouteConfig() {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route path="" element={<Login />} />
                <Route path="register" element={<Register />} />

            </Route>
        </Routes>
    )
}

export default RouteConfig;