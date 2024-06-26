import ErrorPage from "./pages/Error";
import RootLayout from "./pages/RootLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Quiz } from "./components/Quiz";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import axios from "axios";
import Summary from "./components/Summary";

// axios.defaults.baseURL = "https://4simquiz.vercel.app";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true, element: <Home />
            },
            {
                path: "/quiz", element: <Quiz />
            },
            {
                path: "/contact", element: <ContactForm />
            },
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
