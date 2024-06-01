
https://www.youtube.com/watch?v=dfTco9hmXEM&t=3s
https://github.com/piyush-eon/i18next-tutorial-yt/blob/master/Dockerfile
https://www.youtube.com/watch?v=FXkjkY-aUqk

npm run build

docker build -t travel-app:latest .
docker run -p 3000:3000 travel-app:latest
docker run -d -p 3000:3000 --name travel-app travel-app:latest

# Build image
docker compose build

# Chạy container
docker compose up -d

