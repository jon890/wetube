# WeTube

-https://fathomless-mesa-46978.herokuapp.com/

Cloning Youtbe with Vanilla and NodeJS

## 0 Introduction

- WebSites (VanillaJS)
- WebApps (ReactJS) Much more Interactive!

## 1. NodeJS Theory

- What is NodeJS?
- 브라우저 밖에서 JS를 돌아가게 해주는 언어
- 브라우저 밖의 JavaScript

* Why NodeJS?
* Front-end에서는 무조건 JS를 써야한다.
* Front-end , Back-end를 모두 Javascript로!

* NodeJS vs Django or Laravel
  [NodeJS]
* 기초부터 블럭을 쌓아 올려가는 것과 비슷..
* 많은 데이터를 Handling하는데 좋다.

[Django Laravel]

- 기초가 이미 구축되어 있는 Framework이다.
- 하드웨어적인 처리 (동영상 처리, 서버의 CPU, RAM 사용 등..)가 필요할때 좋다.

- Installing NodeJS
- Windows에서는 설치파일을 받아서 설치 (190617 기준 10.16 LTS 설치)
- Mac에서는 brew install node 명령어를 이용해서 설치

## 2. ExpressJS

- 서버 : 인터넷에 연결되어 내 요청에 응답하는 컴퓨터

- Express : Express.JS Framework!

- Node를 설치할 때 NPM(Node Package Manager)도 설치된다.

- Package Manager를 NPM으로 하는 프로젝트 시작방법
- npm init
- npm install express (package.json이 들어있는 폴더에서 명령어를 입력하자!)

- Git 프로젝트 설정법
- git init
- git remote add origin **\_\_**(url)
- git add .
- git commit -m "initial commit"
- git push origin master

- require('express')
- 명령어가 시작된 폴더에서 express 폴더를 찾는다.
- 없다면, node_modules에서 찾는다.

- Ctrl + c (exit 명령어)

- 서버생성 -> 라우트 생성 -> 요청에 응답

- Babel
- 최신 JS 코드를 Compile 해준다.
- ES6 문법으로 작성된 코드를 예전 브라우저에서도 작동하게
- 변환시켜준다.

[Sample]

### const something = (a, b) => a \* b;

### var something = function something(a, b) {

### return a \* b;

###}

- Babel Node (바벨의 노드버전) 설치
- npm install @babel/node
- npm install @babel/preset-env
- (바벨의 설정중 env를 사용)
- npm install @babel/core

- .babelrc (babel 설정파일)

### {

### "presets": ["@babel/preset-env"]

### }

### const express = require('express')

### => import express from "express";

### start script

### node index.js

### => babel-node index.js

- nodemon
- 파일을 수정할 때 마다 서버를 재시작하지 않아도 되게 해주는 demon
- npm install nodemon -D (for developer)
- nodemon --exec babel-node index.js

- Arrow function (ES6)

### const something = (a, b) => a \* b;

- npm start script 수정
- nodemon (재시작) - babel (재시작)
- 재시작이 2번 이루어짐!
- -> delay를 주자
- nodemon --exec babel-node index.js --delay 2

- Express Core : MiddleWare
- 중간에 거쳐 가는 함수.. Spring으로 따지면 Interceptor로 생각하자
- 로그인체크, 파일업로드 시 가로채서 업로드, 로깅 등의 작업수행

- app.use(middleware)로 사용

- 사용자 접속시 index.js의 위에서 아래로 실행된다!
- 따라서 middleware를 위에 두고, router를 아래두자.

- 설치해볼 MiddleWare
- Morgan - Logging
- npm install morgan
- import morgan from "morgan";
- app.use(morgan("dev"));

- Helmet - Security
- Cookie Parser
- Body Parser
