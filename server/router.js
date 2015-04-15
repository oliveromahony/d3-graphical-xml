// requires
var net = require('net');
var express = require('express');   // call express
var xmlReader = require('./services/readXml');

// variables
var router = express.Router();
var API = '/api/v1/';
var ROOT = '/';

// all of our routes will be prefixed with /api
var init = function (app) {
    app.use(API, router);
};

router.get(ROOT, function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/plans/:plan_id')
.get(function (req, res) {
   xmlReader.getPlan(function (plan) {
        res.setHeader('Content-Type', 'application/json');
        res.json(plan);
   });
}); 

module.exports.init = init;