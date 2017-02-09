/**
 * Created by Rohail Najam on 2/10/2017.
 */


'use strict';


const ipRegex = require('ip-regex');
const request = require('request');
const iplocateServiceUrl = "http://freegeoip.net/json/";

/**
 * Get Location information of the IP
 * @param {number} Ip
 * @return {JSON} location Object
 */


function ipToLocation(ip) {

  return new Promise(function (resolve, reject) {
    if (!ipRegex({exact: true}).test(ip)) {
      let error = {message : "Invalid Ip Address"};
      reject(error)
    }else {
      request(iplocateServiceUrl+ ip,function (err, resp, body) {
        if(err){
          reject(err)
        }else {
          resolve(JSON.parse(body))
        }
      });
    }
  });
}


/**
 * Middleware Function for the IP
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 */

function middlewareFunction (req,res,next){

  return ipToLocation(req.ip)
    .then(function (location) {
      req.location = location;
      next();
    })
    .catch(function (error) {
      req.locationError = error;
      next();
    })

}

module.exports = middlewareFunction;