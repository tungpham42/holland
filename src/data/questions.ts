import { HollandType } from "./riasecDescriptions";

export interface Question {
  id: number;
  text: string;
  type: HollandType;
  displayOrder: number; // New field for sequential display number
}

export const questions: Question[] = [
  // Initialize questions with displayOrder set to id initially (will be reassigned on shuffle)
  { id: 1, text: "Tôi thích sửa chữa máy móc.", type: "R", displayOrder: 1 },
  { id: 2, text: "Tôi thích làm việc ngoài trời.", type: "R", displayOrder: 2 },
  {
    id: 3,
    text: "Tôi thích xây dựng hoặc lắp ráp vật dụng.",
    type: "R",
    displayOrder: 3,
  },
  {
    id: 4,
    text: "Tôi thích lái xe hoặc vận hành máy móc.",
    type: "R",
    displayOrder: 4,
  },
  {
    id: 5,
    text: "Tôi thích dùng dụng cụ cầm tay hoặc thiết bị.",
    type: "R",
    displayOrder: 5,
  },
  {
    id: 6,
    text: "Tôi thích sửa điện hoặc hệ thống kỹ thuật.",
    type: "R",
    displayOrder: 6,
  },
  {
    id: 7,
    text: "Tôi muốn làm việc trong môi trường không bị gò bó.",
    type: "R",
    displayOrder: 7,
  },
  {
    id: 8,
    text: "Tôi thích làm việc bằng tay hơn là đầu óc.",
    type: "R",
    displayOrder: 8,
  },
  {
    id: 9,
    text: "Tôi thích nghề nông, lâm nghiệp hoặc thủ công.",
    type: "R",
    displayOrder: 9,
  },
  {
    id: 10,
    text: "Tôi thích các hoạt động thể chất hoặc thể thao.",
    type: "R",
    displayOrder: 10,
  },
  {
    id: 11,
    text: "Tôi thích giải các bài toán phức tạp.",
    type: "I",
    displayOrder: 11,
  },
  {
    id: 12,
    text: "Tôi thích nghiên cứu hiện tượng tự nhiên.",
    type: "I",
    displayOrder: 12,
  },
  {
    id: 13,
    text: "Tôi tò mò muốn biết cách hoạt động của mọi thứ.",
    type: "I",
    displayOrder: 13,
  },
  { id: 14, text: "Tôi thích đọc sách khoa học.", type: "I", displayOrder: 14 },
  {
    id: 15,
    text: "Tôi thích lập giả thuyết và kiểm nghiệm.",
    type: "I",
    displayOrder: 15,
  },
  { id: 16, text: "Tôi thích phân tích dữ liệu.", type: "I", displayOrder: 16 },
  {
    id: 17,
    text: "Tôi thích làm việc độc lập để tìm ra câu trả lời.",
    type: "I",
    displayOrder: 17,
  },
  {
    id: 18,
    text: "Tôi thường thắc mắc về nguyên nhân sự việc.",
    type: "I",
    displayOrder: 18,
  },
  {
    id: 19,
    text: "Tôi thích viết báo cáo nghiên cứu.",
    type: "I",
    displayOrder: 19,
  },
  {
    id: 20,
    text: "Tôi quan tâm đến công nghệ và phát minh mới.",
    type: "I",
    displayOrder: 20,
  },
  {
    id: 21,
    text: "Tôi thích vẽ hoặc thiết kế đồ họa.",
    type: "A",
    displayOrder: 21,
  },
  {
    id: 22,
    text: "Tôi thích biểu diễn nghệ thuật (như hát, múa).",
    type: "A",
    displayOrder: 22,
  },
  {
    id: 23,
    text: "Tôi thích viết truyện, thơ hoặc kịch bản.",
    type: "A",
    displayOrder: 23,
  },
  {
    id: 24,
    text: "Tôi yêu thích màu sắc và hình ảnh.",
    type: "A",
    displayOrder: 24,
  },
  {
    id: 25,
    text: "Tôi thích sáng tạo ý tưởng mới.",
    type: "A",
    displayOrder: 25,
  },
  {
    id: 26,
    text: "Tôi cảm thấy thoải mái trong môi trường tự do.",
    type: "A",
    displayOrder: 26,
  },
  {
    id: 27,
    text: "Tôi có khả năng chơi nhạc cụ.",
    type: "A",
    displayOrder: 27,
  },
  {
    id: 28,
    text: "Tôi thích thiết kế trang phục hoặc không gian.",
    type: "A",
    displayOrder: 28,
  },
  {
    id: 29,
    text: "Tôi thể hiện bản thân qua nghệ thuật.",
    type: "A",
    displayOrder: 29,
  },
  {
    id: 30,
    text: "Tôi không thích làm việc theo quy tắc cứng nhắc.",
    type: "A",
    displayOrder: 30,
  },
  {
    id: 31,
    text: "Tôi thích giúp đỡ người khác.",
    type: "S",
    displayOrder: 31,
  },
  {
    id: 32,
    text: "Tôi cảm thấy thoải mái khi giao tiếp với người lạ.",
    type: "S",
    displayOrder: 32,
  },
  {
    id: 33,
    text: "Tôi thích làm việc nhóm và cộng tác.",
    type: "S",
    displayOrder: 33,
  },
  {
    id: 34,
    text: "Tôi có khả năng lắng nghe và thấu hiểu.",
    type: "S",
    displayOrder: 34,
  },
  {
    id: 35,
    text: "Tôi yêu thích giảng dạy hoặc hướng dẫn người khác.",
    type: "S",
    displayOrder: 35,
  },
  {
    id: 36,
    text: "Tôi quan tâm đến các hoạt động tình nguyện.",
    type: "S",
    displayOrder: 36,
  },
  { id: 37, text: "Tôi dễ dàng kết bạn mới.", type: "S", displayOrder: 37 },
  {
    id: 38,
    text: "Tôi muốn làm việc trong ngành y tế hoặc xã hội.",
    type: "S",
    displayOrder: 38,
  },
  {
    id: 39,
    text: "Tôi biết cách tạo động lực cho người khác.",
    type: "S",
    displayOrder: 39,
  },
  {
    id: 40,
    text: "Tôi thường giúp bạn bè giải quyết vấn đề.",
    type: "S",
    displayOrder: 40,
  },
  {
    id: 41,
    text: "Tôi thích thuyết phục người khác.",
    type: "E",
    displayOrder: 41,
  },
  { id: 42, text: "Tôi có tinh thần lãnh đạo.", type: "E", displayOrder: 42 },
  {
    id: 43,
    text: "Tôi thích lập kế hoạch kinh doanh.",
    type: "E",
    displayOrder: 43,
  },
  {
    id: 44,
    text: "Tôi tự tin nói chuyện trước đám đông.",
    type: "E",
    displayOrder: 44,
  },
  {
    id: 45,
    text: "Tôi thích đặt mục tiêu và đạt được chúng.",
    type: "E",
    displayOrder: 45,
  },
  {
    id: 46,
    text: "Tôi muốn làm việc trong môi trường năng động.",
    type: "E",
    displayOrder: 46,
  },
  {
    id: 47,
    text: "Tôi thấy hứng thú với việc đầu tư, kinh tế.",
    type: "E",
    displayOrder: 47,
  },
  {
    id: 48,
    text: "Tôi thích tranh luận và bảo vệ quan điểm.",
    type: "E",
    displayOrder: 48,
  },
  {
    id: 49,
    text: "Tôi thường chủ động trong các hoạt động nhóm.",
    type: "E",
    displayOrder: 49,
  },
  {
    id: 50,
    text: "Tôi muốn xây dựng công ty riêng.",
    type: "E",
    displayOrder: 50,
  },
  {
    id: 51,
    text: "Tôi thích làm việc với dữ liệu và số liệu.",
    type: "C",
    displayOrder: 51,
  },
  {
    id: 52,
    text: "Tôi thích sắp xếp hồ sơ, tài liệu.",
    type: "C",
    displayOrder: 52,
  },
  {
    id: 53,
    text: "Tôi làm việc hiệu quả với bảng tính và biểu mẫu.",
    type: "C",
    displayOrder: 53,
  },
  {
    id: 54,
    text: "Tôi có khả năng tuân thủ quy trình nghiêm ngặt.",
    type: "C",
    displayOrder: 54,
  },
  {
    id: 55,
    text: "Tôi thích làm việc trong văn phòng.",
    type: "C",
    displayOrder: 55,
  },
  { id: 56, text: "Tôi chú ý đến chi tiết nhỏ.", type: "C", displayOrder: 56 },
  {
    id: 57,
    text: "Tôi thích lập kế hoạch và tổ chức.",
    type: "C",
    displayOrder: 57,
  },
  {
    id: 58,
    text: "Tôi cảm thấy hài lòng khi hoàn thành nhiệm vụ đúng hạn.",
    type: "C",
    displayOrder: 58,
  },
  {
    id: 59,
    text: "Tôi thích nhập liệu và xử lý thông tin.",
    type: "C",
    displayOrder: 59,
  },
  {
    id: 60,
    text: "Tôi muốn công việc có cấu trúc rõ ràng.",
    type: "C",
    displayOrder: 60,
  },
];

export function shuffleQuestions(): Question[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // Assign displayOrder (1 to 60) based on shuffled order
  return shuffled.map((question, index) => ({
    ...question,
    displayOrder: index + 1,
  }));
}

export function resetTest(): Question[] {
  localStorage.removeItem("holland_scores");
  return shuffleQuestions();
}
