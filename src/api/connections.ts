import envs from '../config/envs';

const server = `${envs.apiUrl}${envs.apiPort}`;
interface IConnection {
    endpoint: string;
    token: string;
    data?: any;
}

export async function conectionGET({ endpoint, token }: IConnection) {
    const response = await fetch(`${server}/${endpoint}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.json();
}

export async function conectionPOST({ endpoint, data, token }: IConnection) {
    const response = await fetch(`${server}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    return response.json();
}

export async function conectionPUT({ endpoint, data, token }: IConnection) {
    const response = await fetch(`${server}/${endpoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: JSON.stringify(data),
    });

    return response.json();
}

export async function conectionDELETE({ endpoint, token }: IConnection) {
    const response = await fetch(`${server}/${endpoint}`, {
        method: 'DELETE',
        headers: {
            Authorization: `${token}`,
        },
    });

    return response.json();
}