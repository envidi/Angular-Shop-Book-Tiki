export interface User{
    message : string,
    user : DataUser
}
export interface DataUser {
    userName : string,
    password ?:string,
    confirmPassword ?: string,
    email : string,
    role ?: string,
    _id ?: number | undefined ,
    createdAt ?: string,
    updatedAt ?:string
}
export interface SignInUser {
    message ?: string,
    accessToken : string,
    userExist : DataUser
}
export interface userDetail{
    userName : string,
    password ?:string,
    confirmPassword ?: string,
    email : string,
    role ?: string,
    _id ?: number | undefined ,
    createdAt ?: string,
    updatedAt ?:string

}