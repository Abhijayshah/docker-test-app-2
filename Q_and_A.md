# ❓ Docker Concepts: Q&A Session

This file captures the key questions and detailed answers discussed during this project. Use this for quick conceptual reviews and interview preparation.

---

### **1. What problem does Docker solve?**
**Answer:** Docker solves the **"It works on my machine"** problem. Different developers often have different OS versions, Node.js versions, or missing global dependencies. Docker packages the application code, its environment, and all dependencies into a single, portable unit (a container) that runs exactly the same way on any machine.

---

### **2. What is the difference between a Docker Image and a Docker Container?**
**Answer:** 
- **Docker Image**: A read-only "blueprint" or snapshot. It's like a **Class** in programming. It contains the OS, dependencies, and code but is not "running."
- **Docker Container**: A running instance of an image. It's like an **Object** created from a class. It uses system resources (RAM/CPU) to actually execute the application.

---

### **3. How does Docker compare to a Virtual Machine (VM)?**
**Answer:** 
- **Docker**: Shares the Host OS Kernel and only virtualizes the application layer. It is lightweight (MBs), starts in seconds, and is highly efficient.
- **VM**: Virtualizes the entire hardware and includes a full Guest OS. It is heavy (GBs), starts in minutes, and has significant resource overhead.

---

### **4. What is Port Binding and why is it necessary?**
**Answer:** By default, a container is isolated from your computer's network. Port binding (`-p host_port:container_port`) creates a "bridge" between your computer and the container. 
*Example:* `-p 8080:5050` means when you visit `localhost:8080` on your browser, the request is forwarded to port `5050` inside the container where your app is listening.

---

### **5. How do you handle persistent data in Docker?**
**Answer:** Containers are **ephemeral** (temporary). If you delete a database container, your data is lost. We solve this using **Volumes**.
- **Bind Mounts**: Maps a specific folder on your computer (e.g., your Desktop) to a folder inside the container.
- **Named Volumes**: Let Docker manage the storage location on your disk (better for production).

---

### **6. What is Docker Compose and when should you use it?**
**Answer:** `docker-compose` is an orchestrator used to manage **multi-container applications**. Instead of running 5 different `docker run` commands for your frontend, backend, database, etc., you define them all in one `docker-compose.yaml` file and start them all with a single command: `docker-compose up`.

---

### **7. How do containers in the same project talk to each other?**
**Answer:** We use **Docker Networks**. When containers are in the same network (automatically handled by Docker Compose), they can talk to each other using their service names.
*Example:* Your backend can connect to MongoDB using `mongodb://db:27017` where `db` is the name of the service in your compose file.

---

### **8. Why did our Git push fail and how did we fix it?**
**Answer:** The push failed with an `HTTP 408` timeout because we tried to push a large video file (`vid-5min.mov`, ~283MB) which exceeded GitHub's 100MB limit. 
**The Fix:** We used **Git LFS (Large File Storage)**. LFS replaces large files with tiny "pointer" files in Git, while the actual video is stored on a separate server.

---

### **9. How many images are needed for a typical MERN project?**
**Answer:** Minimum **3 images**:
1.  **Frontend**: Custom image for React/Vite.
2.  **Backend**: Custom image for Node/Express.
3.  **Database**: Official `mongo` image from Docker Hub.

---

### **10. What are Docker Layers and why do they matter?**
**Answer:** Each instruction in a `Dockerfile` (e.g., `COPY`, `RUN`) creates a new **Layer**. Docker caches these layers. If you only change your code but not your `package.json`, Docker will reuse the `npm install` layer from the cache, making your subsequent builds incredibly fast.
