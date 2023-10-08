import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/index";

const GET_PRODUCTS = "feat/getAllProducts";
const GET_PRODUCT_DETAIL = "feat/getDetailProduct";

export const getAllProducts = createAsyncThunk(GET_PRODUCTS, async () => {
  try {
    const response = await httpService.get("/product");
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getProduct = createAsyncThunk(GET_PRODUCT_DETAIL, async (productId) => {
    try {
      const response = await httpService.get(`/product/${productId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  });