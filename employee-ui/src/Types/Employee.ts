class Employee {

    public id?: number;
    public firstName?: string;
    public lastName?: string;
    public email?: string;

    public constructor(id?: number, firstName?: string, lastName?: string, email?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    };
}

export default Employee;