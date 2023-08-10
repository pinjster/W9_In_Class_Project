

export interface LoggedUser {
    username: string,
    token: string
}

export interface Postable {
    body: string,
    timestamp: string | Date
}
