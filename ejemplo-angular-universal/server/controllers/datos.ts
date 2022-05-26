import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { SECRET } from './auth'

const datos = [
  'dato 1',
  'dato 2',
  'dato 3',
]

// Esto debería de ir en un archivo de validaciones
const validaToken = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization

  if (!authorization) {
    return res.status(401).json({ msg: 'No hay token' })
  }

  // Bearer jkhdjkashjdkahskd
  const [, token] = authorization.split(' ')

  try {

    const payload = verify(token, SECRET)
    return next()

  } catch (err) {
    return res.status(401).json({ msg: 'El token no es valido' })
  }
}

const getDatos = (req: Request, res: Response) => {

  return res.json(datos)

}

export default {
  getDatos,
  validaToken
}