# WeTube

Cloning Youtbe with Vanilla and NodeJS

## 0 Introduction
- WebSites (VanillaJS)
- WebApps (ReactJS) Much more Interactive!

## 1. NodeJS Theory
- 브라우저 밖에서 JS를 돌아가게 해주는 언어
- 브라우저 밖의 JavaScript


- Why NodeJS?
- Front-end에서는 무조건 JS를 써야한다.
- Front-end , Back-end를 모두 Javascript로!

- NodeJS vs Django or Laravel
- NodeJS
- 기초부터 블럭을 쌓아 올려가는 것과 비슷..
- 많은 데이터를 Handling하는데 좋다.

- Django Laravel
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
- git remote add origin ______(url)
- git add .
- git commit -m "initial commit"
- git push origin master

- require('express')
- 명령어가 시작된 폴더에서 express 폴더를 찾는다.
- 없다면, node_modules에서 찾는다.

- Ctrl + c (exit 명령어)