"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    id: 1,
    firstName: "Emma",
    lastName: "Thompson",
    email: "emma.thompson@example.com",
    age: 28,
    gender: "female",
    phone: "+44 20 7946 0958",
    address: {
        street: "123 Baker Street",
        city: "London",
        postcode: "NW1 6XE",
        country: "United Kingdom",
    },
    occupation: "Software Engineer",
    company: "TechCorp Ltd",
    avatar: "https://i.pravatar.cc/150?img=1",
};
function returnFullName(firstName, lastName) {
    return firstName + lastName;
}
function returnCompanyName(data) {
    return data.company;
}
function returnDoubleAge(age) {
    return age * 2;
}
function modifyData(data) {
    const fullName = returnFullName(data.firstName, data.lastName);
    const companyName = returnCompanyName(data);
    const doubleAge = returnDoubleAge(data.age);
    return {
        fullName,
        companyName,
        doubleAge,
    };
}
const finalModifyData = modifyData(data);
console.log(finalModifyData);
//# sourceMappingURL=index.js.map