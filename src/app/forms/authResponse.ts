import {Role} from "../dto/role";

export interface AuthResponse {
  token: string,
  login: string,
  roles: Role[]
}
