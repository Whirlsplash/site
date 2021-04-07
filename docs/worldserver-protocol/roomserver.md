---
title: RoomServer
---

The following information is directly quoted from the [GammaDocs](http://dev.worlds.net/private/GammaDocs/Dev_Kit_Intro.html).

The RoomServer can operate in stand-alone mode to handle an entire
world when no user authentication is required. For larger worlds, or when user authentication and
registration are required, multiple RoomServers can be used in conjunction with a UserServer. If
shared state (shared objects) is desired, the RoomServer must run in conjunction with an Oracle
database that will store persistent room data. The RoomServer performs the following tasks:

- Listens on a given port to connections by clients.
- Establishes and maintains TCP/IP client connections (when used in conjunction with a UserServer,
  UserServer will establish the first TCP/IP connection with a client and then redirect users to the RoomServers).
- Subscribes clients to any room the RoomServer is servicing
- Processes client's avatar locations and properties.
- Disseminates and provides client locations and properties information to other clients in the 
  vicinity. Performs crowd control calculations that determine how avatars are seen and heard by others.
- Handles and distributes chat text, whispers and broadcast text. Whispers and other messages 
  targeted at users not on that RoomServer are forwarded to the UserServer for routing.
- Acts as a database client for a properties database to query or modify Room properties, if any. 
  This includes accessing properties for any shared state or shared objects found in rooms.
