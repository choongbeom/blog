<template>
  <v-container>
    <div class="main">
      <p style="font-size:20pt;font-weight:bold;">13년 차, 다양한 경험과 유연한 사고를 가진 개발자 김충범입니다.</p>
      <div class="parent">
         <div class="child">           
           <img class="child" src="https://github.com/choongbeom/blog/blob/master/static/me.jpg?raw=true" alt="">
         </div>
         <div class="child">
      <pre>
  ⊙ Contact
    Email: toonme1@gmail.com
    Phone: 010-0000-0000

  ⊙ Channel
    Blog: <a href="https://choongbeom.github.io/">https://choongbeom.github.io/</a>
    GitHub: <a href="https://github.com/choongbeom/">https://github.com/choongbeom/</a>

  ⊙ Introduce
    13년간 자동화 기기(CD, ATM, 정산기) 및 장비 연동 시스템(사전투표 본인확인기, 스캐너 등)에 관련된 다양한 개발업무(설계/개발/유지보수)를 담당하였습니다.
    현재는 스타트업 이커머스(라이트브라더스) 백엔드/프론트엔드 개발업무 담당하고 있습니다.
    다양한 고객사 요청 개발 업무를 통해 고객사 요구를 파악하는 방법과 이슈 발생 시 대처하는 많은 경험이 있습니다.
      </pre>
         </div>
      </div>

      <br>
      <h3># Work Experience</h3>
       <pre>
◎ <a href="https://voimtech.com/">보임테크놀러지</a>
  - 본인인증, 신분증스캐너, 캐논스캐너, 코닥스캐너, 페이퍼리스, 이미징시스템 전문업체

    ⊙ 클라우드 개발팀 매니저(2021.07-현재)
      - 스타트업(라이트브라더스) 웹사이트 개발
      - 신규 서비스 개발 (시세조회 - api/client/admin)
      - 고객 경험을 향상을 위한 기능 개선 (상품구매리스트 무한스크롤 뒤로가기 이슈 - client)

    ⊙ 시스템 개발팀 책임연구원(2014.10-2021.12)
      - TWAIN 기반 스캐너 인터페이스 SDK 개발, 약 20개 고객사(LGCNS, 에이텍에이피 등)에서 사용
      - 스캐너 TWAIN 인터페이스 튜닝 및 고객사 시스템 연동, 약 80개의 고객사(금융권, 관공소, 일반기업 등)
      - 본인인증 및 스캐너 프로그램 개발
      - 선거관리 위원회 사전투표 본인확인장비 인터페이스 및 잠정투표/체험용 프로그램 개발

◎ <a href="http://www.neotk.com/html/main.php">네오아이씨피</a>
  - CD, ATM, 정산기관련 자동화기기 개발업체

    ⊙ 소프트웨어팀 주임연구원(2009.07-2013.11)
      - 신규 국/해외 CD/ATM/정산기 장비 개발
      - 기존 국/해외 CD/ATM/정산기 장비 기능 개발 및 유지보수
      - 자동화기 시스템(OS)과 장비 모듈간의 미들웨어 개발
       </pre>

       <br>
      <h3># Other Experience</h3>
      <pre>
◎ 개인팀 운영
  - 3인 개발자로 팀을 구성하여 안드로이드 게임 개발 및 운영

    ⊙ <a href="https://apkcombo.com/ko/mangchi-kwangkwangkwang/com.b2hsoft.HammerBBBPaid/">망치쾅쾅쾅</a>(2013.12 ~ 2014.09)
      - 아케이드 게임 시나리오 작성
      - Unity3D를 이용하여 게임 디자인/개발
      - 현재 운영하지 않음

    ⊙ <a href="https://apkcombo.com/ko/the-adventures-of-arithmetic/com.b2hsoft.taoa/">산수의 모험</a>(2014.06 ~ 2014.09)
      - 교육 게임 시나리오 작성
      - Unity3D를 이용하여 게임 디자인/개발
      - 현재 운영하지 않음
       </pre>

       <br>
      <h3># Skill</h3>
      <pre>
  - Windows Application: C/C++, MFC, C#(Winfrom)
  - <del>Linux Application: C/C++, QT</del>
  - Back-End: Java, Spring boot, AWS
  - Front-End: Nuxt.js
  - Database: MariaDB
  - <del>Android Application: Unity3D, C#</del>
  - ETC: Git/GitHub
       </pre>

       <br>
      <h3># Education</h3>
      <pre>
  - 2003.03 ~ 2010.02 부산동의대학교 멀티미디어공학과
  - 논문: <a href="https://scienceon.kisti.re.kr/srch/selectPORSrchArticle.do?cn=NPAP09751794&dbt=NPAP">적외선 조명 카메라를 이용한 동공 마우스 시스템 (An Eye Mouse System Using an Infrared Illumination Camera)</a>
       </pre>
    </div>
  </v-container>
</template>

<style scoped>
.parent {
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 15% 85%; /* 각 행(세로줄)의 길이 */
  /*grid-template-rows: 120px 310px 890px 130px; /* 각 열(가로줄)의 길이 */
  gap: 10px; /* 자식요소간의 간격 */
}

.child {
  width: 100%;
  height: 100%;
}
</style>