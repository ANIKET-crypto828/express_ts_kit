import {Router} from "express";
import AuthController from "../controllers/AuthController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
const router = Router();

// Auth Routes
router.post("/auth/login", AuthController.login);

// Chat Group Routes
router.get("/chat-group", AuthMiddleware, ChatGroupController.index);
router.get("/chat-group/:id", AuthMiddleware, ChatGroupController.show);
router.post("/chat-group", AuthMiddleware, ChatGroupController.store);
router.put("/chat-group/:id", AuthMiddleware, ChatGroupController.update);
router.delete("/chat-group/:id", AuthMiddleware, ChatGroupController.destroy);

export default router;