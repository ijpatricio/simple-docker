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

```
