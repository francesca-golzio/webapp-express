const mysql = require('mysql2')

const connection =mysql.createConnection({
  host: process.env.DB_HOST || 'your_host',
  user: process.env.DB_USER || 'your_user',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_NAME || 'your_database'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return({
      error: 'Database connection failed',
      message: err.message
    });
  }
  console.log('Connected to MSQL!');
});

module.exports = connection;