import "dotenv/config";

const port = process.env.PORT || 3000;
const name = process.env.DB_NAME || "mydb";

console.log(`Server is running on port ${port}`);
console.log(`Database name is ${name}`);
console.log(process.env.SECRET_KEY);
