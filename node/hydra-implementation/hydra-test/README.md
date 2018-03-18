**In powershell**

``` powershell
docker network create hydra-network
docker run -p 6379:6379 --network hydra-network --name hydra-redis -d redis
docker run -p 3000:3000 --network hydra-network --name hydra-micro -it -v ${PWD}:/app -w /app node:boron /bin/bash
```

After following the tutorial listed online [here](https://community.risingstack.com/tutorial-building-expressjs-based-microservices-using-hydra/) I wouldn't recommend using this technology for a microservice architecture. While the technology does have a lot of nice features it just seems to fall short. For one I couldn't complete the tutorial because of a bug in the software, **hydra-cli** could not make a rest call if it returned json. Then when looking for a solution to the issue there had not been any movement on the issue for a year. With such a lack of support for even basic things like that I cannot recommending using this package.