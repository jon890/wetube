import routes from "./routes";

export const localsMiddleWare = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;

    // test Code START
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    // test Code END

    next();
};