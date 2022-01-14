export class Icard {
    
        id: number;
        image: string;
        value: number;
        state: 'default' | 'flipped' | 'matched';

        constructor(id : number, image: string, value:number, state: 'default' | 'flipped' | 'matched'){
            this.id = id,
            this.image = image,
            this.value = value,
            this.state = state

        }

        
        /* createImage(order: number): void;
        returnTheCard(): void;
        hideCard(): void; */
       
}
