import { createMachine } from 'xstate';

export const characterMachine = createMachine({
    id: 'nameOf',
    initial: 'initialState',
    states: {
        initialState: {},
    }
});