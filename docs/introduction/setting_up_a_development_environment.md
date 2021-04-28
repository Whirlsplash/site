---
title: Setting up a development environment
---

## Prerequisites
- [NPM](https://nodejs.org/en/) (Effectively, Node) or [Yarn](https://yarnpkg.com/) (I prefer
  Yarn... ~Fuwn)
- [Rustup](https://rustup.rs/)

## Steps
1. Clone the Whirl [repository](https://github.com/Whirlsplash/whirl)
2. Override Rust tool-chain; `rustup override set nightly-2021-02-20`
2. Download dependencies
    1. `cargo build` (for Rust crates)
    2. `npm i` or `yarn` (for [Husky](https://typicode.github.io/husky/#/))
