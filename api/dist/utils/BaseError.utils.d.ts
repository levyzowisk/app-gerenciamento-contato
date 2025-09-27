declare class BaseError extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string);
}
export default BaseError;
