---
title: ObjId
---

## Imports
- `java.io.IOException`

## Fields
### `private int _shortObjID`

### `private String _longObjID`

## Constructors
```java
public ObjID(int id) {
	this._shortObjID = id;
	this._longObjID = null;
}

public ObjID(String id) {
	this._shortObjID = 0;
	if (id.startsWith("!"))
		id = id.substring(1);
	this._longObjID = id;
}

public ObjID() {
	this._shortObjID = 0;
	this._longObjID = null;
}
```

## Methods
### `public int shortID()`
Returns [`this._shortObjID`](#private-int-_shortobjid).

### `public int longID()`
Returns [`this._longObjID`](#private-string-_longobjid).

### `void parseNetData(ServerInputStream o) throws IOException`
```java
if (this._longObjID != null) {
	o.writeByte(0);
	o.writeUTF(this._longObjID);
} else {
	assert this._shortObjID == 1 || this._shortObjID >= 253;
	o.writeByte(this._shortObjID);
} 
```

TLDR; Returns the correct field?

### `public String toString(WorldServer serv)`
```java
if (this._longObjID != null)
	return this._longObjID;
	
return String.valueOf(Integer.toString(this._shortObjID)) +
	"[" + serv.getLongID(this) + "]";
```

### `public String toString()`
```java
if (this._longObjID != null)
	return this._longObjID;

return "[#" + Integer.toString(this._shortObjID) + "]";
```
