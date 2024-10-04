# 🚀 **Docker Multi-Language Project** 🌍

This project demonstrates a **multi-language application setup** using **Docker**. Each service runs in its own Docker container, showcasing how different programming languages can be containerized and orchestrated through **Docker Compose**.

---

## 🗂️ **Project Structure**

```bash
docker_multilang_project/
├── java/                   # Java service
│   └── Hello.java
├── c/                      # C service
│   ├── hello.c
│   └── hello               # Compiled binary file
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
└── README.md               # Project documentation

```

⚙️ Getting Started

Prerequisites

Before running this project, ensure you have the following installed:

🐳 Docker

🛠️ Docker Compose

Installation & Setup

1. Clone the repository:

git clone https://github.com/BradleyMatera/docker_multilang_project.git
cd docker_multilang_project
2. Run the containers:

docker-compose up

This will start all the language services defined in the docker-compose.yml.

💻 Included Services

Each service runs its respective “Hello World” program:

Language	Directory	Command	Container Name
PHP	php/	php hello.php	php_container
Ruby	ruby/	ruby hello.rb && tail -f /dev/null	ruby_container
Python	python/	python hello.py	python_container
Node.js	node/	node hello.js	nodejs_container
C	c/	gcc -o hello hello.c && ./hello	c_container
Java	java/	java Hello.java	java_container
Go	golang/	go run hello.go	golang_container

🛠️ Managing Containers

Starting the Services:

To run all services:

docker-compose up

Stopping the Services:

To stop and remove all running containers:

docker-compose down

📝 Adding a New Language

	1.	Create a directory for the new language (e.g., perl/).
	2.	Add the script (e.g., hello.pl) to the newly created directory.
	3.	Update docker-compose.yml by adding a new service.
	4.	Re-run the containers with docker-compose up.

🌐 Networks

The project uses a custom bridge network named asl_network for communication between the containers if needed.

🎯 Advanced Setup

Each service is isolated in its own container, using Docker images for each language. Here’s a breakdown of some key components:

	•	Volumes are used to map your local files to the container.
	•	Working Directories ensure all commands execute in the proper directory inside the container.
	•	Commands define the specific task that each container will run when started.

🤝 Contributions

Contributions are welcome! Feel free to fork this project and submit a pull request.

📄 License

This project is licensed under the MIT License.

📹 Link to Overview Video

Showcase Presentation Video
