    # Node DevOps App (ECS + CI/CD)

A Node.js application deployed on AWS using Docker, Amazon ECS (Fargate), and automated CI/CD with GitHub Actions.

---

## Architecture Overview

```
Code → Docker → Amazon ECR → Amazon ECS → Running Container
                 ↑
           GitHub Actions (CI/CD)
```

---

## Tech Stack

* Node.js (Express)
* Docker
* Amazon ECS (Fargate)
* Amazon ECR
* GitHub Actions

---

## Project Structure

```
.
├── Dockerfile
├── index.js
├── package.json
├── task-definition.json
└── .github/workflows/deploy.yml
```

---

## Run Locally (Docker)

### Build image

```
docker build -t node-devops-app .
```

### Run container

```
docker run -p 3000:3000 node-devops-app
```

Open in browser:

```
http://localhost:3000
```

---

## AWS Deployment

This application is deployed using:

* Amazon ECR to store Docker images
* Amazon ECS (Fargate) to run containers

---

## CI/CD Pipeline

The deployment pipeline is implemented using GitHub Actions.

### Flow

```
git push → build Docker image → push to ECR → update ECS → deploy
```

### Workflow file

```
.github/workflows/deploy.yml
```

---

## Required GitHub Secrets

Add the following secrets in your repository settings:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION=ap-south-1
ECR_REPOSITORY=nodejsecs
ECS_CLUSTER=node-devops-cluster
ECS_SERVICE=awsdevopsnodejs-service-1d5vd4nh
```

---

## Deployment Process

1. Code is pushed to the `main` branch
2. GitHub Actions builds a Docker image
3. The image is pushed to Amazon ECR
4. Task definition is updated dynamically with the new image
5. ECS service deploys the updated task

---

## Health Check Endpoint

```
GET /health
```

Used by ECS to verify container health.

---

## Updating the Application

### Step 1: Make changes

Modify application files such as:

* `index.js`
* or any relevant source file

### Step 2: Commit and push

```
git add .
git commit -m "update application"
git push origin main
```

### Step 3: Automatic deployment

* GitHub Actions pipeline runs
* ECS service updates automatically

---

## Rollback

To roll back to a previous version:

1. Go to the ECS Console
2. Open Task Definitions
3. Select a previous revision
4. Deploy that revision

---

## Important Notes

* Do not rely on the `latest` image tag
* The task definition uses dynamic `IMAGE_URI`
* Container name must remain: `node-app`

---

## Future Improvements

* Add Application Load Balancer
* Enable auto scaling
* Add monitoring with CloudWatch
* Implement blue/green deployments

---

## Author

DevOps learning project using AWS ECS and CI/CD
