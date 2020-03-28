
import './styles/global';

interface User {
  id: number
  username: string
  firstname: string
  lastname: string
}

const newUser: User = {
  id: 123,
  username: 'bentom03',
  firstname: 'Benny',
  lastname: 'Thomas'
}

console.log(newUser);
