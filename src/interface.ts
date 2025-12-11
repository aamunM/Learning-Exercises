import userData from "./user-data.json";
import userAdminData from "./user-data-admin.json";

type FavouriteColour = "red" | "green" | "blue";

interface AddressProps {
  street: string;
  city: string;
  postcode: string;
  country: string;
}

interface UserShape {
  id: number;
  random?: string;
  name: string;
  email: string;
  age: number;
  address: AddressProps;
  phone: string;
  favouriteColour: FavouriteColour;
  isActive: boolean;
  createdAt: string;
}

interface AdminUserShape extends UserShape {
  isAdmin: boolean;
}

interface UsersShape {
  users: UserShape[];
}

interface AdminsShape {
  admins: AdminUserShape[];
}

const myUsers = userData as UsersShape;
const adminUsers = userAdminData as AdminsShape;

console.log({
  user: myUsers,
  admin: adminUsers,
});
