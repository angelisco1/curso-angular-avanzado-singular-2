import { Response, Request } from "express";
import { sign } from 'jsonwebtoken'

const usuariosRegistrados = [
  { username: 'cfalco', name: 'Charles Falco', password: '1234', email: 'cfalco@gmail.com' },
  { username: 'oblake', name: 'Octavia Blake', password: '1234', email: 'oblake@gmail.com' },
]

// Esto debería de estar en las variables de entorno
export const SECRET = 'sdjhajbfeubebvnwklvwuagnsdnñlksngiosgioehg'

const login = (req: Request, res: Response) => {
  const { username, password } = req.body
  console.log({ username, password })

  const usuario = usuariosRegistrados.find(usuario => usuario.username === username && usuario.password === password)

  if (!usuario) {
    return res.status(401).json({ msg: 'Las credenciales son invalidas...' })
  }

  const payload = {
    name: usuario.name
  }

  const jwt = sign(payload, SECRET)

  return res.json({ jwt })
}

export default { login }