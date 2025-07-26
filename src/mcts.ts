import { MCTSNode } from './mcts-node';
import type { MCTS as MCTSType } from './mcts.types'

export class MCTS<T> implements MCTSType<T> {
    root;

    constructor() {
        this.root = new MCTSNode();
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