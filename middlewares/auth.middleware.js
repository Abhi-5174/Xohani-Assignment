const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token || token !== "dummy_auth") {
      const err = new Error("Unauthorized!");
      err.status = 403;
      throw err;
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default isAuthenticated;
