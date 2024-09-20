import { authApi } from ".";
import {
  Order,
  OrderCreateRequest,
  OrderReadRequest,
  OrderUpdateDataRequest,
  OrderUpdateStatusRequest,
} from "../types/Order";
import { BASE_URL, ENDPOINT } from "./url";

export const readOrderDetail = async (orderId: number) => {
  const response = await authApi().get(
    BASE_URL + `${ENDPOINT.ORDER_DETAIL}?orderId=${orderId}`
  );
  return response.data.data as Order;
};

export const readOrderAll = async (data: OrderReadRequest) => {
  const response = await authApi().post(BASE_URL + ENDPOINT.ORDER_ALL, data);
  return response.data.data as Order[];
};

export const createOrder = async (data: OrderCreateRequest) => {
  const response = await authApi().post(BASE_URL + ENDPOINT.ORDER, data);
  return response.data.data as Order;
};

export const confirmOrder = async (orderId: number, accept: boolean) => {
  const response = await authApi().post(
    BASE_URL + ENDPOINT.ORDER_CONFIRM + `?orderId=${orderId}&accept=${accept}`
  );
  return response.data.data as Order;
};

export const updateOrderStatus = async (data: OrderUpdateStatusRequest) => {
  const response = await authApi().patch(
    BASE_URL + ENDPOINT.ORDER_UPDATE_STATUS,
    data
  );
  return response.data.data as Order;
};

export const updateOrderData = async (data: OrderUpdateDataRequest) => {
  const response = await authApi().patch(
    BASE_URL + ENDPOINT.ORDER_UPDATE_DATA,
    data
  );
  return response.data.data as Order;
};

export const deleteOrder = async (orderId: number) => {
  const response = await authApi().delete(
    BASE_URL + ENDPOINT.ORDER + `?orderId=${orderId}`
  );
};
