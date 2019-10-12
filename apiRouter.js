var express = require('express');


var macdoCtrl = require('./Controllers/macdonaldsController');


exports.route = (()=>{

    var apiRouter = express.Router();

    apiRouter.route('/macdo/:id').get(macdoCtrl.getDataForContries);

    return apiRouter;

})();

