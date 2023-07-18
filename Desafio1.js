 
class ProductManager { 

    constructor () {
        this.products = []
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        let products = this.getProducts()
        let idEncontrado =  products.find(product => product.id === id)
        let producto = idEncontrado ? idEncontrado : {msg: 'producto no encontrado actualmente'}
        return producto
    }

    agregarProducts(name, description, price, thumbnail, code, stock){
        let id 
        if (this.products.length === 0) {
            id=1
        } else {
            id = this.products[this.products.length - 1].id +1
        }

        const newProduct = {
            id,
            name,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct)
    }
}

const codigoExistente = this.products.find (products => products.code === code)
    if(codigoExistente){
        return console.log('Codigo ya existente, utilize otro')
    }

const manager1 = new ProductManager()
manager1.agregarProducts('Producto 1', 'Este producto es...', 700, 'Sin imagen', 25, 30 )
console.log(manager1.getProducts())
let product = manager1.getProductById(1)
console.log(product)