import Axios from "./Axios";

//login user API call
const loginService = async (user) => {
  try {
    const response = await Axios.post("login_cliente", user);
    if (response.data !== undefined) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error in loginService:", error);
    return undefined;
  }
};

const Obtener_Cliente = async ({ id, token }) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    const response = await Axios.get(`obtener_cliente_guest/${id}`, {
      headers,
    });
    if (response.data !== undefined) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error in Obtener_Cliente service:", error);
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};

const actualizar_perfil_cliente_guest = async ({ id, user, token }) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    const response = await Axios.put(
      `actualizar_perfil_cliente_guest/${id}`,
      user,
      { headers }
    );
    if (response.data) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error in actualizar_perfil_cliente_guest service:", error);
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};


//carrito user (START)
const AddCart = async ({ data, token }) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await Axios.post("agregar_carrito_cliente", data, {
      headers,
    });
    if (response.data !== undefined) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error in AddCart service:", error);
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};

const GetCart = async ({ id, token }) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await Axios.get(`obtener_carrito_cliente/${id}`, {
      headers,
    });
    if (response.data !== undefined) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error in GetCart service:", error);
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};

const DeleteCart = async ({ id, token }) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await Axios.delete(`eliminar_carrito_cliente/${id}`, {
      headers,
    });
    if (response.data !== undefined) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error in DeleteCart service:", error);
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};
//carrito user (END)


//Direcciones (START)
const GetDirecciones = async ({ id, token }) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await Axios.get(`listar_direcciones_cliente/${id}`, {
      headers,
    });
    if (response.data !== undefined) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error in listar_direcciones_cliente service:", error);
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};


//Direcciones (END)



export const authService = {
  loginService,
  AddCart,
  GetCart,
  DeleteCart,
  Obtener_Cliente,
  actualizar_perfil_cliente_guest,
  GetDirecciones,
};
