class BaseError extends Error {
    statusCode;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
export default BaseError;
//# sourceMappingURL=BaseError.utils.js.map