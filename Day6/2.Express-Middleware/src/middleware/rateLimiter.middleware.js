let requestCounts = {};
const LIMIT = 15;
const WINDOW_TIME = 60 * 1000; // 1 minute

export const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, startTime: currentTime };
    return next();
  }

  const elapsed = currentTime - requestCounts[ip].startTime;

  if (elapsed > WINDOW_TIME) {
    requestCounts[ip] = { count: 1, startTime: currentTime };
    return next();
  }

  if (requestCounts[ip].count >= LIMIT) {
    return res.status(429).json({
      error: "Too many requests, please try again later",
    });
  }

  requestCounts[ip].count++;
  next();
};
