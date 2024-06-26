const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // app.get("/api/test/all", controller.allAccess);

  // app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  // app.get(
  //   "/api/test/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

  // app.get(
  //   "/api/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );
  app.get("/api/users", controller.getAllUsers);
  app.get("/api/users/:id", controller.getUser);
  app.get("/api/users/:id/bids", controller.getBidsByUser);
  app.get("/api/user/myBids", [authJwt.verifyToken], controller.getMyBids);
  app.get(
    "/api/user/myWinnerBids",
    [authJwt.verifyToken],
    controller.getMyWinnerBids
  );
  app.post(
    "/api/users/bids/:bidId/payment",
    [authJwt.verifyToken],
    controller.postBidPayment
  );
};
