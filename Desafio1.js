 
class ProductManager { 
    
    products;
    #precioBaseGanancias

    constructor () {
        this.products = []
    }

    getNewId(){
        return this.products.length + 1;
    }

    getProducts(){
        console.log(this.products);
    }

    buscarProducts(id){

        if (id) {
            let products = this.products.find(elem => elem.id === id)  
        } else {
            console.log("No se encontro")
        }
        
        return products
    }

    agregarProducts(nombre,descripcion,precio,img,codigo,stock){
        let nuevoProducto = {
            id: this.getNewId(),
            nombre,
            descripcion,
            precio,
            img,
            codigo,
            stock
        }
        
        if (id, nombre, descripcion, precio, img, codigo, stock){
            this.products.push(nuevoProducto)
        }else {
            return console.log('Faltan productos a especificar')
        }
    }


}

const codigoExistente = this.products.find (product => product.codigo === codigo)
    if(codigoExistente){
        return console.log('Codigo ya existente, utilize otro')
    }


let manager = new ProductManager()

manager.agregarProducts('Producto 1', 'Este producto es...', 700, 'Sin imagen', 25, 30 )
manager.getProducts()