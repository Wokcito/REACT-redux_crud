import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR } from "../types/index";

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(agregarProducto());

        try {
            dispatch(agregarProductoExito(producto));
        } catch (error) {
            dispatch(agregarProductoError(true));
        }
    };
}

const agregarProducto = () => ({
    types: AGREGAR_PRODUCTO,
    payload: true,
});

// Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
    types: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
});

// Si hubo error
const agregarProductoError = () => {};
