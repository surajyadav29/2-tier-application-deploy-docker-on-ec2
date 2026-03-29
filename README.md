# 2-Tier Full Stack Application Deployment using Docker on AWS EC2

# Project Overview
This project demonstrates deploying a full-stack React + Node.js app in Docker containers on AWS EC2

Frontend (React)
Backend (Node.js)
Docker & Docker Compose
Cloud deployment on Amazon Web Services EC2
Image storage using Docker Hub

# Architecture

2-Tier Application:

Frontend (Client Layer) → React app running on port 80
Backend (Server Layer) → Node.js API running on port 5000
User → Frontend (Port 80) → Backend (Port 5000)

# Project Structure
project-root/
│
├── backend/
│   ├── Dockerfile
│   └── server.js
│
├── frontend/
│   ├── Dockerfile
│   └── React App
│
├── docker-compose.yml
└── README.md

# Step 1: Create Docker Hub Repository
Go to Docker Hub
Click Create Repository

Give name:
fullstack-deploy-docker-on-ec2-v1

# Step 2: Create  Docker Compose 
Create docker-compose.yml on project root folder:

services:
  backend:
    image: ajay2929/fullstack-deploy-docker-on-ec2-v1:02
    container_name: backend-app
    ports:
      - "5000:5000"

  frontend:
    image: ajay2929/fullstack-deploy-docker-on-ec2-v1:01
    container_name: frontend-app
    ports:
      - "80:80
      
# Step 3: Build Docker Images
docker-compose up --build

This will:
Build frontend & backend images
Start containers

# Step 4: Test Locally
Frontend → http://localhost
Backend → http://localhost:5000

# Step 5: Push Images to Docker Hub
Login
docker login

Push Images
docker push ajay2929/fullstack-deploy-docker-on-ec2-v1:01
docker push ajay2929/fullstack-deploy-docker-on-ec2-v1:02

# Step 6: Launch EC2 Instance
Go to Amazon Web Services
Launch EC2 (Amazon Linux)
Open ports:
80 (HTTP)
5000 (Backend)

# Step 7: Connect to EC2 from Window PowerShell terminal
cd Downloads
ssh -i your-key.pem ec2-user@your-ec2-public-ip

# Step 8: Install Docker on EC2
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker

# Step 9: Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

Give permisson
sudo chmod +x /usr/local/bin/docker-compose

# Step 10: Pull Project from Docker Hub
sudo docker pull ajay2929/fullstack-deploy-docker-on-ec2-v1:01
sudo docker pull ajay2929/fullstack-deploy-docker-on-ec2-v1:02

# Step 11: Run Application on EC2
sudo docker run -d --name backend --network fullstack-net -p 5000:5000 ajay2929/fullstack-deploy-docker-on-ec2:01
sudo docker run -d --name frontend --network fullstack-net -p 3000:3000 ajay2929/fullstack-deploy-docker-on-ec2:02

# Step 12: Access Application
Open in browser:
http://your-ec2-public-ip

# This project helps you:
Build Docker images
Push & pull from Docker Hub
Deploy on Amazon Web Services EC2
Run full stack app using Docker Compose

# GitHub Integration
Initialize Git repository locally:
git init
git add .
git commit -m "Initial commit"

Push to GitHub:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main

# Update Project
Step 1: Update Code Locally
After making changes in your project:
git status
git add .
git commit -m "update project"

Step 2: Push Updated Code to GitHub
git push origin main
