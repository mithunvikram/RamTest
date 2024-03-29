import mongoose = require('mongoose');
import * as jwt from 'jsonwebtoken';
import * as request from 'request';

import { Signinschema } from '../model/Signin';
import * as Constants from '../config/Constants';

const signinmodel = mongoose.model('Signin', Signinschema);

export class Proxydao {

    public userdao(userdetails, callback) {

            var role = userdetails.role;
                var jsonbody = {
                    "variables": {
                        "role": {
                            "value": role,
                            "type": "String"
                        }
                    }
                }
                var posturl = `${Constants.camundaUrl}/accesslevel`

                var camundaresponse = [];
                request.post({ url: posturl, json: jsonbody }, function (error, response, body) {
                    camundaresponse.push(body);
                    callback(camundaresponse);
                })
    }
}