import { Router } from "express";


 export const getUserRoutes = (userController) => {

    //Initialize the router
    const router = Router();
    
    // Define the routes and associate them with the controller methods
    router.get("/", userController.getAllUsers);
    router.get("/:id", userController.getUserById);
    router.post("/", userController.createUser);
    router.put("/:id", userController.updateUser);
    router.delete("/:id", userController.deleteUser);
    return router;
};