export type HollandType = "R" | "I" | "A" | "S" | "E" | "C";

export const riasecDescriptions: Record<
  HollandType,
  { name: string; description: string; color: string }
> = {
  R: {
    name: "Thực tế",
    description: "Thích làm việc với công cụ, máy móc, kỹ thuật hoặc vận động.",
    color: "#f94144",
  },
  I: {
    name: "Nghiên cứu",
    description: "Thích phân tích, tư duy logic, giải quyết vấn đề.",
    color: "#f3722c",
  },
  A: {
    name: "Nghệ thuật",
    description: "Thích sáng tạo, tự do, nghệ thuật, âm nhạc.",
    color: "#f9844a",
  },
  S: {
    name: "Xã hội",
    description: "Thích giúp đỡ người khác, dạy học, chăm sóc.",
    color: "#43aa8b",
  },
  E: {
    name: "Quản lý",
    description: "Thích lãnh đạo, thuyết phục, kinh doanh.",
    color: "#577590",
  },
  C: {
    name: "Nghiệp vụ",
    description: "Thích làm việc với dữ liệu, quy trình, chi tiết.",
    color: "#277da1",
  },
};
