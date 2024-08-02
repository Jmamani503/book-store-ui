export interface Stock{
    id: string,
    quantity: number,
    minQuantity: number,
    maxQuantity: number,
    acquisitionPrice: number,
    salePrice: number,
    lastUpdated: string,
    book: Book
}

interface Book{
    id: string,
    title: string,
    author: string,
    genres: string[],
    image: string,
    edition: string,
    description: string
}