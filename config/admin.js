module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '493c1a36025081cbcde6e9d2258a1780'),
  },
});
