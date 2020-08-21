import React from 'react';
import CartProduct from '../CartProduct';
import { StyledProductListWrapper } from './CartProductList.styles';

interface ProductType {
  id: number;
  subcategoryId: number;
  thumbImgUrl: string;
  mainImgUrl: string;
  description: string;
  price: number;
  discount: number;
  name: string;
  maxQuantity: number;
  stock: number;
  removed: number;
  createdAt: string | null;
  updatedAt: string | null;
}

interface CarProductProps {
  products: ProductType[];
}

export default function CartProductList({ products }: CarProductProps) {
  const renderCartProduct = () => {
    return products.map((product) => <CartProduct product={product} />);
  };

  return (
    <StyledProductListWrapper>{renderCartProduct()}</StyledProductListWrapper>
  );
}

CartProductList.defaultProps = {
  products: [
    {
      id: 1,
      subcategoryId: 1,
      thumbImgUrl:
        'https://img-cf.kurly.com/shop/data/goods/1530172373295l0.jpg',
      mainImgUrl:
        'http://img-cf.kurly.com/shop/data/goodsview/20180628/gv40000026292_1.jpg',
      description:
        '간단히 쪄 먹기도 좋고, 다양한 요리와 함께 곁들여 먹기도 좋은 감자는 우리 식탁에 빼놓을 수 없는 식재료지요. 탄수화물은 물론이고 단백질, 비타민C까지 풍부해 마치 곡류와 채소를 동시에 먹은 것과 같은 효과를 줍니다. 컬리는 그때그때 유명산지 감자를 가락시장에서 수급하여 보내드립니다. 포슬포슬한 식감에 고소하고 은은한 단맛이 나 볶음, 구이, 튀김 등 다양하게 요리해서 먹을 수 있어요. 매일 식탁에 올려도 질리지 않는 감자를 컬리에서 간편하게 만나보세요.',
      price: 2200,
      discount: 0,
      name: '[KF365] 햇 감자 1kg',
      maxQuantity: 5,
      stock: 100,
      removed: 0,
      createdAt: null,
      updatedAt: null,
    },
    {
      id: 2,
      subcategoryId: 1,
      thumbImgUrl:
        'https://img-cf.kurly.com/shop/data/goods/1583285919646l0.jpg',
      mainImgUrl:
        'http://img-cf.kurly.com/shop/data/goodsview/20200304/gv40000083900_1.jpg',
      description:
        '아삭아삭한 식감과 은은한 단맛을 지닌 당근. 김밥이나 계란말이처럼 우리 일상을 든든하게 채워주는 음식에 꼭 들어가는 반가운 채소인데요. 주홍빛 당근 하나만 더해줘도 요리의 색감이 화사하게 피어나지요. 요리에 자주 사용하는 필수 재료지만, 한 번에 많이 구비해두면 보관하기도 힘들고 쉽게 무르곤 해요. 그래서 컬리는 당근을 딱 한끼 깔끔하게 즐길 수 있는 분량만큼 담아 보내드립니다. 번거롭게 손질할 일도 없고 남은 재료를 어떻게 처리할지 걱정할 필요도 없지요. 끼니마다 신선한 채소로 다채로운 요리를 완성해보세요.',
      price: 1000,
      discount: 0,
      name: '한끼 당근 1개',
      maxQuantity: 5,
      stock: 0,
      removed: 0,
      createdAt: null,
      updatedAt: null,
    },
    {
      id: 3,
      subcategoryId: 1,
      thumbImgUrl:
        'https://img-cf.kurly.com/shop/data/goods/1531993158257l0.jpg',
      mainImgUrl:
        'http://img-cf.kurly.com/shop/data/goodsview/20180719/gv40000027603_1.jpg',
      description:
        '수분이 가득한 채소로 식욕을 자극하는 여름 채소, 오이를 소개합니다. GAP 인증 지정농장에서 재배하는 오이로 일반 백오이보다 크기가 크고 일반 다대기오이보다 향도 훨씬 진한 편이에요. 칼로리가 낮고 지방 함량이 적기 때문에 식이 조절에도 도움을 주죠. 게다가 풍부한 수분이 여름철 부족해진 수분을 보충해주니 여름이면 꼭 찾게 됩니다. 생으로 그냥 먹거나 샐러드나 조림, 볶음 등에 이용하세요. 특히 여름철 빠지면 섭섭한 새콤하고 시원한 맛이 으뜸인 오이냉국, 참기름에 달달 볶아 고소한 맛을 내는 오이나물을 추천해요. 반찬마저도 시원한 맛을 찾게 되는 여름, 성질이 차가운 오이로 몸속 열기를 식혀보세요.',
      price: 3100,
      discount: 0,
      name: 'GAP 오이 2입',
      maxQuantity: 5,
      stock: 100,
      removed: 0,
      createdAt: null,
      updatedAt: null,
    },
    {
      id: 4,
      subcategoryId: 1,
      thumbImgUrl:
        'https://img-cf.kurly.com/shop/data/goods/1463997072538l0.jpg',
      mainImgUrl:
        'http://img-cf.kurly.com/shop/data/goodsview/20170511/gv40000003012_1.jpg',
      description:
        '아름다운 빛깔로, 그 빛깔에 가득 함유된 영양 성분으로 많은 사랑을 받는 색깔 채소. 그중에서도 당근은 선명한 주황 빛깔로 식탁에 산뜻한 분위기를 한껏 선사하죠. 선명한 주황빛의 비밀은 바로 ‘베타카로틴’ 성분이 풍부하기 때문인데요. 이 베타카로틴은 우리 몸 안에 들어와 비타민 A로 바뀌는 성분이랍니다. 그뿐만 아니라 당근의 영어 이름인 Carrot은 Carotene(카로틴)에서 유래되었을 정도라고 해요. 이 좋은 당근을 컬리는 깐깐히 엄선했어요. 무농약으로 재배되어 더욱 안심하고 즐길 수 있답니다. 갈아서 주스로, 아삭아삭 장에 찍어 먹는 찬으로, 영양 간식으로도 좋은 당근을 컬리에서 함께 하세요.',
      price: 2700,
      discount: 0,
      name: '친환경 당근 500g',
      maxQuantity: 5,
      stock: 100,
      removed: 0,
      createdAt: null,
      updatedAt: null,
    },
    {
      id: 5,
      subcategoryId: 1,
      thumbImgUrl:
        'https://img-cf.kurly.com/shop/data/goods/1573711443599l0.jpg',
      mainImgUrl:
        'http://img-cf.kurly.com/shop/data/goodsview/20191114/gv30000068203_1.jpg',
      description:
        '양배추는 서양의 3대 장수식품으로 꼽힐 정도로 높은 영양소 함유량을 자랑합니다. 특히 비타민 U 함량이 높아 꾸준히 섭취하면 좋은데요. 자주 찾아 먹는 채소인 만큼 농약을 걱정하는 분들이 참 많습니다. 그래서 컬리는 농약을 사용하지 않고 안전하게 기른 무농약 양배추를 준비했습니다. 1/2로 소분한 제품이기에 남기지 않고 먹기 더없이 좋지요. 얇게 사사삭 채를 썬 뒤, 드레싱을 뿌려 드시거나, 보드랍게 삶아 쌈밥 재료로도 활용해 보세요.',
      price: 2900,
      discount: 0,
      name: '무농약 양배추 1/2통',
      maxQuantity: 5,
      stock: 100,
      removed: 0,
      createdAt: null,
      updatedAt: null,
    },
    {
      id: 6,
      subcategoryId: 1,
      thumbImgUrl:
        'https://img-cf.kurly.com/shop/data/goods/1593066870177l0.jpg',
      mainImgUrl:
        'http://img-cf.kurly.com/shop/data/goodsview/20200625/gv00000103625_1.jpg',
      description:
        '늘 먹는 채소도 기본이 중요합니다. 없으면 허전한 필수 채소, 신선하게 담아가 보세요. 양배추는 부드러운 맛과 아삭한 식감, 무궁무진한 쓰임새로 사랑받는데요. 수분감 가득한 잎을 그대로 썰어 아삭하게 즐기기에도, 살짝 데치거나 볶아 먹기에도 훌륭하지요. 적당한 크기로 자른 조각 양배추와 온전한 양배추 한 통을 준비했으니 필요한 쪽을 골라보세요. 건강한 식탁을 위한 한 발이 가벼워 질 거예요.',
      price: 1980,
      discount: 0,
      name: '양배추 2종',
      maxQuantity: 5,
      stock: 100,
      removed: 0,
      createdAt: null,
      updatedAt: null,
    },
  ],
} as Partial<CarProductProps>;
