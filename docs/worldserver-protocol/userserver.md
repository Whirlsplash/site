---
title: UserServer
---

The following information is directly quoted from the [GammaDocs](http://dev.worlds.net/private/GammaDocs/Dev_Kit_Intro.html).

The UserServer is used for larger worlds that require more than one RoomServer, or when user
registration and authentication are required. When user registration and authentication are not
required, the UserServer is used in anonymous mode, and can handle large worlds with multiple
RoomServers. When user registration and authentication are needed, the UserServer maintains a user
database and is configured to provide the necessary user services. The UserServer performs the
following tasks:

- Listens on a port for connections from RoomServers. On startup, every RoomServer opens a TCP/IP 
	connection to the UserServer.
- Maintains that TCP/IP connection with the RoomServers as long as the RoomServer is running. 
  UserServer - RoomServer communications fall into one of the following categories: user connection and privileges management, redirection, whisper forwarding, broadcast text, and miscellaneous properties management.
- Listens on a designated port for new connections from clients.
- Establishes "transactional" TCP/IP connections with clients for the purposes of logging in, 
  providing redirection to RoomServers, and other user queries. Transactional means that the client connection to the UserServer is maintained only as long as it takes to complete the desired transaction, then the client is either redirected to a RoomServer or dropped after a "grace period" of two minutes.
- Provides registration and authentication services when registration and authentication are 
  required.
- Acts as database client to query or maintain a user database when registration and 
  authentication services are required.
- Acts as database client to query or maintain a World properties database when persistent 
  property changes are made by users or administrators.
