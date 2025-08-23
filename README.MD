# 🚀 Docker Multi-Language Project 🌍  
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge)](https://www.docker.com/)  
[![Made with Java](https://img.shields.io/badge/Java-007396?logo=java&logoColor=white&style=flat-square)]()
[![Made with Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=flat-square)]()
[![Made with Go](https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white&style=flat-square)]()
[![Made with Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=flat-square)]()
[![Made with Ruby](https://img.shields.io/badge/Ruby-CC342D?logo=ruby&logoColor=white&style=flat-square)]()
[![Made with PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white&style=flat-square)]()
[![Made with C](https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=white&style=flat-square)]()

> Multi-language containerized **Hello World** project using **Docker Compose**.  
> Each service runs in its own container, showcasing how different programming languages can be orchestrated together.

---

## 📂 Project Structure

```bash
docker_multilang_project/
├── java/                   # Java service
│   └── Hello.java
├── c/                      # C service
│   ├── hello.c
│   └── hello               # Compiled binary
├── golang/                 # Go service
│   └── hello.go
├── node/                   # Node.js service
│   └── hello.js
├── php/                    # PHP service
│   └── hello.php
├── python/                 # Python service
│   └── hello.py
├── ruby/                   # Ruby service
│   └── hello.rb
├── docker-compose.yml       # Docker Compose configuration
└── README.md               # Documentation
```

---

## ⚙️ Getting Started

### ✅ Prerequisites
- [🐳 Docker](https://docs.docker.com/get-docker/)  
- [🛠️ Docker Compose](https://docs.docker.com/compose/install/)  

### 📥 Installation
```bash
# Clone repository
git clone https://github.com/BradleyMatera/docker_multilang_project.git
cd docker_multilang_project

# Start all containers
docker-compose up
```

### 🛑 Stop Containers
```bash
docker-compose down
```

---

## 💻 Included Services

| Language  | Directory | Command | Container Name |
|-----------|-----------|---------|----------------|
| 🐘 PHP | `php/` | `php hello.php` | `php_container` |
| 💎 Ruby | `ruby/` | `ruby hello.rb && tail -f /dev/null` | `ruby_container` |
| 🐍 Python | `python/` | `python hello.py` | `python_container` |
| 🟢 Node.js | `node/` | `node hello.js` | `nodejs_container` |
| ⚙️ C | `c/` | `gcc -o hello hello.c && ./hello` | `c_container` |
| ☕ Java | `java/` | `java Hello.java` | `java_container` |
| 🐹 Go | `golang/` | `go run hello.go` | `golang_container` |

---

## 🛠️ Managing Containers

<details>
<summary>▶ Start Services</summary>

```bash
docker-compose up
```
</details>

<details>
<summary>⏹ Stop Services</summary>

```bash
docker-compose down
```
</details>

---

## 📝 Adding a New Language
1. Create a directory for the new language (e.g., `perl/`).  
2. Add your script (e.g., `hello.pl`).  
3. Update `docker-compose.yml` with a new service entry.  
4. Restart containers:  
   ```bash
   docker-compose up
   ```

---

## 🌐 Networks
- Uses a **custom bridge network** (`asl_network`)  
- Enables communication between containers when required.  

---

## 🎯 Advanced Setup
- **Volumes** map local files into containers.  
- **Working Directories** ensure commands run in correct paths.  
- **Commands** define the execution behavior of each container.  

---

## 🤝 Contributions
Contributions are welcome!  
Fork the repo → Create a branch → Submit a PR.  

---

## 📄 License
[MIT License](LICENSE)  

---

## 📹 Showcase Presentation
[![YouTube Overview](https://img.youtube.com/vi/mPmO2qa9H9w/0.jpg)](https://www.youtube.com/watch?v=mPmO2qa9H9w)  
*(click to watch the demo video)*  

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=BradleyMatera&style=flat-square&color=blue" alt="Profile views" />
</p>
