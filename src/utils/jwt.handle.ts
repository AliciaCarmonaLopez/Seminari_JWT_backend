import pkg from "jsonwebtoken";
const { sign, verify } = pkg;   //Importamos las funciones sign y verify de la librería jsonwebtoken
const JWT_SECRET = process.env.JWT_SECRET || "token.010101010101";

//No debemos pasar información sensible en el payload, en este caso vamos a pasar como parametro el ID del usuario
const generateAccessToken = (id:string) => { 

    const jwt = sign({id}, JWT_SECRET, {expiresIn: '20s'});
    return jwt;
};

const generateRefreshToken = (id:string) => { 

    const jwt = sign({id}, JWT_SECRET, {expiresIn: '1h'});
    return jwt;
};
const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;

};
;

export { generateAccessToken, generateRefreshToken, verifyToken };