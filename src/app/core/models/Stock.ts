import { Book } from "./Book";

export class Stock{

    constructor(
        id: string,
        quantity: number,
        minQuantity: number,
        maxQuantity: number,
        acquisitionPrice: number,
        salePrice: number,
        lastUpdated: string,
        book: Book){    
    }
    static responseToStock(obj: Object){
        
    }

}