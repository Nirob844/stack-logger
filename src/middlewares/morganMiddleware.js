const morgan = require("morgan");
const { logger } = require("../../../logger/middlewares/logger");
const morganMiddleware = morgan(
  "correlation-id = :req[x-correlation-id] || :method :url :status :res[content-length] - :response-time ms",
  {
    stream: {
      // Configure Morgan to use our custom logger with the http severity
      write: (message) => logger.http(message.trim()),
    },
  }
);

module.exports = morganMiddleware;
