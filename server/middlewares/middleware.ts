import jwt from "jsonwebtoken";
const secret: string = "mySecret";
export function createJWT({
  username,
  password,
}: {
  username: string;
  password: string;
}): string {
  return jwt.sign({ username, password }, secret, { expiresIn: "1h" });
}
