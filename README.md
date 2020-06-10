# 1. 목표

|  개발환경  |     CSS      |  API 요청 | 프레임워크 |     언어     | 테스팅 | 호스팅  |
| :--------: | :----------: | --------: | :--------: | :----------: | :----: | :-----: |
|   `웹펙`   | `인터렉티브` | `GrapeQL` | `Nuxt.js`  | `TypeScript` | `jest` |  `AWS`  |
|   `바벨`   |    `SASS`    |           |  `React`   |  `Node.js`   |        | `Doker` |
|  `ESLint`  |
| `Prettier` |

<br>

# 2. Git Flow

## master

최종 배포 버전

## develop

hotfix를 제외한 모든 변경내역이 출발하는 지점입니다.
<br>develop 브랜치의 코드가 안정화되면 master에 병합합니다.

## feature

배포하려고 하는 기능을 개발하는 브랜치입니다.
<br>기능을 다 완성할 때까지 유지하고 있다가 다 완성되면 develop 브랜치로 병합합니다.

## hotfix

배포 이후에 생긴 버그 수정 브렌치입니다.

# 3. Naming Rule

|      항목       |       규칙       |     예제     |
| :-------------: | :--------------: | :----------: |
|   `File Name`   | `UpperCamelCase` | `WebMaster`  |
| `Vue TAG Name`  | `UpperCamelCase` | `WebMaster`  |
| `Variable Name` | `lowerCamelCase` | `webMaster`  |
| `Function Name` | `lowerCamelCase` | `webMaster`  |
| `HTML Selecter` |   `kebab-case`   | `web-Master` |

# 4. 최종 결과물

## 1. Vanilla JS

## 2. Nuxt.js

## 3. React + Node.js
