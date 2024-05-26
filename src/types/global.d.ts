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

interface IMessage {
  senderId: string;
  receiverId: string;
  message: string;
  timestamps: any;
}

interface IConversation {
  _id: string;
  participants: {
    sender: IUser,
    receiver: IUser
  },
  message: IMessage
}

interface INotification {
  type: 'newMessage' | 'other';
  text: string;
  room: string;
  senderId: string;
}

interface IPost {
  _id: string;
  owner: IUser;
  images: string[];
  timestamp: string;
  content: string;
  comments: any[];
  createdAt: string;
  updatedAt: string;
}
