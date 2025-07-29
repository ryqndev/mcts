export interface Node<T> {
    move: any;
    wins: number;
    visits: number;

    parent: Node<T> | null;
    children: {
        [hash: string]: Node<T>
    };
}