import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

// S3 initialize
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATEKEY
});

const multerVideo = multer({
  storage: multerS3({ s3, acl: "public-read", bucket: "fostube/video" })
});
const multerAvatar = multer({
  storage: multerS3({ s3, acl: "public-read", bucket: "fostube/avatar" })
});
// "/uploads/videos" 주의 -> 내 컴퓨터의 root 폴더 ex) c:/uploads/videos에 생성된다.
// "uploads/videos" 로 생성하자!

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
