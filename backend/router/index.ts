import express from "express";
import {
    createComment,
    createTopic,
    getTopics,
} from "backend/core/forum";
import {loginUser, logoutUser, refreshUser, updateUser, updateUserPassword, updateAvatar, createUser} from "backend/core/user";
import auth from "backend/middlewares/auth";
import {getTopic} from "backend/core/forum";
import {createResult, getLeaderboard} from "backend/core/game";
import path from "path";
import {UPLOAD_DIR} from "backend/dir";

const router = express.Router();

router.get('/', (
    request,
    response
) => {
    response.status(200).json({
        message: 'Success pinged!'
    });
});

router.get("/forum/topic/:id", getTopic);

router.get("/forum/topic", getTopics);

router.post("/forum/topic", auth, createTopic);

router.post("/forum/comment", createComment);


router.post("/game/result", auth, createResult);

router.get("/game/result", getLeaderboard);


router.post("/user", createUser);

router.put("/user", auth, updateUser);

router.put("/user/password", auth, updateUserPassword);

router.get("/user/refresh", refreshUser);

router.post("/user/login", loginUser);

router.post("/user/logout", logoutUser);

router.put("/user/avatar", auth, updateAvatar);

router.use('/uploads/avatar', express.static(path.resolve(UPLOAD_DIR, 'avatar')));

export default router;