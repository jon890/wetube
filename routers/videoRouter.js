import express from "express";
import routes from "../routes";
import {
  videoDetail,
  deleteVideo,
  postUpload,
  getUpload,
  postEditVideo,
  getEditVideo
} from "../controllers/videoControllers";
import { uploadVideo, onlyPrivate } from "../middlewares";

export const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
