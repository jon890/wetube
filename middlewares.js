import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
// "/uploads/videos" 주의 -> 내 컴퓨터의 root 폴더 ex) c:/uploads/videos에 생성된다.
// "uploads/videos" 로 생성하자!

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;

  // test Code START
  res.locals.user = {
    isAuthenticated: false,
    id: 1
  };
  // test Code END

  next();
};

export const uploadVideo = multerVideo.single("videoFile");
