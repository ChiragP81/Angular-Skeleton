export interface user {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  password: string;
}

export const users = [
  {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    password: ''
  }

]



export interface confirm {
  title: string;
  confirmText: string;
  cancelText: string;
}
