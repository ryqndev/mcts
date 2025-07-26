import { Node } from "./mcts-node.types";

export class MCTSNode<T> implements Node<T> {
    public move: any;
    public parent;
    public wins = 0;
    public visits = 0;
    public children = {};

    constructor(parent: Node<T>) {
        this.parent = parent;
    }
}