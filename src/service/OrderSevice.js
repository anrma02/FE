import { axiosJWT } from './UserService';

export const createOrder = async (data, access_token) => {
    try {
        const res = await axiosJWT.post(`http://localhost:3000/api/order/create/${data.user}`, data, {
            headers: {
                token: `Bearer ${access_token}`,
            },
        });
        console.log('🚀 ~ createOrder ~ res:', res);
        return res.data;
    } catch (error) {
        console.error('Error creating order:', error.response || error);
        throw error;
    }
};

export const getDetailOrderUser = async (id, access_token) => {
    const res = await axiosJWT.get(`http://localhost:3000/api/order/get-order-all/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        },
    });
    return res.data;
};

export const getDetailOrder = async (id, access_token) => {
    const res = await axiosJWT.get(`http://localhost:3000/api/order/get-order-detail/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        },
    });
    return res.data;
};
export const cancelOrder = async (id, access_token, orderItems, userId) => {
    const data = { orderItems, orderId: id };
    const res = await axiosJWT.delete(
        `http://localhost:3000/api/order/cancel-order/${userId}`,
        { data },
        {
            headers: {
                token: `Bearer ${access_token}`,
            },
        },
    );
    return res.data;
};
export const getAllOrder = async (access_token) => {
    const res = await axiosJWT.get(`http://localhost:3000/api/order/get-all-order`, {
        headers: {
            token: `Bearer ${access_token}`,
        },
    });
    return res.data;
};
export const deleteOrder = async (id, data, access_token) => {
    const res = await axiosJWT.delete(`http://localhost:3000/api/order/delete-order/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        },
    });
    return res.data;
};
