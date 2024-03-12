# TripPlannerz-Frontend

TripPlannerZ 프론트엔드 레포지토리입니다.   
[기존에 진행하였던 프로젝트](https://github.com/GraudationProject2023/Tripplannerz)에서 구현하며 발생하였던 문제들을 해결하고, 새로운 기술들을 도입하여 재구성하였습니다.


# 👋 프로젝트 소개
여행을 좋아하는 사람들을 위한 여행 일정 계획 및 동행자 찾기 사이트 입니다.

# 🛠️ 기술 스택
- React
- TypeScript
- Vite
- Redux-Toolkit
- Tanstack Query(구 React Query)
- Antd → TailWind CSS(현재 마이그레이션 진행 중 입니다.)



# 📝 핵심 변경 기능

#### 1. JWT 토큰 기반의 인증 및 Redux 상태 관리

- 사용자가 로그인을 성공하면, 서버는 JWT를 생성하여 사용자에게 반환합니다. 이 JWT는 사용자의 다음 요청에서 사용되어 사용자를 인증합니다. 또한, Redux를 통해 애플리케이션의 상태를 효과적으로 관리하고 있습니다.

#### 2. SSE를 활용한 실시간 알림 서비스

- Server-Sent Events(SSE) 기술을 사용하여 사용자에게 실시간 알림 서비스를 제공하고 있습니다. 이를 통해 사용자는 새로운 이벤트 발생 시 즉시 알림을 받아보실 수 있습니다.

#### 3. 무한 스크롤 및 낙관적 업데이트를 위한 React-Query 도입

- React-Query를 사용하여 비동기 데이터 쿼리를 더욱 간편하게 처리하고 있습니다. 이 라이브러리의 도움으로 무한 스크롤과 낙관적 업데이트를 쉽게 구현할 수 있었습니다.

#### 4. OpenWeatherMap API 활용한 날씨 정보 구현

- OpenWeatherMap API를 사용하여 사용자의 위치에 따른 실시간 날씨 정보를 제공하고 있습니다. 이 API를 활용하면 사용자는 현 위치의 날씨를 실시간으로 확인할 수 있습니다.

#### 5. KaKao Map API 활용한 여행 경로 설정을 위한 장소 검색 및 마커 지정 기능 추가

- KaKao Map API를 통해 사용자가 여행 경로를 쉽게 설정할 수 있도록 하였습니다. 사용자는 원하는 장소를 검색하고, 그 위치에 마커를 지정함으로써 여행 경로를 직관적으로 파악할 수 있습니다.

