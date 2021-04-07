---
title: netPacket
---

## Imports
- `NET.worlds.console.StatNetMUNode`
- `java.io.IOException`

## Class Type
`abstract`

## Fields
### `protected ObjID _objID`

### `protected int _commandType`

## Constructors
```java
public netPacket(ObjID id, int cmd) {
	if (id != null) {
		this._objID = id;
	} else {
		this._objID = new ObjID(1);
	}
	this._commandType = cmd;
}

public netPacket() {
	this._objID = new ObjID(1);
}
```

## Methods
### `public int msgID()`
Returns [`this._commandType`](#protected-int-_commandtype).

### `int packetSize()`
Returns `2 + `[`this._objID`](#protected-objid-_objid)`.packetSize()`

### `public String toString(WorldServer serv`)
Returns `new Integer(`[`this._commandType`](#protected-int-_commandtype)`).toString()`

### `void send(`[`ServerOutputStream`](./serveroutputstream)` o) throws IOException`
```java
int packetsize = packetSize();
if (packetsize >= 256 && o.getVersion() <= 24)
	throw new PacketTooLargeException();
StatNetMUNode netStat = StatNetMUNode.getNode();
netStat.addBytesSent(packetsize);
netStat.addPacketsSent(1);
assert this._commandType > 0;
if (packetsize >= 128 && o.getVersion() > 24) {
	o.writeByte(128 + packetsize / 256);
	o.writeByte(packetsize & 0xFF);
} else {
	o.writeByte(packetsize);
}
this._objID.send(o);
o.writeByte(this._commandType);
}
```
