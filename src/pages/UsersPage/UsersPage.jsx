import { Input } from 'antd';
import React from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';

const UsersPage = () => {

    const users = useLoaderData()
    
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("q") || "";
    
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );

    const onChange = (e) => {
        setSearchParams({ q: e.target.value });
    };

    return (
        <div>
            <Input value={query}
                onChange={onChange}
                placeholder="Поиск по имени"></Input>
            <div className={cls.grid}>
                {filteredUsers.map((user) => (
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
