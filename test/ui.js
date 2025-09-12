export { UI };
class UI {
    constructor() {
        this.listeners = [];
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    move(n) {
        
    }

    roll() {
        const event = {
            type: 'roll',
            value: 4
        }
        
        this.listeners.forEach((listener) => listener.update(event));
    }
}