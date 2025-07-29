import { MCTSNode } from './mcts-node';
import type { MCTS as MCTSType } from './mcts.types'

export class MCTS<T> implements MCTSType<T> {
    public root;

    constructor() {
        this.root = new MCTSNode(null);
    }

    select(): void {
        throw new Error('Method not implemented.');
    }
    expand(): void {
        throw new Error('Method not implemented.');
    }
    simulate(): void {
        throw new Error('Method not implemented.');
    }
    backpropagate(): void {
        throw new Error('Method not implemented.');
    }
}