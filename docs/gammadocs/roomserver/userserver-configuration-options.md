---
title: UserServer Configuration Options
---

## Logging
Inclusion of this keyword enables logging of every command that passes over the network (both 
input and output), as well as logging of various other information. It is primarily intended to be
used for debugging. All of this debugging information is appended to the ".out" file not the ".log"
file.

Logging can also be toggled on and off while the UserServer is running by sending the server
SIGUSR1: `kill -USR1 pid`

Use logging carefully, it generates a very large amount of output to the UserServer output file.
Logging functionality and these keywords are only available in UserServers that have been compiled
for Worlds' internal use.

This feature is disabled by default.

### InternalHttpServer
This is the base URL of the machine to use for handling HTTP requests for the internal version of
Gamma.  For example:  http://dev.worlds.net

### ExternalHttpServer
This is the base URL of the machine to use for handling static HTTP requests for the release (i.e.
external) version of Gamma.  For example: http://www-static.us.worlds.net

### ScriptServer
Similar to ExternalHttpServer, this is the URL of the directory where server scripts should be
executed.  This is for things like the registration script and various other maintenance scripts.
Example:  http://www-dynamic.us.worlds.net/cgi-bin

### BindAddr (UserServer only)
Used when you wish to run two UserServers on a single multi-homed machine. This is really only
useful for redirecting traffic on one of the UserServers to a set of remote RoomServers.

### SmtpServer
The SMTP server to used to connect to for sending WorldsMail.

### MailDomain
The DNS domain to use in the "from" address when sending WorldsMail.
