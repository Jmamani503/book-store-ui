import { FormGroup } from "@angular/forms"

export interface StockCreateRequest{
    minQuantity: number,
    maxQuantity: number,
    book: Book
}

interface Book{
    title: string,
    author: string,
    image: string,
    genres: string[],
    edition: string
}
