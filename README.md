# HungryHu

***🧑‍🏭 Work in progress 🧑‍🏭***

Find your next meal

## Planned features

- Swipe between potential meals
- Add your own meals
- Plan your meals

## Tech

- Application Server
    - Hosts WebApp
    - APIs
- Web App

## Build and run docker image

```
cd webapp
ng build
cd ..

docker build -t hungryhu .
docker run -p 3000:3000 --name HungryHu hungryhu
```
