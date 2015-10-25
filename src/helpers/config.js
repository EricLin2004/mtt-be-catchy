module.exports = {
  db: {
    user: process.env.DBUSER || 'gvhbxpbaofxmhz',
    database: process.env.DB || 'd200ua7ggeijli',
    password: process.env.DBPASSWORD || 'M2f1_j5R2H5r-13Ni4Qz33qEpf',
    host: process.env.DBHOST || 'ec2-54-225-192-128.compute-1.amazonaws.com',
    port: process.env.DBPORT || 5432,
    ssl: process.env.DBSSL || true
  },
  apiTokens: ['BM6vKWXbCqmoQKn9TPqK']
};