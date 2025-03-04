function createLogger(message: string): () => void {
    return function logMessage(): void {
        console.log(message); 
    };
}

const logHello = createLogger("hello word");
const logGoodbye = createLogger("good bye");

logHello();   
logGoodbye(); 