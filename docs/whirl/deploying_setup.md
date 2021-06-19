---
title: Deploying (Setup)
---

So you want to deploy your own WhirlServer? Nice! You've come to the right
place!

## With Docker

### Prerequisites

- [Docker](https://docs.docker.com/engine/install/)

### Usage

```shell
$ docker run \
> -p 8080:80 \
> -p 6650:6650 \
> -p 5673:5673 \
> -v /var/lib/whirl:/.whirl \
> whirlsplash/whirl
```

#### Copyable

```shell
docker run -p 8080:80 -p 6650:6650 -p 5673:5673 -v /var/lib/whirl:/.whirl whirlsplash/whirl
```

### Notes

Your configuration file can be found in `/var/lib/whirl/`.

## With Docker Compose

### Prerequisites

- [Docker](https://docs.docker.com/compose/install/)
- [Docker Compose](https://docs.docker.com/compose/install/) (newer versions of
Docker include Docker Compose!)

### Usage

1. Create a directory, preferably in a monitorable location, `cd` into it, and
   create a file named `docker-compose.yml` with the following contents:

```yml
# docker-compose.yml

version: "3.3"
services:
  whirl:
    ports:
      - "8080:80"   # API
      - "6650:6650" # Distributor
      - "5673:5673" # Hub
    volumes:
      - ./.whirl-data:/.whirl
    image: whirlsplash/whirl
```

2. Execute `docker-compose up` (or `docker compose up` in later versions of
   Docker).
4. Wait around five seconds, if no errors are logged; `Ctrl + C` the process.
   Whirl has now generated a default configuration file for you in the
   `./whirl-data/` directory, `cd` into this directory and modify the
   `Config.toml` to your liking.
5. You may now `cd` back into the originally created directory and execute
   `docker-compose up -d` (or `docker compose up -d` in later versions of
   Docker).

### Notes

Your configuration file can be found in `./whirl-data/`.

## With a Standalone Binary (Currently only for developmental use)

1. Create a directory, preferably in a monitorable location and `cd` into it.
2. Download the latest binary release of your platform (if available) from the
   Whirl [releases page](https://github.com/Whirlsplash/whirl/releases/latest).
3. Execute `whirl run distributor`
4. Wait around five seconds, if no errors are logged: `Ctrl + C` the process.
   Whirl has now generated a default configuration file for you in the
   `./whirl/` directory, `cd` into this directory and modify the
   `Config.toml` to your liking.
5. You may now `cd` back into the originally created directory and execute
   `whirl run` (or `whirl run distributor,hub` if you would like to run only a
   select few of Whirl's sub-servers).

### Notes

Your configuration file can be found in `./whirl/`.

## Notes

systemd configuration may (?) come soon!
