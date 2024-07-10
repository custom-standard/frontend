import { Category } from "./types/Category";
import { Chat } from "./types/Chat";
import { DateTime } from "./types/DateTime";
import {
  ChatNotification,
  OrderNotification,
  ProposeNotification,
  ReviewNotification,
} from "./types/Notification";
import { Order } from "./types/Order";
import { OrderStatus } from "./types/OrderStatus";
import { Post } from "./types/Post";
import { Propose } from "./types/Propose";
import { Review } from "./types/Review";
import { User, UserArtist } from "./types/User";

const sampleUser: User = {
  uuid: "test UUID",
  provider: "KAKAO",
  email: "test@email.com",
  name: "테스트",
  profileImageUrl:
    "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27738433597DCB1312",
};

const sampleUser2: User = {
  uuid: "test UUID2",
  provider: "NAVER",
  email: "test2@email.com",
  name: "테스트2",
  profileImageUrl:
    "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27738433597DCB1312",
};

const sampleDate: DateTime = {
  date: new Date("2024-06-18T14:00:00+09:00"),
  time: new Date("2024-06-18T14:00:00+09:00"),
};

const sampleArtist: UserArtist = {
  uuid: "test UUID",
  name: "테스트",
  description:
    "커스텀 케이크를 판매합니다! 캐릭터 커스텀 케이크, 레터링 커스텀 케이크를 주로 판매합니다. 더 길게 더 길게 더 길게 더 길게 더 길게 더 길게",
  profileImageUrl:
    "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27738433597DCB1312",
};

const sampleCategory: Category = {
  categoryId: 1,
  name: "식품",
  description: "음식 관련 카테고리",
};

const samplePost: Post = {
  postId: 1,
  category: sampleCategory,
  type: "구매",
  title: "테스트 제목",
  image: [],
  dates: [sampleDate],
  delivery: false,
  minPrice: 30000,
  maxPrice: 100000,
  writer: sampleUser,
};

const sampleStatus: OrderStatus = {
  index: 1,
  description: "준비중",
};

const sampleOrder: Order = {
  orderId: 1,
  post: samplePost,
  requester: sampleUser,
  responder: sampleUser,
  price: 10000,
  date: sampleDate,
  status: sampleStatus,
  isRequest: true,
};

const sampleOrders: Order[] = [sampleOrder, sampleOrder, sampleOrder];

const sampleReview: Review = {
  reviewId: 1,
  order: sampleOrder,
  writer: sampleUser,
  rating: 4,
  description:
    "너무 마음에 드는 케이크 집을 찾아서 좋아요!!! 너무 달지 않고 물리지 않게 많이 먹을 수 있는 케이크였어요. 요청 사항도 잘 들어주셔서 넘 마음에 들었던 주문이었습니다~ ",
  images: [
    // "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27738433597DCB1312",
  ],
};

const sampleChat: Chat = {
  other: sampleUser,
  message: "hello",
  time: new Date("2024-06-14T14:00:00+09:00"),
  read: true,
};

const date = new Date();

const samplePropose: Propose = {
  sender: sampleUser,
  receiver: sampleUser2,
  order: sampleOrder,
};

const sampleOrderNotification: OrderNotification = {
  type: "order",
  order: sampleOrder,
  orderStatus: sampleStatus,
  time: date,
};

const sampleProposeNotification: ProposeNotification = {
  type: "propose",
  order: sampleOrder,
  propose: samplePropose,
  sender: sampleUser,
  time: date,
};

const sampleReviewNotification: ReviewNotification = {
  type: "review",
  review: sampleReview,
  time: date,
};

const sampleChatNotification: ChatNotification = {
  type: "chat",
  chat: sampleChat,
  time: date,
};

const sampleNotifications = [
  sampleOrderNotification,
  sampleProposeNotification,
  sampleReviewNotification,
  sampleChatNotification,
];

export {
  sampleUser,
  sampleDate,
  sampleArtist,
  sampleCategory,
  samplePost,
  sampleStatus,
  sampleOrder,
  sampleOrders,
  sampleReview,
  sampleChat,
  sampleNotifications,
};
