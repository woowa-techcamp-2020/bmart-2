# bmart-2

### 다양한 카테고리 별 메뉴를 주문할 수 있는 Bmart 입니다!

<p align="center">
<kbd><img width="250" alt="메인페이지 1" src="https://github.com/woowa-techcamp-2020/bmart-2/blob/develop/asests/%EB%95%A1%EA%B2%A8%EC%9A%94.webp"></kbd>
<kbd><img width="250" alt="메인페이지 2" src="https://github.com/woowa-techcamp-2020/bmart-2/blob/develop/asests/%EB%A9%94%EC%9D%B8.webp"></kbd>
<kbd><img width="250" alt="장바구니" src="https://github.com/woowa-techcamp-2020/bmart-2/blob/develop/asests/%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88.webp"></kbd>
</p>


## Contributors
- [![title](https://img.shields.io/badge/DEVLOPER-이수정-123456)](https://github.com/sooojungee)
- [![title](https://img.shields.io/badge/DEVLOPER-양명우-123456)](https://github.com/yuda1124)
- [![title](https://img.shields.io/badge/DEVLOPER-김유영-123456)](https://github.com/yuda1124)

## Tech Stack

| Area         | Tech Stack|
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend     | ![](https://img.shields.io/badge/React-blue?longCache=true&logo=React) ![](https://img.shields.io/badge/Typescript-blue?color=007ACC&longCache=true&logo=Typescript&logoColor=white) ![](https://img.shields.io/badge/Styled_Compoenent-blue?color=b80742&longCache=true&logo=styled-components&logoColor=white)|
| Backend      | ![](https://img.shields.io/badge/Node.js-blue?color=339933&longCache=true&logo=Node.js&logoColor=white) ![](https://img.shields.io/badge/MySQL-blue?color=363c40&longCache=true&logo=MySQL&logoColor=white) ![](https://img.shields.io/badge/Sequelize-blue?color=E10098&longCache=true&logo=Sequelize&logoColor=white) ![](https://img.shields.io/badge/Elastic_Search-blue?color=311C87&longCache=true&logo=Elasticsearch&logoColor=white)
| Infra        |  ![](https://img.shields.io/badge/AWS_EC2-blue?color=232F3E&longCache=true&logo=Amazon-AWS&logoColor=white)
| DevOps       |  ![](https://img.shields.io/badge/GitHub-blue?color=181717&longCache=true&logo=GitHub&logoColor=white) ![](https://img.shields.io/badge/GitHub_Actions-blue?color=2088FF&longCache=true&logo=GitHub-Actions&logoColor=white)

## Start

### 1. setting .env
```
cd server
vi .env
```
```
# DB
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_Dialect=
DB_PORT=
# WEB SERVER
WEB_HOST=
WEB_USER=
# LOCAL
LOCAL_HOST=
LOCAL_PORT=
# NODE
NODE_ENV=
PORT=
#ELASTIC
ELASTIC_HOST=
API_VERSION=7.x
ES_USER=elastic
ES_PW=
#OAUTH
CLIENT_ID=
CLIENT_SECRET=
CALLBACK_URL=
#JWT
JWT_SECRET=secret
```

### 2. build client
```
cd client
yarn build
```

### 3. start
```
cd ..
cd server
yarn start
```

## ERD
![ERD](https://user-images.githubusercontent.com/18456572/90493851-d5105380-e17d-11ea-8ad9-de0dd86b2051.png)

## Wiki
[우리들의 위키](https://github.com/woowa-techcamp-2020/bmart-2/wiki)
