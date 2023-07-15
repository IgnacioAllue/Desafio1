 
class ProductManager { 

    constructor () {
        this.products = []
    }

    getProducts(){
        return this.products;
    }

    buscarProducts(id){

        let products = this.products.find(elem => elem.id === id)
        if (products) {
            id = 1
        } else {
            id = products[products.length-1].id+1
        }
        
        return products
    }

    agregarProducts(name,description,price,thumbnail,code,stock){
        let nuevoProducto = {
            name,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        
        if (name, description, price, thumbnail, code, stock){
            this.products.push(nuevoProducto)
        }else {
            return console.log('Faltan productos a especificar')
        }
    }
}

const codigoExistente = this.products.find (elem => elem.code === code)
    if(codigoExistente){
        return console.log('Codigo ya existente, utilize otro')
    }

let manager = new ProductManager()

manager.agregarProducts('Producto 1', 'Este producto es...', 700, 'Sin imagen', 25, 30 )
manager.getProducts()