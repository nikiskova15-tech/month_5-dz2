import { Input } from 'antd';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UsersPage = () => {

    const users = useLoaderData()


    
    return (
        <div>
            <Input></Input>
            <div className={cls.grid}>
                {users.map((user) => (
                    <Card key={user.id} style={{ width: '207px' }}>
                        <Link to={`/users/${user.id}`}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            <p>{user.address.city}</p>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default UsersPage;
