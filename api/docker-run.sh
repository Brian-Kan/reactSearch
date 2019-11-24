docker build . -t interview-question:latest
docker run -p 4000:4000 -d --name interview-question interview-question:latest