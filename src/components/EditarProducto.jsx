import React, { useEffect, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

const EditarProducto = () => {
    const dispatch = useDispatch();

    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
    });

    // Producto a editar
    const productoeditar = useSelector((state) => state.productos.productoeditar);

    useEffect(() => {
        setProducto(productoeditar);
    }, [productoeditar]);

    const onChangeForm = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        });
    };

    const { nombre, precio } = producto;

    console.log(producto);

    return (
        <div className="row justify-content-center">
            <div className="col-md-8 ">
                <div className="card p-2">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>
                    </div>

                    <form>
                        <div>
                            <label>Nombre Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="nombre"
                                onChange={onChangeForm}
                                value={nombre}
                            />
                        </div>
                        <div>
                            <label>Precio Producto</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="precio"
                                onChange={onChangeForm}
                                value={precio}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100 m-1">
                            GUARDAR CAMBIOS
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditarProducto;
