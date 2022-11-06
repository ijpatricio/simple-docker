## Simple Docker


```
# List running containers
docker ps

# Build an image
docker build -t simple-docker:latest .

# Run a container
docker run simple-docker:latest

# Stop a container
docker stop <container_id> # Or first unique letters for typing convinience

# Run a container with ports published and interactive, with tty
docker run -it -p 3000:3000 simple-docker:latest

# Run a container, and also map a folder to inside the container (bind mount)
docker run -it -p 80:3000 -v $PWD/files:/storage/files simple-docker:latest

# Start a shell session inside the container

# Also mount a Docker volume to inside the container folder
# First, have it created, then you can use it

docker volume create simple-files

docker run -it -p 80:3000 \
    -v $PWD/files:/storage/files \
    -v simple-files:/storage/more-files \
    simple-docker:latest
 
# Run a command, and delete the created container after exit. Great for one off commands
docker run --rm (...)

# Explore Docker-Compose


```
