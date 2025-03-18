interface Entity {
    id: number;
}
interface ToJsonStringify extends
Entity {
    name: string;
    surname?: string;
}
const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
}

const json_data: string = JSON.stringify(data)
console.log(json_data)