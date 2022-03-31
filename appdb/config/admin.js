module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0b5c5753d7ee2b9d29a965f3f08eb800'),
  },
});
