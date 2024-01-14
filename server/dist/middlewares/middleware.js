import jwt from "jsonwebtoken";
const secret = "mySecret";
export function createJWT({ username, password, }) {
    return jwt.sign({ username, password }, secret, { expiresIn: "1h" });
}
