# Docker & DevOps: A Complete Beginner's Guide 🐳 

Welcome to the **Docker One-Shot Project**! This repository serves as a practical guide to mastering Docker and DevOps concepts, as taught in the video lesson. This README will guide you from zero to successfully running multi-container applications.

--- 

## � Troubleshooting: Git Push Fails

During this project, I encountered an `HTTP 408` timeout error while trying to push to GitHub. This was caused by the large size of the `vid-5min.mov` video file in the `assets` directory.

**The Problem**: Standard Git is not designed to handle large binary files, and pushes can time out.

**The Solution**: **Git Large File Storage (LFS)**. Git LFS is the industry-standard solution for versioning large files. It works by storing a lightweight pointer in the Git repository instead of the full file, while the actual file is stored on a separate large file server.

### **How to Use Git LFS**
1.  **Install Git LFS**: `brew install git-lfs`
2.  **Set up LFS in your repository**: `git lfs install`
3.  **Track the large file type**: `git lfs track "*.mov"`
4.  **Add the `.gitattributes` file**: `git add .gitattributes`
5.  **Commit and Push**: `git commit -m "Configure Git LFS for video files" && git push`

--- 

## �🖼️ Project Assets & Visuals

This section contains all the visual assets related to this project, including screenshots of the architecture, running services, and a video demo.

- **Docker Compose Architecture**: [docker-compose-yaml.png](assets/docker-compose-yaml.png)
- **Docker Hub Repository**: [dockerhub-repo.png](assets/dockerhub-repo.png)
- **Docker Desktop Images**: [images.png](assets/images.png)
- **Running Containers**: [container.png](assets/container.png)
- **Persistent Volumes**: [volumes.png](assets/volumes.png)
- **Application UI (Port 5050)**: [localhost-5050-user-data.png](assets/localhost-5050-user-data.png)
- **Mongo Express UI (Port 8082)**: [local-host-8082-apnacollege-db.png](assets/local-host-8082-apnacollege-db.png)
- **Video Demo**: [vid-5min.mov](assets/vid-5min.mov)
- **Terminal Output (Images & Containers)**: [docker-ps-images-cli-terminal.png](assets/docker-ps-images-cli-terminal.png)

---

## 🚀 Project Links & Demo

- **GitHub Repository**: [https://github.com/Abhijayshah/docker-test-app-2](https://github.com/Abhijayshah/docker-test-app-2)
- **Docker Hub Image**: [https://hub.docker.com/repository/docker/abhijayshah/testapp/tags](https://hub.docker.com/repository/docker/abhijayshah/testapp/tags)

### **Application Demo**
*You can add your screenshots here to showcase the running application! I recommend placing your screenshot files in the `assets` directory for organization.*

**1. The Architecture (`docker-compose.yaml`)**
*This screenshot shows how the services (app, db, mongo-express) are orchestrated.*
![Architecture Screenshot](assets/screenshot-docker-compose.png)

**2. Proof of Running Containers (`docker ps`)**
*This screenshot proves that all services are running correctly.*
![Docker PS Screenshot](assets/screenshot-docker-ps.png)

**3. Live Application & Database UI**
*This screenshot shows the final result: the web app running on `localhost:5050` and the Mongo Express UI on `localhost:8082`.*
![Live App Screenshot](assets/screenshot-live-app.png)

---

## 🚀 1. Why Docker?
Before diving in, understand the problem Docker solves:
- **"It works on my machine"**: Different OS, Node.js versions, or missing databases often break code during handovers.
- **The Solution**: **Containerization**. Docker packages your code with everything it needs to run (OS, dependencies, environment) into a single unit called a **Container**.

---

## 📦 2. Key Concepts: Images vs. Containers
- **Docker Image**: A read-only "blueprint" or snapshot. Think of it as a **Class** in programming.
- **Docker Container**: A running instance of an image. Think of it as an **Object**.
- **Docker Hub**: A cloud registry to find and share images (like GitHub for Docker).

---

## 🛠 3. Setup & Installation
1.  Download **Docker Desktop** from [docker.com](https://www.docker.com/).
2.  Install it for your OS (Windows, macOS, or Linux).
3.  Verify installation in your terminal:
    ```bash
    docker --version
    ```

---

## 💻 4. Essential Docker Commands (Cheat Sheet)

### **IMAGES**
Manage your Docker images:
- `docker images`: List all locally available images, their IDs, and sizes.
- `docker rmi <image_id/name>`: Delete a specific local image.
- `docker image prune`: Remove all unused images to free up space.
- `docker build -t <name>:<tag> .`: Build an image from a Dockerfile in the current directory.
    - `-t`: Assigns a name (tag) to the image.
    - `:version`: (Optional) Specify a version (e.g., `:1.0`).
- `docker build -t <name>:<tag> . --no-cache`: Force a fresh build without using the cache.

---

### **CONTAINER**
Manage running and stopped containers:
- `docker ps`: List all currently **running** containers.
- `docker ps -a`: List **all** containers, including those that are stopped/exited.
- `docker run <image>`: Create and start a new container from an image.
    - *Note: If the image isn't local, Docker will automatically download it from Docker Hub.*
- `docker run -d <image>`: Run the container in **Detached mode** (in the background).
- `docker run --name <custom_name> <image>`: Assign a specific name to the container instead of a random one.
- `docker run -p <host_port>:<container_port> <image>`: **Port Binding** – Maps a port on your host machine to a port inside the container.
- `docker run -e <KEY>=<VALUE> <image>`: Sets **Environment Variables** inside the container.
- `docker exec -it <container_id> /bin/bash`: Open an interactive terminal (bash) inside a running container.
    - `sh`: Use `sh` if `bash` is not available (e.g., in Alpine-based images).

---

### **DOCKER HUB**
Interact with the public/private cloud registry:
- `docker pull <image>`: Download an image from Docker Hub without running it.
- `docker push <username>/<repo_name>:<tag>`: Publish your local image to Docker Hub.
- `docker login -u <username>`: Log in to your Docker Hub account.
- `docker logout`: Remove local credentials and log out.
- `docker search <term>`: Search for images on Docker Hub directly from the terminal.

---

### **VOLUMES**
Manage persistent data storage:
- `docker volume ls`: List all volumes currently managed by Docker.
- `docker volume create <name>`: Manually create a new **Named Volume**.
- `docker volume rm <name>`: Delete a specific named volume.
- `docker run --volume <name>:<container_path> <image>`: Mount a named volume to a container path.
- `docker run --mount type=volume,src=<name>,dest=<container_path> <image>`: Alternative (clearer) syntax for mounting a volume.
- `docker run --volume <container_path> <image>`: Create an **Anonymous Volume** (managed by Docker, but no custom name).
- `docker run --volume <host_full_path>:<container_path> <image>`: Create a **Bind Mount** – Connects a specific folder on your host machine to the container.
- `docker volume prune`: Remove all unused local volumes (useful for cleaning up anonymous volumes).

---

### **NETWORK**
Manage container communication:
- `docker network ls`: List all Docker networks (Bridge, Host, None, and custom ones).
- `docker network create <name>`: Create a custom network for containers to communicate by name.
- `docker network rm <name>`: Delete a specific custom network.
- `docker network prune`: Remove all unused networks.

---

## 🏗 5. Dockerizing Your App (The Dockerfile)
To turn your Node.js/Python/Go app into a Docker Image, you need a `Dockerfile`.

### Example `Dockerfile` for Node.js:
```dockerfile
# 1. Start from a base image (OS + Node.js)
FROM node:20

# 2. Create an environment variable
ENV MONGO_DB_USER=admin

# 3. Create a working directory inside the container
RUN mkdir -p /app
WORKDIR /app

# 4. Copy your local files to the container
COPY . /app

# 5. Run commands (like installing dependencies)
RUN npm install

# 6. Define the command to start the app
CMD ["node", "server.js"]
```

**Build your image:**
```bash
docker build -t my-test-app:1.0 .
```

---

## 🔌 6. Port Binding & Environment Variables
- **Port Mapping**: Connect your computer's port to the container's port.
  ```bash
  docker run -p 8080:3000 my-test-app:1.0
  ```
  *(Access app at localhost:8080)*
- **Env Variables**: Pass secret keys or passwords.
  ```bash
  docker run -e DB_PASSWORD=secret my-test-app:1.0
  ```

---

## 🔗 7. Docker Compose (Multi-Container Setup)
For real apps (e.g., Node.js + MongoDB), use `docker-compose.yaml`.

```yaml
version: '3.8'
services:
  mongodb:
    image: mongo
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
  
  mongo-express:
    image: mongo-express
    ports:
      - "8081:8081"
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
      - ME_CONFIG_MONGODB_ADMINPASSWORD=password
      - ME_CONFIG_MONGODB_URL=mongodb://admin:password@mongodb:27017/
```

**Run everything with one command:**
```bash
docker-compose up -d
```

---

## 💾 8. Data Persistence (Volumes)
By default, data in containers is temporary. Use **Volumes** to save data on your computer even if the container is deleted.

```bash
docker run -v /host/path:/container/path mongo
```

---

## 🌐 9. Docker Networking
- **Bridge Network**: Default, allows containers on the same host to talk.
- **Custom Network**: Best practice for security and service discovery.
  ```bash
  docker network create my-network
  ```

---

## ☁ 10. Publishing to Docker Hub
1.  **Tag your image**: `docker tag local-image:1.0 your-username/repo-name:1.0`
2.  **Login**: `docker login`
3.  **Push**: `docker push your-username/repo-name:1.0`

---

## 🎓 Summary
Docker makes software development reliable and scalable. By following this guide, you've learned to:
- ✅ Create isolated environments.
- ✅ Build custom images.
- ✅ Orchestrate multiple services.
- ✅ Persist data and manage networks.

*Keep Learning, Keep Exploring!* 🚀
