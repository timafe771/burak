import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/* Restaurant */

routerAdmin.get("/", restaurantController.getHome);

routerAdmin.get("/login", restaurantController.getLogin);

routerAdmin.post("/login", restaurantController.processLogin);

routerAdmin
  .get("/singup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

/** Product */
/** User */

export default routerAdmin;