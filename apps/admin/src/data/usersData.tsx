export interface IUser {
  id?: string
  name: string
  email: string
  title?: string
  avatar?: string
}

export const usersData: IUser[] = [
  {
    id: 'ID00001',
    name: 'John Doe',
    email: 'jhondoe@mail.com',
    title: 'Software Engineer',
    avatar: '/images/thumb-1.jpg',
  },
  {
    id: 'ID00002',
    name: 'Ron Vargas',
    email: 'jhondoe@mail.com',
    title: 'UI/UX Designer',
    avatar: '/images/thumb-2.jpg',
  },
  {
    id: 'ID00003',
    name: 'Luke Cook',
    email: 'jhondoe@mail.com',
    title: 'HR Excutive',
    avatar: '/images/thumb-3.jpg',
  },
  {
    id: 'ID00004',
    name: 'Joyce Freeman',
    email: 'jhondoe@mail.com',
    title: 'Frontend Developer',
    avatar: '/images/thumb-4.jpg',
  },
  {
    id: 'ID00005',
    name: 'Samantha Phillips',
    email: 'jhondoe@mail.com',
    title: 'Compiliance Analyst',
    avatar: '/images/thumb-5.jpg',
  },
]
