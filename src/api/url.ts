export const BASE_URL = process.env.DEV_API_URL;

const POST_URL = "/post";
const ORDER_URL = "/order";
const PROPOSAL_URL = "/proposal";

export const ENDPOINT = {
  POST: POST_URL,
  POST_DETAIL: (id: number) => `${POST_URL}/${id}`,
  POST_ALL: `${POST_URL}/posts`,

  ORDER: ORDER_URL,
  ORDER_DETAIL: (id: number) => `${ORDER_URL}/${id}`,
  ORDER_ALL: `${ORDER_URL}/orders`,
  ORDER_CONFIRM: `${ORDER_URL}/confirm`,
  ORDER_UPDATE_STATUS: `${ORDER_URL}/update/status`,
  ORDER_UPDATE_DATA: `${ORDER_URL}/update/data`,

  PROPOSAL: PROPOSAL_URL,
  PROPOSAL_ALL: `${PROPOSAL_URL}/proposals`,
  PROPOSAL_CONFIRM: `${PROPOSAL_URL}/confirm`,

  CATEGORY: `category`,
};
