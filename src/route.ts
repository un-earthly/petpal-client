const baseUrl = process.env.BASE_URL || "http://localhost:8000";
const apiUrl = `${baseUrl}/api/${process.env.version || "v1"}`


// auth apis

const authBase = `${apiUrl}/auth`


export const loginApi = `${authBase}/login`
export const registerApi = `${authBase}/register`


// user apis

const userBase = `${apiUrl}/users`


export const getUsersApi = `${userBase}/`
export const updateUsersApi = `${userBase}/update`
export const updatePasswordApi = `${userBase}/password/update`
export const deleteUserApi = `${userBase}/delete`
export const getUsersBookingsApi = `${userBase}/bookings`

// pet apis

const petBase = `${apiUrl}/pets`


export const getPetsApi = `${petBase}/`
export const createPetsApi = `${petBase}/`
export const getPetByIdApi = (id: string | number) => `${petBase}/${id}`
export const updatePetByIdApi = (id: string | number) => `${petBase}/${id}`
export const deletePetByIdApi = (id: string | number) => `${petBase}/${id}`





// service apis

const servicesBase = `${apiUrl}/services`


export const getservicesApi = `${servicesBase}/`
export const searchServicesApi = `${servicesBase}/search`
export const getServiceDetailsApi = (id: string | number) => `${servicesBase}/${id}`
export const getServicesReviewsApi = (id: string | number) => `${servicesBase}/reviews/${id}`
export const addServiceReviewApi = (id: string | number) => `${servicesBase}/reviews/add/${id}`
export const bookServiceApi = (id: string | number) => `${servicesBase}/${id}/book`
export const checkoutServiceApi = `${servicesBase}/cart/checkout`



// booking apis

const bookingsBase = `${apiUrl}/bookings`


export const getBookingsApi = `${bookingsBase}/`
export const getBookingsDetailsApi = (id: string | number) => `${bookingsBase}/${id}`
export const cancelBookingsApi = (id: string | number) => `${bookingsBase}/${id}/cancel`
export const updateBookingStatusApi = (id: string | number) => `${bookingsBase}/${id}/status/update`



// admin apis

const adminBase = `${apiUrl}/admin`
const adminContentOparations = adminBase + "/content"

export const getAllContentApi = adminContentOparations
export const addContentApi = adminContentOparations + "/add"
export const getContentDetailsApi = (id: string | number) => `${adminContentOparations}/${id}`
export const editContentDetailsApi = (id: string | number) => `${adminContentOparations}/${id}`



// admin apis

const superAdminBase = `${apiUrl}/super-admin`

export const getAllAdminsApi = superAdminBase
export const addAdminApi = superAdminBase + "/create"
export const getAdminDetailsApi = (id: string | number) => `${adminContentOparations}/${id}`
export const editAdminDetailsApi = (id: string | number) => `${adminContentOparations}/${id}/edit`
