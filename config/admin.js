module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e8c414825188726525bf43790bb0cbb7'),
  },
});
