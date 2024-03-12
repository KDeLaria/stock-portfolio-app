// const withAuth = (req, res, next) => {
//     // allows token to be sent via req.body, req.query, or headers
//     let token = req.body.token || req.query.token || req.headers.authorization;

//     if (!token) {
//         res.status(401).json({ status: "error", message: "Unauthorized access." });
//     }
//     // ["Bearer", "<tokenvalue>"]
//     if (req.headers.authorization) {
//         token = token.split(' ').pop().trim();
//     }
//     try {
//         const { data } = jwt.verify(token, process.env.JWT_SECRET);
//         req.user_id = data;
//     } catch {
//         res.status(401).json({ status: "error", message: "Unauthorized access." });
//     }
//     next();
// };

// module.exports = withAuth;