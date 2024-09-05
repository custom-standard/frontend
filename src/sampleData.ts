import { randomUUID } from "crypto";
import { Category } from "./types/Category";
import { Chat } from "./types/Chat";
import { DateTime } from "./types/DateTime";
import {
  ChatNotification,
  OrderNotification,
  ProposeNotification,
  ReviewNotification,
} from "./types/Notification";
import { Order, SimpleOrder } from "./types/Order";
import { OrderStatus } from "./types/OrderStatus";
import { Post, SimplePost } from "./types/Post";
import { Proposal } from "./types/Proposal";
import { Review } from "./types/Review";
import { User } from "./types/User";

const sampleImage =
  "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27738433597DCB1312";

const sampleFile = {
  fileUrl: sampleImage,
  fileName: "고양이",
  fileType: "png",
};

const sampleUser: User = {
  userUUID: "TEST UUID",
  email: "test@email.com",
  name: "테스트",
  profileImageUrl: sampleImage,
};

const sampleUser2: User = {
  userUUID: "TEST UUID2",
  email: "test2@email.com",
  name: "테스트2",
  profileImageUrl: sampleImage,
};

const sampleDate: DateTime = {
  date: new Date("2024-06-18T14:00:00+09:00"),
  time: new Date("2024-06-18T14:00:00+09:00"),
};

const sampleArtist: User = {
  userUUID: "TEST UUID3",
  email: "artist@email.com",
  name: "아티스트",
  profileImageUrl: sampleImage,
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
  title: "테스트 구매 제목",
  thumbnail: sampleFile,
  dates: [sampleDate],
  delivery: false,
  minPrice: 30000,
  maxPrice: 100000,
  writer: sampleUser,
};

const sampleSimplePost: SimplePost = {
  postId: 1,
  category: sampleCategory,
  type: "구매",
  title: "테스트 구매 제목",
  thumbnail: sampleFile,
  writer: sampleUser,
};

const sampleStatus: OrderStatus = {
  index: 1,
  description: "준비중",
};

const sampleOrder: Order = {
  orderId: 1,
  post: sampleSimplePost,
  requester: sampleUser,
  responder: sampleUser,
  requestMessage: "어버이날 커스텀 케이크 신청합니다",
  images: [sampleFile],
  price: 10000,
  date: [sampleDate],
  status: sampleStatus,
  isRequest: true,
};

const sampleSimpleOrder: SimpleOrder = {
  orderId: 1,
  post: sampleSimplePost,
  price: 80000,
  requester: sampleUser,
  responder: sampleUser,
};

const sampleOrders: Order[] = [sampleOrder, sampleOrder, sampleOrder];

const sampleReview: Review = {
  reviewId: 1,
  order: sampleSimpleOrder,
  writer: sampleUser,
  rating: 4,
  description:
    "너무 마음에 드는 케이크 집을 찾아서 좋아요!!! 너무 달지 않고 물리지 않게 많이 먹을 수 있는 케이크였어요. 요청 사항도 잘 들어주셔서 넘 마음에 들었던 주문이었습니다~ ",
  images: [
    // sampleImage
  ],
};

const sampleChat: Chat = {
  other: sampleUser,
  message:
    "테스트를 위한 길고 길고 기이이일고 기이이이이이이일고 기이이이이이이이이이인 메세지",
  time: new Date("2024-06-14T14:00:00+09:00"),
  read: true,
};

const date = new Date();

const sampleProposal: Proposal = {
  proposalId: 1,
  order: sampleSimpleOrder,
  sender: sampleUser,
  price: 87000,
  date: sampleDate,
  message:
    "커스텀 케이크에 사용된 분홍, 주황, 노랑 크림 추가에 따른 추가 금액이 발생합니다.",
  images: [sampleFile],
  status: "REJECTED",
};

const sampleOrderNotification: OrderNotification = {
  type: "order",
  order: sampleOrder,
  time: date,
};

const sampleProposalNotification: ProposeNotification = {
  type: "propose",
  propose: sampleProposal,
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
  sampleProposalNotification,
  sampleReviewNotification,
  sampleChatNotification,
];

const sampleDates = [
  new Date("2024-09-01T00:00:00"),
  new Date("2024-09-04T00:00:00"),
  new Date("2024-09-05T00:00:00"),
  new Date("2024-09-07T00:00:00"),
  new Date("2024-10-01T00:00:00"),
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
  sampleProposal,
  sampleNotifications,
  sampleDates,
};
