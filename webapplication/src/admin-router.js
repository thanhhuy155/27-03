import React from 'react';
import AdministratorHomePage from './pages/administrator/AdministratorHomePage';
import ListAdminPage from './pages/administrator/ListAdminPage';
import NotFoundPage from './pages/main/NotFoundPage';
const routes = [
    {
        path: '/a/',
        exact: true,
        main: () => <AdministratorHomePage />
    },
    {
        path: '/admin-list',
        exact: false,
        main: () => <ListAdminPage />
    },
    {
        path: '/a/ ',
        exact: false,
        main: () => <NotFoundPage />
    }
];
export default routes;