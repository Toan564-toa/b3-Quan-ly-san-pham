import axios from 'axios'
import React from 'react'

const Api = axios.create({
  baseURL: "https://fakestoreapi.com/products",
})

export const getProduct = async () => {
  const response = await Api.get("");
  return response;
}

export const getProductDetail = async (id) => {
  const response = await Api.get(`/${id}`);
  return response;
}


export const addProduct = async (data) => {
  const response = await Api.post("", data);
  return response;
}

export const updateProduct = async (id,data) => {
  const response = await Api.put(`/${id}`, data);
  return response;
}

export const deleteProduct = async (id) => {
  const response = await Api.delete(`/${id}`);
  return response;
}

export default Api
