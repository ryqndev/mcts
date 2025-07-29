import { Node } from "./mcts-node.types";

export interface MCTS<T> {
    root?: Node<T>;

    select(): void;
    expand(): void;
    simulate(): void;
    backpropagate(): void;
}
