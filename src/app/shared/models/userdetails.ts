export interface user {
  fname: string;
  lname: string;
  email: string;
  gender: string;
  dob:string;
  phone:number;
  password: string;
}

export const users = [
  {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    phone:'',
    password: ''
  }

]



export interface confirm {
  title: string;
  confirmText: string;
  cancelText: string;
}
