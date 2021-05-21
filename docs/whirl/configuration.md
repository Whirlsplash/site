---
title: Configuration
---

## Whirlsplash
### WorldsMaster Username
The server operator's username.

This should NOT be changed under normal circumstances.

### IP
**This configuration option may become deprecated in the near:
[issue](https://github.com/Whirlsplash/whirl/issues/18).**

The Internet Protocol address of the host's machine.

When connecting to a local server (client and host both originate from the same machine), a value of
`0.0.0.0` or `127.0.0.1` is fine, however, if you are hosting a server publicly as service, this
should be changed to the host's IP address.

### API
#### Port
The port on which Whirl's administration and statistics server is listening.

### Prompt
#### Enable
Manually enable the Whirl Shell.

#### PS1
Similar to a PS1 as seen in *nix-based operating systems, the Prompt String/ Statement One is the
prompt string which will appear if you have the Whirl Shell enabled.

### Log
#### Enable
Toggle the logging functionality of Whirl.

#### Level
The level of logging which the serve should emit.

By default, **errors**, **warnings**, and **info** (1) logs are emitted, however, you can change
this value to enable **debug** (2) and **trace** (3) logs.

Under normal circumstances, this value should only be changed when instructed to or if you are
experiencing any undefined/ unexpected behaviours and you would like to try self-debugging.

#### Everything
Enables logging from **ALL** of Whirl and it's dependencies.

It it's default state, false, only Whirl's core crates emit logging information, with this
configuration key enabled, **ALL** of Whirl's external dependencies will emit logging information.

This configuration key is best left disabled.

#### Test
Emits a single log for each log level, useful for debugging.

#### File
If enabled, logs will be emitted to a file within a directory relative to the Whirl binary in a
directory named `log`. If disabled, logs will be emitted to standard out.

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
