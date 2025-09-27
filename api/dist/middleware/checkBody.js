async function checkBody(req, res, next) {
    if (!req.body) {
        return res.status(400).json('JSON não definido');
    }
    next();
}
export default checkBody;
//# sourceMappingURL=checkBody.js.map