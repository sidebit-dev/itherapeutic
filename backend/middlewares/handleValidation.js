const {validationResult} = require('express-validator');

const validate = (rep, res, next) => {

   const errors = validationResult(rep);
   
   if(errors.isEmpty()){
    return next();
   }

   const extractedErrors = [];

   errors.array().map((err) => extractedErrors.push(err.msg));

   return res.status(422).json({
        errors: extractedErrors,
   });
};

module.exports = validate;