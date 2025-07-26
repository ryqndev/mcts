export interface Node<T> {
    move: any;
    wins: number;
    visits: number;

    parent: Node<T>;
    children: {
        [hash: string]: Node<T>
    };
}