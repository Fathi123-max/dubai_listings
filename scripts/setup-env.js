#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const envExamplePath = path.join(__dirname, '..', '.env.example');
const envPath = path.join(__dirname, '..', '.env');

// Check if .env already exists
if (fs.existsSync(envPath)) {
  rl.question('.env file already exists. Do you want to overwrite it? (y/N) ', (answer) => {
    if (answer.toLowerCase() !== 'y') {
      console.log('Environment setup cancelled.');
      rl.close();
      return;
    }
    createEnvFile();
  });
} else {
  createEnvFile();
}

function createEnvFile() {
  try {
    // Read the example file
    const envExample = fs.readFileSync(envExamplePath, 'utf8');
    
    // Generate a random JWT secret if not in production
    const isProduction = process.env.NODE_ENV === 'production';
    const jwtSecret = isProduction 
      ? '' // Will prompt for production
      : `JWT_SECRET=${require('crypto').randomBytes(32).toString('hex')}\n`;
    
    // Replace placeholders with actual values
    let envContent = envExample
      .replace(/<username>/, 'your_username')
      .replace(/<password>/, 'your_password')
      .replace(/your_jwt_secret_key_here/, jwtSecret || 'your_secure_jwt_secret_key');
    
    // Write the .env file
    fs.writeFileSync(envPath, envContent);
    console.log('✅ .env file created successfully!');
    
    if (isProduction) {
      console.log('\n⚠️  Please update the .env file with your production values!');
    } else {
      console.log('\n🔑 A random JWT secret has been generated for development.');
    }
    
  } catch (error) {
    console.error('❌ Error creating .env file:', error.message);
  } finally {
    rl.close();
  }
}
