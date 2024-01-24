import bcrypt from 'bcrypt'

const usuarios = [
  {
    nombre: 'Max',
    email: 'max@max.com',
    confirmado: 1,
    password: bcrypt.hashSync('password',10)
  }
]

export default usuarios