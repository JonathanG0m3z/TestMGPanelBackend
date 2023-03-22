const { Router } = require('express');
const Subscriber = require('../models/Subscriber');
const routes = Router();

routes.get('/subs', async (req, res) => {
    try {
      const subs = await Subscriber.find();
      res.status(200).json(subs);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  routes.post('/subs', async (req, res) => {
    try {
        const {name, email} = req.body;
        if(name==='' ||  email==='' || name===undefined ||  email===undefined) throw Error("Information incomplete");
        const newSubscriber = new Subscriber(req.body); 
        const subscriberSaved = await newSubscriber.save();
        res.json(subscriberSaved);
    } catch (err) {
      res.status(500).send({error: err.message});
    }
  });

  routes.put('/subs/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const subscriberUpdated = await Subscriber.findByIdAndUpdate(id, req.body);
        if(!subscriberUpdated) throw Error("ID doesn't exist");
        else res.status(200).json({message: "Subscriber updated"});
    } catch (err) {
      res.status(500).send({error: err.message});
    }
  });

  routes.delete('/subs/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const subscriberDeleted = await Subscriber.findByIdAndDelete(id);
        if(!subscriberDeleted) throw Error("ID doesn't exist");
        else res.status(200).json({message: "Subscriber deleted successfully"});
    } catch (err) {
      res.status(500).send({error: err.message});
    }
  });

  module.exports = routes;