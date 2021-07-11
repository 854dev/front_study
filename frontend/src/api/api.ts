/* eslint-disable import/prefer-default-export */
// import ImgB from '../asset/img/img/watch.jpg';

interface IData {
  product_title: string;
  product_price: number;
  product_thumbnail: string;
  product_url: string;
  product_rating: string;
  product_rating_cnt: string;
}

const sleep = (n: number) => new Promise((resolve) => setTimeout(resolve, n));

const apiData: IData[] = [
  {
    product_title: '농심 육개장사발면 86g, 24개',
    product_price: 15900,
    product_thumbnail:
      '//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2018/10/17/3000267610/a9d16060-8102-4fcc-8a30-a25956ed48cc.jpg',
    product_url:
      'www.coupang.com/vp/products/196473?itemId=12769461&vendorItemId=73522297256',
    product_rating: '5.0',
    product_rating_cnt: '69615',
  },
  {
    product_title: '농심 김치 사발면 소컵 86g, 24개',
    product_price: 14120,
    product_thumbnail:
      '//thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2019/02/15/3002678476/99d9fcfd-e0fa-4b9a-a194-825dcfcdeb00.jpg',
    product_url:
      'www.coupang.com/vp/products/86564?itemId=2513608&vendorItemId=3002678476',
    product_rating: '5.0',
    product_rating_cnt: '18171',
  },
  {
    product_title: '오뚜기 진라면 순한맛 소컵 65g, 15개',
    product_price: 9260,
    product_thumbnail:
      '//thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/19695861367236-881953a2-ec5e-49bb-9c30-017526f079df.jpg',
    product_url:
      'www.coupang.com/vp/products/2258070?itemId=1074665&vendorItemId=70901823367',
    product_rating: '5.0',
    product_rating_cnt: '24534',
  },
  {
    product_title:
      '오뚜기+농심 컵라면 12종 오뚜기(진매+열+참깨+김치+진짬뽕+스낵면+유부우동+스파게티) 농심(신라면+육개장+튀김우동+새우탕) + 블루존물티슈, 1세트',
    product_price: 19800,
    product_thumbnail:
      '//thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/4b54/17e6ca340360d4c3d1245bca7114200d030ab8da838be26ac5b76b36c0c1.jpg',
    product_url:
      'www.coupang.com/vp/products/5471974165?itemId=8411064882&vendorItemId=75698700003',
    product_rating: '5.0',
    product_rating_cnt: '95',
  },
  {
    product_title:
      '소컵 신라면4입+튀김우동4입+얼큰너구리4입+새우탕4입, 소컵4종(신라면+튀김우동+얼큰너구리+새우탕) 4입씩',
    product_price: 15640,
    product_thumbnail:
      '//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/77a8/8e96184c9e93efbf6b5611c4ce5bc837d735d3f19398734c18843e40eb19.jpg',
    product_url:
      'www.coupang.com/vp/products/5416675507?itemId=8166663073&vendorItemId=75454837554',
    product_rating: '5.0',
    product_rating_cnt: '98',
  },
  {
    product_title:
      '농심 큰컵4종 (신라면4입+새우탕4입+튀김우동4입+육개장큰사발4입) 총16입, 농심큰컵(신라면+새우탕+튀김우동+육개장) 4개씩',
    product_price: 17650,
    product_thumbnail:
      '//thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7a64/5100c177b4c40c9bd739ee6d9a6548f568c258da51fe22240d8051f585f4.jpg',
    product_url:
      'www.coupang.com/vp/products/5397356265?itemId=8066614165&vendorItemId=76889224327',
    product_rating: '5.0',
    product_rating_cnt: '93',
  },
  {
    product_title:
      '농심 김치+너구리+사리곰탕+새우탕+오짬+육개장+짜파게티+튀김우동 x각 2개씩, 16개',
    product_price: 18200,
    product_thumbnail:
      '//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/images/2018/10/23/11/9/ecb8af23-b358-4ea8-b1a1-0f628f9cfcc7.jpg',
    product_url:
      'www.coupang.com/vp/products/148091748?itemId=428244470&vendorItemId=70936730712',
    product_rating: '4.5',
    product_rating_cnt: '1185',
  },
  {
    product_title:
      '소컵 신라면4입+안성탕면4입+얼큰너구리4입+짜파게티범벅4입, 소컵4종(신라면+안성탕면+얼큰너구리+짜파게티) 4입씩',
    product_price: 16720,
    product_thumbnail:
      '//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6aac/26f08afea863367d750c044b638e69d286cac7e0ce47e311ad5d37d34dd0.jpg',
    product_url:
      'www.coupang.com/vp/products/5416672321?itemId=8166650216&vendorItemId=75454824964',
    product_rating: '4.5',
    product_rating_cnt: '58',
  },
  {
    product_title: '농심 짜파게티 범벅 미니 컵라면 70g, 30개',
    product_price: 22500,
    product_thumbnail:
      '//thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2019/02/14/3000267640/e5c747a2-a4c5-4057-b5cf-ceb6a91d82a2.jpg',
    product_url:
      'www.coupang.com/vp/products/86430?itemId=361723&vendorItemId=73838689838',
    product_rating: '5.0',
    product_rating_cnt: '13558',
  },
  {
    product_title: '농심 짜파게티 큰사발면, 16개',
    product_price: 13010,
    product_thumbnail:
      '//thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2019/06/10/3000349591/9f318f96-10d2-4c4e-9274-daba4eb254e2.jpg',
    product_url:
      'www.coupang.com/vp/products/1790656?itemId=3239108&vendorItemId=3064586866',
    product_rating: '4.5',
    product_rating_cnt: '6784',
  },
  {
    product_title: '농심 간식팩토리 컵라면 소컵 16입, 1세트',
    product_price: 16900,
    product_thumbnail:
      '//thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/f5c5/c29f89cafd5db55f8a95ca5d62816997b62a9108314e80880825c88b6c01.jpg',
    product_url:
      'www.coupang.com/vp/products/5620920184?itemId=9113003466&vendorItemId=76473764654',
    product_rating: '5.0',
    product_rating_cnt: '18',
  },
  {
    product_title: '팔도왕뚜껑 미니 왕뚜껑 컵라면 80g, 16개',
    product_price: 10490,
    product_thumbnail:
      '//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2018/10/24/3059530010/b6c659cf-f368-431a-8982-87cb929a4558.jpg',
    product_url:
      'www.coupang.com/vp/products/2749967?itemId=39554971&vendorItemId=3059530010',
    product_rating: '4.5',
    product_rating_cnt: '6523',
  },
  {
    product_title: '농심 간식팩토리 소컵라면 4종 세트, 1세트',
    product_price: 16900,
    product_thumbnail:
      '//thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/296b/772e4f75005ff6f30b75b642c001374ae87346b21f3d6c2ded4c2f6511fd.jpg',
    product_url:
      'www.coupang.com/vp/products/5620927327?itemId=9113042119&vendorItemId=76473744648',
    product_rating: '5.0',
    product_rating_cnt: '17',
  },
  {
    product_title:
      '농심 육개장 사발면 컵라면 86g + 김치 사발면 컵라면 86g, 1세트, 12개',
    product_price: 9050,
    product_thumbnail:
      '//thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2017/04/04/15/9/f90c15b7-3839-490f-b26c-1a3d4f06d06d.jpg',
    product_url:
      'www.coupang.com/vp/products/53840682?itemId=188566654&vendorItemId=70354243351',
    product_rating: '4.5',
    product_rating_cnt: '2732',
  },
  {
    product_title: '농심 육개장 사발면 86g + 김치사발면 86g, 24개',
    product_price: 9310,
    product_thumbnail:
      '//thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/5f69/3ca917700b3783372ba2c3e2fdc30b1608d560578bbda46993cdb3060a71.jpg',
    product_url:
      'www.coupang.com/vp/products/200190082?itemId=1059668750&vendorItemId=74945829538',
    product_rating: '4.5',
    product_rating_cnt: '4914',
  },
  {
    product_title: '농심 [농심]사리곰탕큰사발 111gX16개, 16개',
    product_price: 13810,
    product_thumbnail:
      '//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2019/02/15/3059539877/94665851-6ee2-4993-a564-ea0f40dc9e95.jpg',
    product_url:
      'www.coupang.com/vp/products/86307?itemId=39569149&vendorItemId=3059539877',
    product_rating: '4.5',
    product_rating_cnt: '3393',
  },
  {
    product_title: '농심 오징어짬뽕 컵 67g, 30개',
    product_price: 19200,
    product_thumbnail:
      '//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2019/02/27/3002679501/cef7b219-d7bd-435a-91db-51d3f157b340.jpg',
    product_url:
      'www.coupang.com/vp/products/2066970?itemId=2513611&vendorItemId=3002679501',
    product_rating: '4.5',
    product_rating_cnt: '4442',
  },
  {
    product_title: '오뚜기 참깨라면 컵, 15개',
    product_price: 10100,
    product_thumbnail:
      '//thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/772725879381135-89fb8b61-99bc-4f59-938a-866e216a8f81.png',
    product_url:
      'www.coupang.com/vp/products/35300514?itemId=1074673&vendorItemId=3001027799',
    product_rating: '5.0',
    product_rating_cnt: '11125',
  },
  {
    product_title:
      '소컵 신라면4입+안성탕면4입+오징어짬뽕4입+짜파게티범벅4입, 소컵4종(신라면+안성탕면+오징어짬뽕+짜파게티)4입씩',
    product_price: 16410,
    product_thumbnail:
      '//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/5841/a953f8aea56a1ae95e974042866e7c5bef6155d1440ca705b94720e542b6.jpg',
    product_url:
      'www.coupang.com/vp/products/5416673324?itemId=8166654156&vendorItemId=75454828790',
    product_rating: '4.5',
    product_rating_cnt: '44',
  },
  {
    product_title:
      '[간식팩토리]농심 오뚜기 삼양 팔도 소컵 11종 소컵 컵라면 종합 총 22개',
    product_price: 19900,
    product_thumbnail:
      '//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6981/75285ab7d92b596317847ced36315d2aeba489087702df746a7328b3edf3.jpg',
    product_url:
      'www.coupang.com/vp/products/5413184963?itemId=8149756407&vendorItemId=75437969121',
    product_rating: '4.5',
    product_rating_cnt: '35',
  },
  {
    product_title: '오뚜기 열라면 용기 105g, 12개',
    product_price: 8320,
    product_thumbnail:
      '//thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/357752400995249-46f80f64-dc78-4445-94eb-9a8758d057dd.png',
    product_url:
      'www.coupang.com/vp/products/1319548870?itemId=43476604&vendorItemId=3068021341',
    product_rating: '5.0',
    product_rating_cnt: '3686',
  },
  {
    product_title: '농심 새우탕 컵라면 소 67g, 30개',
    product_price: 22000,
    product_thumbnail:
      '//thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2019/02/27/3002679502/ba5eb020-3a3e-48ca-85c6-8ba3980be5f1.jpg',
    product_url:
      'www.coupang.com/vp/products/2465270?itemId=2513612&vendorItemId=75851752682',
    product_rating: '5.0',
    product_rating_cnt: '10701',
  },
  {
    product_title: '오뚜기 진짬뽕 컵라면 115g, 12개',
    product_price: 12170,
    product_thumbnail:
      '//thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5955275500380-5584039b-af3c-4e37-992c-611ffa419882.jpg',
    product_url:
      'www.coupang.com/vp/products/2131221?itemId=9535254&vendorItemId=3059593520',
    product_rating: '5.0',
    product_rating_cnt: '3769',
  },
  {
    product_title:
      '오뚜기 농심 삼양 용기 컵라면 12종 (진매+참깨+열+김치면+신라면+육개장+튀김우동+새우탕+삼양라면+불닭볶음+까르보불닭+간짬뽕) + 블루존물티슈, 1세트',
    product_price: 20900,
    product_thumbnail:
      '//thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/f83e/e081e2cca966e7d830544f076f558c8539d28db42b5b76667e244c303b67.jpg',
    product_url:
      'www.coupang.com/vp/products/5689932722?itemId=9419051364&vendorItemId=76704005293',
    product_rating: '5.0',
    product_rating_cnt: '2',
  },
  {
    product_title: '신라면 건면 사발 77g, 16개',
    product_price: 15900,
    product_thumbnail:
      '//thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2020/05/13/18/2/14d0fb6b-e605-4f1f-a8fe-23f7b0354304.jpg',
    product_url:
      'www.coupang.com/vp/products/1568884328?itemId=2693169688&vendorItemId=70683603474',
    product_rating: '5.0',
    product_rating_cnt: '2046',
  },
  {
    product_title:
      '삼양 삼양라면 소컵 65g 30개입 박스 식품 > 가공/즉석식품 면류/라면류 컵라면, 30개',
    product_price: 17960,
    product_thumbnail:
      '//thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2016/12/19/3051507710/09887136-4762-4892-b05c-3832b23dbeb8.jpg',
    product_url:
      'www.coupang.com/vp/products/14366?itemId=34797185&vendorItemId=3051507710',
    product_rating: '4.5',
    product_rating_cnt: '3577',
  },
  {
    product_title:
      '오뚜기 컵라면 (8+4) 총 12종 (진매+진순+육개장+새우탕+참깨+김치면+튀김우동+열라면) + (치즈+라면+짜장+스파게티) + 블루존물티슈, 1세트',
    product_price: 18200,
    product_thumbnail:
      '//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1cc1/b53f622548e87f5a741992021f2d7699e67ce2390e3ec6a055a0fd08d094.jpg',
    product_url:
      'www.coupang.com/vp/products/5491128627?itemId=8501071674&vendorItemId=75788578959',
    product_rating: '4.5',
    product_rating_cnt: '15',
  },
  {
    product_title: '팔도 김치왕뚜껑 110g, 18개',
    product_price: 13950,
    product_thumbnail:
      '//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/81313467982288-6350ad67-c9fc-462a-a2e8-f5024a011c3f.png',
    product_url:
      'www.coupang.com/vp/products/985883?itemId=4106045&vendorItemId=3059595623',
    product_rating: '5.0',
    product_rating_cnt: '8331',
  },
  {
    product_title: '신라면 큰사발 114g, 16개',
    product_price: 14280,
    product_thumbnail:
      '//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2016/07/15/3000267620/1bf43962-43ec-4f7e-9393-770c27afefb7.jpg',
    product_url:
      'www.coupang.com/vp/products/1195586864?itemId=585933526&vendorItemId=3057728164',
    product_rating: '5.0',
    product_rating_cnt: '6279',
  },
  {
    product_title: '농심 앵그리 짜파구리 큰사발 컵라면, 108g, 16개',
    product_price: 15260,
    product_thumbnail:
      '//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2020/04/17/10/6/1a65e188-b766-4415-a9da-271b4feefaa8.jpg',
    product_url:
      'www.coupang.com/vp/products/1476695010?itemId=2537585405&vendorItemId=70530342208',
    product_rating: '5.0',
    product_rating_cnt: '1812',
  },
  {
    product_title: '농심 새우탕 큰사발면 115 g, 16개',
    product_price: 11840,
    product_thumbnail:
      '//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2019/02/14/3059533778/7220e60b-29ae-4b8a-8d5a-a9706a435672.jpg',
    product_url:
      'www.coupang.com/vp/products/4015263?itemId=22996860&vendorItemId=3059533778',
    product_rating: '4.5',
    product_rating_cnt: '6329',
  },
  {
    product_title: '삼양 육개장 86g, 24개',
    product_price: 14920,
    product_thumbnail:
      '//thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2019/03/04/3142587053/1bbcaa86-0c5c-47ac-b59a-d2e4f2517a24.jpg',
    product_url:
      'www.coupang.com/vp/products/329005183?itemId=1052125600&vendorItemId=5519778991',
    product_rating: '4.5',
    product_rating_cnt: '6082',
  },
];

export const getItems = async () => {
  await sleep(500); // 0.5초 쉬고
  return apiData; // peymentHeader 배열
};
