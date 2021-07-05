interface uuidInterface {
    create(pre: string): string;
}

class UUID implements uuidInterface {
    constructor() {
    };
    create(pre) {
        let random;
        try {
            const arr = new Uint32Array(1);
            window.crypto.getRandomValues(arr);
            random = arr[0] & 2079910271;
        } catch (b) {
            random = Math.floor(Math.random() * 2079910271);
        }
    
        return pre + '·' + random.toString(36);
    }
};

export default new UUID();
