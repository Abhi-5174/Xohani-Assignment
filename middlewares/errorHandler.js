export default (err, req, res, next) => {
  if (err) {
    if (process.env.NODE_ENV !== "production") {
      console.log(err.stack);
    }
    return res
      .status(err.status || 500)
      .json({ error: err.message || "Internal server error" });
  }
};
