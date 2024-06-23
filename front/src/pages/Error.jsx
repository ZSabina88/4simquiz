import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

export default function ErrorPage() {
    const error = useRouteError();

    let title = "An error occured!";
    let message = "Something went wrong!";

    if (error.status === 500) {
        message = error.data.message;
    };

    if (error.status === 404) {
        title = "Not found!";
        message = "Could not find resource or page.";
    };


    return (
        <>
            <Header />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}>
                <h2>{title}</h2>
                <p>{message}</p>
            </div>

        </>
    );
}