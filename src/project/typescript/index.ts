type GenderTypes = "female" | "male";

interface ModifyDataReturn {
  fullName: string;
  companyName: string;
  doubleAge: number;
}

interface AddressProps {
  street: string;
  city: string;
  postcode: string;
  country: string;
}

interface DataShape {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: GenderTypes;
  phone: string;
  address: AddressProps;
  occupation: string;
  company: string;
  avatar: string;
}

const data: DataShape = {
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

function returnFullName(firstName: string, lastName: string): string {
  return firstName + lastName;
}

function returnCompanyName(data: DataShape): string {
  return data.company;
}

function returnDoubleAge(age: number): number {
  return age * 2;
}

function modifyData(data: DataShape): ModifyDataReturn {
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
