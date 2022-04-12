export const productos = [
    {
        id: 1,
        nombre: 'Producto 1',
        precio: 350,
        stock: 10,
        imagen: 'https://picsum.photos/200/300/?random'
    },

    {
        id: 2,
        nombre: 'Producto 2',
        precio: 500,
        stock: 5,
        imagen: 'https://picsum.photos/200/300/?random'
    },

    {
        id: 3,
        nombre: 'Producto 3',
        precio: 400,
        stock: 8,
        imagen: 'https://picsum.photos/200/300/?random'
    }
]

export const producto = {
    id: 1,
    nombre: 'Producto 1',
    precio: 350,
    stock: 10,
    imagen: 'https://picsum.photos/200/300/?random'
}

export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto);
        }, 2000)
    })
}