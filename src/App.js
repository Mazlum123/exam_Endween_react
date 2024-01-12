import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage';
import Details from './Details';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/category/:id",
        element: <Details />,
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
