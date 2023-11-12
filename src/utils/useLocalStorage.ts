export const setItem = (name: string, data: any) => {
    localStorage.setItem(name, data)
}
export const getItem = (name: string) => {
    return typeof localStorage !== 'undefined' ? localStorage.getItem(name) : null

}
export const removeItem = (name: string) => {
    return localStorage.removeItem(name)
}