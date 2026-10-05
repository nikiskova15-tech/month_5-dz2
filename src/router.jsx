// Все маршруты в одном месте

import { createBrowserRouter, useSearchParams } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import UsersPage from "./pages/UsersPage/UsersPage.jsx";
import UserPage from "./pages/UserPage/UserPage.jsx";
import UserErrorPage from "./pages/UserErrorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import { api } from "./api/API.JS";

async function usersLoader() {
    const { data } = await api.get("/users")

    return data
}

async function userLoader({ params }) {
    try {
        const { data } = await api.get(`/users/${params.id}`)

        return data
    } catch {
        throw new Response("Пользователь не найден",{
            status: 404,
            statusText: "Not Found"
        });
    }
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'products/:id', element: <ProductPage /> },
            { path: 'users', element: <UsersPage />, loader: usersLoader },
            { path: 'users/:id', element: <UserPage />, loader: userLoader, errorElement: <UserErrorPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: '*', element: <NotFoundPage /> }
        ]
    }
])