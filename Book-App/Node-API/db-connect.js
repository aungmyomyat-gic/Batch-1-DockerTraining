// require('dotenv').config(); 
const mysql = require('mysql2');

// Database connection configuration
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD ,
    database: process.env.MYSQL_DATABASE ,
    port: process.env.MYSQL_PORT,
}).promise(); 

console.log(process.env.MYSQL_DATABASE);
console.log(process.env.MYSQL_ROOT_PASSWORD);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_HOST);


// Test connection
(async () => {
  try {
    const connection = await pool.getConnection(); // Now it’s async/await instead of .then()
    console.log("Connected to MySQL database ✅");
    connection.release();
  } catch (error) {
    console.error("❌ MySQL Connection Error:", error);
  }
})();

module.exports = pool;