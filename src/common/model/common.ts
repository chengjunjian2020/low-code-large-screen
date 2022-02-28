type ResponseModel<T> = {
    code: number,
    msg: string,
    data: Array<T> | Object
}

export type {
    ResponseModel
}