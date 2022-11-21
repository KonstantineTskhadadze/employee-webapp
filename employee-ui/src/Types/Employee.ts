import { convertCompilerOptionsFromJson } from "typescript";

export default class Employee {

    private readonly id: number;
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly email: string;

    public constructor(id: number, firstName: string, lastName: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    };

    public toString(): string {
        return `Person[id: ${this.id}, 
                firstName: ${this.firstName}, 
                lastName: ${this.lastName}, 
                email: ${this.email}]`;
    }
}

