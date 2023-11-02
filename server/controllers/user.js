


export const myProfile =(req, res, next) => {
 res.status(200).json({
    success: true,
    user: req.user,
 });
};
export const Logout =(req, res, next) => {
 req.session.destroy((err)=>{
    if(err) return next(err);
    res.clearCookie("connectsid");
    res.status(200).json({
        message: "Logged Out",
    });
 });
 };