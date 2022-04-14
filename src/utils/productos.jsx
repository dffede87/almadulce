export const productos = [
    {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Esta es la descripción del producto nro. 1',
        precio: 350,
        stock: 15,
        categoria: 'tartas',
        imagen: 'https://picsum.photos/200/300/?random'
    },

    {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Esta es la descripción del producto nro. 2',
        precio: 500,
        stock: 5,
        categoria: 'tortas',
        imagen: 'https://picsum.photos/200/300/?random'
    },

    {
        id: 3,
        nombre: 'Producto 3',
        descripcion: 'Esta es la descripción del producto nro. 3',
        precio: 400,
        stock: 8,
        categoria: 'pasteleria',
        imagen: 'https://picsum.photos/200/300/?random'
    }
]

export const traerProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (producto) => producto.categoria === categoryId
        )
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(productos)
        }, 1000)
    })
}

export const traerProducto = (id) => {
    return new Promise((resolve, reject) => {
        const productoElegido = productos.find((producto) => producto.id === Number(id))
        setTimeout(() => {
            resolve(productoElegido);
        }, 500)
    })
}