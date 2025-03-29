export default (key, value, res) => {
  res.cookie(key, value, {
    http: true,
    secure: process.env.NODE_ENV === "production",
  });
};
