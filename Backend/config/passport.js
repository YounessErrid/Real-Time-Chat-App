const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user.model');

// Passport JWT strategy configuration
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new jwtStrategy(options, async (jwt_payload, done) => {
    try {
      // Find the user based on the JWT payload (userId)
      const user = await User.findById(jwt_payload.userId);
      
      if (!user) {
        return done(null, false, { message: 'User not found' });
      }

      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  })
);

module.exports = passport;
