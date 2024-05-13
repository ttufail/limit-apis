const rateLimit = require("express-rate-limit");

const rateLimitMiddleware = rateLimit({
  limit: 2,
  windowMs: 60 * 1000, //hh mm ss ms
  message: "You have exceeded API calls per minute",
});

module.exports = rateLimitMiddleware;
