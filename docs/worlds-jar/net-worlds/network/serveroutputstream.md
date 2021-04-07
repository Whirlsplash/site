---
title: ServerOutputStream
---

## Imports
- `java.io.FilterOutputStream`
- `java.io.IOException`
- `java.io.OutputStream`

## Extends
[FilterOutputStream](https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html)

## Fields
### `private int _version`
Purpose is to be determined.

## Constructors
```java
public ServerOutputStream(OutputStream o) {
	super(o);
	setVersion(24);
}

public ServerOutputStream(OutputStream o, int vers) {
	super(o);
	setVersion(vers);
}
```

## Methods
### `public void setVersion(int vers)`
Sets [`this._version`](#private-int-_version) to `vers`.

### `public int getVersion()`
Returns [`this._version`](#private-int-_version).

### `public final void write(int b) throws IOException`
Writes the singular byte; `b` to the output stream.

```java
this.out.write(b);
```

### `public final void write(byte[] b, int off, len) throws IOException`
Writes `len` bytes from the specified byte array starting at the offset; `off` to the output stream.

```java
this.out.write(b, off, len);
```

### `public final void writeByte(int v) throws IOException`
Clone of [`write(int b)`](#public-final-void-writeint-b-throws-ioexception).

### `public final void writeShort(int v) throws IOException`
```java
OutputStream out = this.out;
out.write(v >>> 8 & 0xFF);
out.write(v >>> 0 & 0xFF);
```

### `public final void writeInt(int v) throws IOException`
```java
OutputStream out = this.out;
out.write(v >>> 24 & 0xFF);
out.write(v >>> 16 & 0xFF);
out.write(v >>> 8 & 0xFF);
out.write(v >>> 0 & 0xFF);
```

### `public static int utfLength(String str)`
```java
int strlen = str.length();
int utflen = 0;
for (int i = 0; i < strlen; i++) {
	int c = str.charAt(i);
	if (c >= 1 && c <= 127) {
		utflen++;
	} else if (c > 2047) {
		utflen += 3;
	} else {
		utflen += 2;
	}
}
return utflen;
```

### `public final void writeUTF(String str) throws IOException`
```java
OutputStream out = this.out;
int strlen = str.length();
int utflen = utfLength(str);
assert utflen < 256;
out.write(utflen >>> 0 & 0xFF);
for (int i = 0; i < strlen; i++) {
	int c = str.charAt(i);
	if (c >= 1 && c <= 127) {
		out.write(c);
	} else if (c > 2047) {
		out.write(0xE0 | c >> 12 & 0xF);
		out.write(0x80 | c >> 6 & 0x3F);
		out.write(0x80 | c >> 0 & 0x3F);
	} else {
		out.write(0xC0 | c >> 6 & 0x1F);
		out.write(0x80 | c >> 0 & 0x3F);
	}
} 
```

### Resources
- [https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html](https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html)
