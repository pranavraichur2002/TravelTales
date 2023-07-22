// const BaseJoi = require('joi');
// const sanitizeHtml = require('sanitize-html');

// const extension = (joi) => ({
//     type: 'string',
//     base: joi.string(),
//     messages: {
//         'string.escapeHTML': '{{#label}} must not include HTML!'
//     },
//     rules: {
//         escapeHTML: {
//             validate(value, helpers) {
//                 const clean = sanitizeHtml(value, {
//                     allowedTags: [],
//                     allowedAttributes: {},
//                 });
//                 if (clean !== value) return helpers.error('string.escapeHTML', { value })
//                 return clean;
//             }
//         }
//     }
// });

// const Joi = BaseJoi.extend(extension)
// campgroundSchema without validations
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports.campgroundSchema = {
    campground: {
        title: '',
        price: 0,
        location: '',
        description: ''
    },
    deleteImages: []
};

// reviewSchema without validations
module.exports.reviewSchema = {
    review: {
        rating: 0,
        body: ''
    }
};
