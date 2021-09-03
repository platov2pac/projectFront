import {Role} from "./role";

export interface User{
  login:string,
  password:string,
  email:string,
  dob:string
  roles:Role[]
}
