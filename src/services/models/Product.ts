export class Product {

    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly price: number,
        public readonly description: string,
        public readonly imageUrl: string,
        public readonly isNew: boolean = false,
        public readonly isFeatured: boolean = false
    ) {
    }
}