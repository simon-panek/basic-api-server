'use strict'; 

const express = require('express');
const Tree = require ('../models/tree-model.js');
const tree = new Tree();
const validator = require('../middleware/validator.js');

const router = express.Router();

//Routes

router.get('/tree', getTree);
router.get('/tree/:id', getOneTree);
router.post('/tree', validator, createTree);
router.put('/tree/:id', validator, updateTree);
router.delete('/tree/:id', deleteTree);

//Route Handlers

function getTree (req, res) {
  const allTree = tree.get();
  res.status(200).json(allTree);
}

function getOneTree (req, res) {
  const id = parseInt(req.params.id);
  const oneTree = tree.get(id);
  res.status(200).json(oneTree);
}

function createTree (req, res) {
  const obj= req.body;
  const newTree = tree.create(obj);
  res.status(200).json(allTree);
}

function updateTree (req, res) {
  const id = req.params.id;
  const obj = req.body;
  const updatedTree = tree.update(id, obj);
  res.status(200).send('It was updated ');
}

function deleteTree (req, res) {
  const id = req.params.id;
  const deleteTwoTree = tree.delete(id);
  res.status(200).send('Chopped down tree');
}

module.exports = router;