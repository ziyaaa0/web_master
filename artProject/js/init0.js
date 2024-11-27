    // id, pw, name
    const memberData = [{
        id: 'user01',
        pw: '1111',
        name: '사용자1',
        responsibility: 'User'
      },
      {
        id: 'user02',
        pw: '2222',
        name: '사용자2',
        responsibility: 'User'
      },
      {
        id: 'user03',
        pw: '3333',
        name: '사용자3',
        responsibility: 'Admin'
      }
    ]

    // pcode, pname, price
    const productData = [{
        pcode: 'P001',
        pname: '해외교류전',
        author:'<와엘 샤키>',
        price: 12000,
        image: '해외교류전.png',
        detail: '<p><b>2024 해외교류전《와엘 샤키》</b></p><br>· 전시기간 : 2024. 9. 10.(화) ~ 2025. 2. 23.(일) <br>· 전시장소 : 대구미술관 1전시실 <br>· 전시구성 : 영상 작품 3편 및 조각, 설치 등 70여 점 '
      },
      {
        pcode: 'P002',
        pname: '어미홀프로젝트',
        author: '<칼 안드레>',
        price: 8000,
        image: '어미홀.jpg',
        detail: '<p><b>2023 어미홀프로젝트 《칼 안드레》</b></p> <br>· 전시기간 : 2023. 9. 26.(화) ~ 2023. 12. 31.(일) <br>· 전시장소 : 대구미술관 어미홀  <br>· 참여작가 : 칼 안드레(b. 1935, 퀸시, 메사추세츠, 미국)'
      },
      {
        pcode: 'P003',
        pname: '다티스트',
        author: '<이기칠: 작업에서 연습으로>',
        price: 6000,
        image: '다티스트.png',
        detail: '<p><b>2024 다티스트 《이기칠: 작업에서 연습으로》</b></p><br>· 전시기간 : 2024. 6. 25.(화) - 9. 29.(일) <br>· 전시장소 : 대구미술관 2, 3전시실 <br>· 전시구성 : 회화, 조각, 설치 등'
      },
      {
        pcode: 'P004',
        pname: '입장권',
        author: ' ',
        price: 0,
        image: 'ticket.jpg',
        detail: '무료입장권 입니다.'
      }]

    const productData2 = [{
      pcodes: 'P005',
      pnames: '소장품 기획전',
      authors:'<회화 아닌(Not Paintings)>',
      price: 0,
      images: '소장품.jpg',
      details: '<p><b>2024 해외교류전《와엘 샤키》</b></p><br>· 전시기간 : 2024. 9. 10.(화) ~ 2025. 2. 23.(일) <br>· 전시장소 : 대구미술관 1전시실 <br>· 전시구성 : 영상 작품 3편 및 조각, 설치 등 70여 점 '
    },
    {
      pcodes: 'P006',
      pnames: '대구포럼 Ⅲ',
      authors: '<누구의 숲, 누구의 세계>',
      price: 0,
      images: '숲.jpg',
      details: '<p><b>2023 어미홀프로젝트 《칼 안드레》</b></p> <br>· 전시기간 : 2023. 9. 26.(화) ~ 2023. 12. 31.(일) <br>· 전시장소 : 대구미술관 어미홀  <br>· 참여작가 : 칼 안드레(b. 1935, 퀸시, 메사추세츠, 미국)'
    },
    {
      pcodes: 'P007',
      pnames: '렘브란트, 17세기의 사진가',
      authors: '<렘브란트>',
      price: 0,
      images: '렘.jpg',
      details: '<p><b>2023 어미홀프로젝트 《칼 안드레》</b></p> <br>· 전시기간 : 2023. 9. 26.(화) ~ 2023. 12. 31.(일) <br>· 전시장소 : 대구미술관 어미홀  <br>· 참여작가 : 칼 안드레(b. 1935, 퀸시, 메사추세츠, 미국)'
    },
    {
      pcodes: 'P008',
      pnames: '국립현대미술관 순회전',
      authors: '<탄생 100주년 기념: 곽인식>',
      price: 0,
      images: '순.jpg',
      details: '<p><b>2023 어미홀프로젝트 《칼 안드레》</b></p> <br>· 전시기간 : 2023. 9. 26.(화) ~ 2023. 12. 31.(일) <br>· 전시장소 : 대구미술관 어미홀  <br>· 참여작가 : 칼 안드레(b. 1935, 퀸시, 메사추세츠, 미국)'
    }]
    // id, pcode, qty
    const cartData = [{
        id: 'user01',
        pcode: 'P001',
        qty: 5
      },
      {
        id: 'user01',
        pcode: 'P004',
        qty: 2
      },
      
      {
        id: 'user02',
        pcode: 'P001',
        qty: 1
      },
      {
        id: 'user02',
        pcode: 'P003',
        qty: 1
      },
      {
        id: 'user02',
        pcode: 'P004',
        qty: 1
      }
    ]
