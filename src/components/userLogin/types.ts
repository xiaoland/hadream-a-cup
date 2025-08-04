export interface LoginCredentials {
  username: string
  password: string
}

export interface LoginResponse {
  id: number
  username: string
  roles: string[]
}

export interface JWTPayload {
  iss: string
  iat: number
  exp: number
  sub: string
  roles: string[]
}

export interface User {
  id: number
  username: string
  roles: string[]
}