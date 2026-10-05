import { useRouteError } from "react-router-dom";

const UserErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1 style={{color: 'red'}}>Пользователь не найден</h1>
            <p>{error.status}</p>
        </div>
    );
};

export default UserErrorPage;