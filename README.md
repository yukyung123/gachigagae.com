# 같이가개(Gachigagae)

<i>행궁동 주변 반려동물과 함께 입장이 가능한 카페를 알려주는 서비스</i>

<br>

## 1. 진행 기간 및 인원

진행 기간 : 11월 8일 ~ 11월 26일 (18일)

**프론트엔드**: 김유경  
**백엔드**: 정민찬

## 2. 목적

행궁동 주변에는 반려동물 허용 카페가 알게 모르게 많이 존재하고 있습니다.  
하지만, 이런 정보들은 네이버 지도나 카카오 맵에서는 한 번에 찾아보기 힘들었고, 각 개인 카페에서 운영하는 인스타 계정에서 정확한 정보를 확인할 수 있었습니다.

위와 같은 불편함을 느끼면서, 반려동물 입장 정보와 해당 카페에 대한 정보를 손쉽게 확인하여,
이쁘고 편안한 카페에 반려견과 같이 놀러 갈 수 있으면 좋겠다는 생각이 들어 이 프로젝트를 시작하게 되었습니다.

## 3. 적용기술

- [React](https://ko.reactjs.org/)

- [Naver Cloud Maps](https://www.ncloud.com/product/applicationService/maps)

- [axios](https://www.npmjs.com/package/axios)

- [react-router-dom](https://www.npmjs.com/package/react-router-dom)

- [react-device-detect](https://www.npmjs.com/package/react-device-detect)

- [styled-components](https://styled-components.com/)

- [Material Ui](https://mui.com/)

- [react-material-ui-carousel](https://www.npmjs.com/package/react-material-ui-carousel)

- [react-lottie](https://www.npmjs.com/package/react-lottie)

## 4. 구현기능

- 👀리스트 뷰
  ![image](https://user-images.githubusercontent.com/49505843/143827670-bfea0d03-a190-4f40-a0f7-a721eb2e45af.png)

  - 👆**ui**  
    행궁동 지도에 마커를 표시하여 행궁동 내 반려동물 카페를 한눈에 파악할 수 있게 했습니다.

    추천카페, 별점, 뱃지를 통해 카페 별 특징을 나타내어 사용자들이 원하는 카페를 손쉽게 확인할 수 있도록 만들었습니다.

  - 👆**기능**  
    useEffect훅을 사용하여 비동기적으로 데이터를 호출하였고 axios를 사용해 백엔드 데이터를 가져와 전체 카페 리스트를 보여주었습니다.

    map()를 사용해 가져온 데이터를 원하는 리스트뷰로 만들어 주었습니다.

- 👀상세 뷰
  ![image](https://user-images.githubusercontent.com/49505843/143827742-19c5ead9-4cad-4af2-8100-ce8eabf8029e.png)

  - 👆**ui**  
    원하는 위치의 카페의 정보를 쉽게 접근할 수 있게끔 하기 위해 지도 내의 마커를 클릭하면 상세 페이지 바로 넘어갈 수 있게 구현하였습니다.

    페이지가 랜딩되는 동안에는 lottie 이미지를 넣어주었습니다.

    상세페이지 바에는 사진을 캐러셀로 구현하여 한 div안에서 여러 사진을 넘기며 해당 카페의 내부를 쉽게 확인할 수 있게 했습니다.

    해당 카페의 위치, 운영 시간, 휴무일, 메뉴 정보를 넣어 카페 상세정보를 추가해주었습니다.

    부가적인 정보를 원하는 이용자를 위해 '전화해보개'버튼과 인스타링크를 추가해놓았습니다.

  - 👆**기능**  
    useEffect훅을 사용하여 비동기적으로 데이터를 호출하였고 axios를 사용해 백엔드 데이터를 가져와 상세 데이터를 보여주었습니다.

    map()를 사용해 가져온 데이터를 원하는 상세뷰로 만들어 주었습니다.

    table 태그를 사용해 메뉴를 구현했습니다.

## 5. 후기

거의 한 달이 안되는 기간 동안 저의 첫 프로젝트를 끝냈습니다.  
같이가개는 김캐디, 네이버 지도, 배달의 민족의 UI를 참고해 빌드했습니다.

우여곡절이 많았고, 프로젝트를 해본 경험이 없다 보니, 그 다음 기능추가를 하기 힘든 코드를 작성하기도 했고, 오타 하나 때문에 많은 시간을 쏟기도 했습니다😂.  
하지만 공자는 이런 말을 했죠... 가장 큰 영광은 한 번도 실패하지 않는 게 아니라 실패할 때마다 다시 일어서는 데에 있다고 말입니다...⭐

많은 역경(에러)에도 불구하고 결국 성공적으로 같이가개 프로젝트를 마무리한 저에게 칭찬의 박수를 보냅니다.👏  
마지막으로, 아무것도 몰랐던 나에게 많은 걸 가르쳐 주고 백엔드까지 맡아준 민찬. 정말 고마워
