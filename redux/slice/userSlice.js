import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../APIS/userService";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await authService.loginService(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const SendCart = createAsyncThunk(
  "auth/addCart",
  async ({ data, token }, thunkAPI) => {
    try {
      return await authService.AddCart({ data, token });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const GetAllCart = createAsyncThunk(
  "auth/getCart",
  async ({ id, token }, thunkAPI) => {
    try {
      return await authService.GetCart({ id, token });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const DeleteCart = createAsyncThunk(
  "auth/deleteCart",
  async ({ id, token }, thunkAPI) => {
    try {
      return await authService.DeleteCart({ id, token });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Obtener_Cliente = createAsyncThunk(
  "auth/get-user",
  async ({ id, token }, thunkAPI) => {
    try {
      return await authService.Obtener_Cliente({ id, token });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Actualizar_Cliente = createAsyncThunk(
  "auth/update-user",
  async ({ id, user, token }, thunkAPI) => {
    try {
      return await authService.actualizar_perfil_cliente_guest({
        id,
        user,
        token,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetDirecciones = createAsyncThunk(
  "auth/direcciones-user",
  async ({ id, token }, thunkAPI) => {
    try {
      return await authService.GetDirecciones({
        id,
        token,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          console.log(state.user.data);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(SendCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SendCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProduct = action.payload;
        // if (state.isSuccess) {
        //   console.log(state.cartProduct.data);
        // }
      })
      .addCase(SendCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        if (state.isError) {
          console.log(state.message);
        }
      })
      .addCase(GetAllCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getAllCartProduct = action.payload;
        // if (state.isSuccess) {
        //   console.log(state.getAllCartProduct.data);
        // }
      })
      .addCase(GetAllCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        if (state.isError) {
          console.log(state.message);
        }
      })
      .addCase(DeleteCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deleteCartProduct = action.payload;
        // if (state.isSuccess) {
        //   console.log(state.getAllCartProduct.data);
        // }
      })
      .addCase(DeleteCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        if (state.isError) {
          console.log(state.message);
        }
      })
      .addCase(Obtener_Cliente.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Obtener_Cliente.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.GetUser = action.payload;
        // if (state.isSuccess) {
        //   console.log(state.GetUser.data);
        // }
      })
      .addCase(Obtener_Cliente.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        if (state.isError) {
          console.log(state.message);
        }
      })
      .addCase(Actualizar_Cliente.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Actualizar_Cliente.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess) {
          console.log(state.user.data);
        }
      })
      .addCase(Actualizar_Cliente.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        if (state.isError) {
          console.log(state.message);
        }
      })
      .addCase(GetDirecciones.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetDirecciones.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.direcciones = action.payload;
        if (state.isSuccess) {
          console.log(state.direcciones.data);
        }
      })
      .addCase(GetDirecciones.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        if (state.isError) {
          console.log(state.message);
        }
      });
  },
});

export default authSlice.reducer;
