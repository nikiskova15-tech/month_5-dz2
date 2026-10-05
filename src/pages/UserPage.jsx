import { Button } from 'antd';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserPage = () => {

    const navigate = useNavigate()

    const user = useLoaderData()

    
    return (
        <div>
            <div style={{
                margin: '0 auto'
            }}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <h3>{user.address.city}</h3>
                <h3>{user.company.name}</h3>
            </div>
            <Button onClick={() => navigate(-1)}>← Назад к списку</Button>
        </div>

    );
}

export default UserPage;
