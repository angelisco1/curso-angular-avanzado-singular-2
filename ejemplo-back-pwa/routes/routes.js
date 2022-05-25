const express = require("express");
const axios = require("axios");
const webPush = require('web-push')
const { getSuscripciones } = require('../models/suscripcion')

const appRouter = express.Router();

appRouter.post("/vendehumos", async (req, res) => {
  const vendehumo = req.body;

  // console.log(vendehumo)

  const resp = await axios.post("http://localhost:3000/vendehumos", vendehumo)

  const payload = {
    notification: {
      title: 'Nuevo vendehumos 🥳',
      body: 'Ve a votar a ' + resp.data.nombre
    }
  }

  // ENVIAR NOTIFICACIONES PUSH
  const suscripciones = await getSuscripciones()
  suscripciones.forEach(async (s) => {
    console.log({s})
    const value = await webPush.sendNotification(s, JSON.stringify(payload))
    console.log({value})
  })

  return res.status(201).json(resp.data);
});

module.exports = appRouter;
