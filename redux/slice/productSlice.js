import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../APIS/productService";

export const AllProucts = createAsyncThunk(
  "product/get-All",
  async (thunkAPI) => {
    try {
      return await productService.getAllProduct();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ProuctSlug = createAsyncThunk(
  "product/get-a-product",
  async (slug, thunkAPI) => {
    try {
      return await productService.getProductSlug(slug);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productState = {
  products: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const productSlice = createSlice({
  name: "products",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AllProucts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AllProucts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
        // if (state.isSuccess === true) {
        //   console.log(state.products);
        // }
      })
      .addCase(AllProucts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(ProuctSlug.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ProuctSlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
        //   if (state.isSuccess === true) {
        //   console.log(state.singleProduct.data);
        // }
      })
      .addCase(ProuctSlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default productSlice.reducer;
