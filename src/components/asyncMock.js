 const products = [
     {
     id: '1',
     name: "Funda premium",
     price: 4500,
     stock: 10,
     category: 'fundas',
     img: 'https://i.ibb.co/2k1zDdx/funda-premium.webp',
     description: 'funda premium',
     },
     {
     id: '2',
     name: "Funda cuero automotor",
     price: 2800,
     stock: 50,
     category: 'fundas',
     img: 'https://i.ibb.co/qLGvB1P/funda-cuero-automotor.webp',
     description: 'funda cuero automotor',
     },
     {
     id: '3',
     name: "Cubre auto",
     price: 10000,
     stock: 3,
     category: 'cobertores',
     img: 'https://i.ibb.co/2krCvmJ/cubre-auto.webp',
     description: 'funda premium',
     }
 ]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}


