import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Home from "pages/Home/index";
import Login from 'pages/Login/index';
import { useState } from 'react';
import Settings from 'pages/settings/index';

const Router = () => {
    const [logged, setLogged] = useState<boolean>(false);
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home setLogged={setLogged}/>} />
            <Route path="/settings" element={<Settings setLogged={setLogged} />} />
            <Route path={RoutePath.LOGIN} element={<Login setLogged={setLogged}/>} />
        </Routes>
    );
}

export default Router;