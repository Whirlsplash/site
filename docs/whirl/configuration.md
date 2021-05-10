---
title: Configuration
---

## Whirlsplash
### WorldsMaster Username
The server operator's username.

This should NOT be changed under normal circumstances.

### Log Level
The level of logging which the serve should emit.

By default, **errors**, **warnings**, and **info** (1) logs are emitted, however, you can change
this value to enable **debug** (2) and **trace** (3) logging.

Under normal circumstances, this value should only be changed when instructed to or if you are
experiencing any undefined/ unexpected behaviours and you would like to try self-debugging.

### IP
**This configuration option may become deprecated in the near:
[issue](https://github.com/Whirlsplash/whirl/issues/18).**

The Internet Protocol address of the host's machine.

When connecting to a local server (client and host both originate from the same machine), a value of
`0.0.0.0` or `127.0.0.1` is fine, however, if you are hosting a server publicly as service, this
should be changed to the host's IP address.

## Prompt PS1
Similar to a PS1 as seen in *nix-based operating systems, the Prompt String/ Statement One is the
prompt string which will appear if you have the Whirl Shell enabled.

## Distributor
### WorldsMaster Greeting
The first message or "greeting" which is sent to a user once connected to a WorldServer.

### Port
The port which the Distributor may be accessed from.

This should NOT be changed under any
circumstances.

## Hub
### Port
The port which the Hub may be accessed from.

This should NOT be changed under any
circumstances.
