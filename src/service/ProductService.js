import axios from 'axios';
import { axiosJWT } from './UserService';

export const getAllProducts = async (search, page, limit) => {
    let res = {};
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/story/stories?search=${search}`);
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/story/stories?limit=${limit}&page=${page}`);
    }
    return res.data;
};

export const getProductType = async (type, page, limit) => {
    if (type) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getall?filter=type&filter=${type}&limit=${limit}&page=${page}`);
        return res.data;
    }
};
export const createProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/story/stories`, data);
    return res.data;
};
export const getDetailProduct = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/story/stories/${id}`);
    return res.data;
};

export const updateProduct = async (id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/story/stories/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        },
    });
    return res.data;
};
export const deleteProduct = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/story/stories/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        },
    });
    return res.data;
};
export const deleteManyProduct = async (data, access_token) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/product/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        },
    });
    return res.data;
};

export const getAllTypeProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-type`);
    return res.data;
};
