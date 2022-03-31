module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '123245fa351d89c422c0258335ce4902'),
  },
});
