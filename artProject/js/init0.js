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
        intro: '2024 해외교류전 [와엘 샤키] <br> 기간: 2024-09-10~2025-02-23 <br> 장소: 대구미술관 1전시실'
      },
      {
        pcode: 'P002',
        pname: '어미홀프로젝트',
        author: '<칼 안드레>',
        price: 8000,
        image: '어미홀.png'
      },
      {
        pcode: 'P003',
        pname: '다티스트',
        author: '<이기칠: 작업에서 연습으로>',
        price: 6000,
        image: '다티스트.png'
      },
      {
        pcode: 'P004',
        pname: '입장권',
        author: ' ',
        price: 0,
        image: 'ticket.jpg'
      }
    ]

    // id, pcode, qty
    const cartData = [{
        id: 'user01',
        pcode: 'P001',
        qty: 2
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
