var Joi = require('joi');

var validation =  Joi.object().keys({
  view: Joi.object().keys({
    allow: Joi.boolean()
  })
});

var superAdministrator = {
  view: { allow: true }
};

var administrator = {
  view: { allow: true }
};

var globalModerator = {
  view: { allow: true },
};

var moderator = {
  view: { allow: true },
};

var patroller = {
  view: { allow: true },
};

var user = {
  view: { allow: true },
};

var newbie = {
  view: { allow: true },
};

var banned = {
  view: { allow: true },
};

var anonymous = {
  view: { allow: true },
};

var layout = {
  view: { title: 'View Portal' },
};

module.exports = {
  validation: validation,
  layout: layout,
  defaults: {
    superAdministrator: superAdministrator,
    administrator: administrator,
    globalModerator: globalModerator,
    moderator: moderator,
    patroller: patroller,
    user: user,
    newbie: newbie,
    banned: banned,
    anonymous: anonymous,
    private: {}
  }
};
