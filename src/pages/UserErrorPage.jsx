import { useRouteError } from "react-router-dom";

const UserErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1 style={{color: 'red'}}>Пользователь не найден</h1>
            <h3>Error {error.status}</h3>
        </div>
    );
};

export default UserErrorPage;