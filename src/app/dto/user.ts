import {Role} from "./role";

export interface User{
  login:string,
  password:string
  roles:Role[]
}
