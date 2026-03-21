# Full-Stack App Deployment on AWS EC2 using Docker

This project demonstrates a full-stack application containerized using Docker and deployed on an AWS EC2 instance. It shows frontend-backend communication through Nginx as a reverse proxy and highlights cloud deployment practices.

## Project Overview

- **Frontend:** React.js
- **Backend:** Node.js / Express
- **Containerization:** Docker
- **Web Server / Reverse Proxy:** Nginx
- **Cloud Deployment:** AWS EC2

The frontend and backend are deployed in separate Docker containers. Nginx routes traffic to the frontend on `/` and the backend API on `/api/`.

## Project Structure

project-root/
├── backend/ # Node.js backend Docker setup
├── frontend/ # React frontend Docker setup
├── nginx/ # Nginx configuration (default.conf)
├── Dockerfile # Dockerfiles for backend/frontend
└── docker-compose.yml # Optional for local multi-container setup

## Features

- Fully containerized full-stack application
- Frontend communicates with backend through Nginx reverse proxy
- Deployed on AWS EC2 using Docker
- Demonstrates cloud deployment workflow

## Deployment Workflow

1. Pushed project from VS Code to GitHub repository.
2. Pulled the project repository on AWS EC2 instance.
3. Built and ran frontend and backend Docker containers.
4. Configured Nginx as a reverse proxy to route traffic to frontend and backend.
5. Verified that the application is accessible publicly via EC2 public IP.

## Access

Open a web browser and navigate to your EC2 public IP:
http://<EC2_PUBLIC_IP>


You should see the frontend application, and any API requests to `/api/` will be routed to the backend container.

## Technologies Used

- React.js
- Node.js / Express
- Docker
- Nginx
- AWS EC2

## Notes

This setup demonstrates practical skills in:

- Containerization and multi-container deployment
- Reverse proxy setup with Nginx
- Cloud deployment workflow
- GitHub version control integration
- Make sure EC2 security groups allow HTTP traffic on port 80.
- All containers run inside a custom Docker network for seamless communication.
- The project demonstrates containerization, reverse proxy setup, and cloud deployment best practices.

- ## Screenshot
- ![App Screenshot](./Full-Stack App Deployed.png)
