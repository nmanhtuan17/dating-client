
interface IUser {
  _id: string,
  email: string;
  fullName: string;
  age: number;
  gender: 'male' | 'female';
  address: string;
  seeking: 'male' | 'female';
  avatar: string;
  likes: IUser[];
}
