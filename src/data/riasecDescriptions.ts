export type HollandType = "R" | "I" | "A" | "S" | "E" | "C";

export const riasecDescriptions: Record<
  HollandType,
  {
    name: string;
    description: string;
    color: string;
    insights: string;
    advantages: string;
    disadvantages: string;
    jobs: string[];
  }
> = {
  R: {
    name: "Thực tế",
    description: "Thích làm việc với công cụ, máy móc, kỹ thuật hoặc vận động.",
    color: "#f94144",
    insights:
      "Người thuộc nhóm Thực tế thường có xu hướng thích làm việc với các công cụ, máy móc và các hoạt động thể chất. Họ thường là những người thích giải quyết vấn đề thực tiễn và có kỹ năng kỹ thuật tốt.",
    advantages:
      "Họ có khả năng làm việc trong các lĩnh vực kỹ thuật, cơ khí và xây dựng.",
    disadvantages:
      "Có thể gặp khó khăn trong các công việc đòi hỏi tư duy trừu tượng hoặc sáng tạo.",
    jobs: [
      "Kỹ sư cơ khí",
      "Thợ điện",
      "Nhân viên bảo trì",
      "Kỹ thuật viên máy móc",
    ],
  },
  I: {
    name: "Nghiên cứu",
    description: "Thích phân tích, tư duy logic, giải quyết vấn đề.",
    color: "#f3722c",
    insights:
      "Người thuộc nhóm Nghiên cứu thường có khả năng tư duy logic, phân tích và giải quyết vấn đề phức tạp. Họ thích làm việc với dữ liệu và lý thuyết.",
    advantages:
      "Họ có khả năng làm việc trong các lĩnh vực khoa học, công nghệ và nghiên cứu.",
    disadvantages:
      "Có thể gặp khó khăn trong các công việc đòi hỏi giao tiếp xã hội hoặc sáng tạo.",
    jobs: ["Nhà khoa học", "Nhà nghiên cứu", "Bác sĩ", "Nhà phân tích dữ liệu"],
  },
  A: {
    name: "Nghệ thuật",
    description: "Thích sáng tạo, tự do, nghệ thuật, âm nhạc.",
    color: "#f9844a",
    insights:
      "Người thuộc nhóm Nghệ thuật thường có óc sáng tạo cao, thích thể hiện bản thân qua nghệ thuật, âm nhạc hoặc các hình thức sáng tạo khác.",
    advantages:
      "Họ có khả năng làm việc trong các lĩnh vực nghệ thuật, thiết kế và truyền thông.",
    disadvantages:
      "Có thể gặp khó khăn trong các công việc đòi hỏi tính chính xác cao hoặc quy trình nghiêm ngặt.",
    jobs: ["Nhà thiết kế", "Nghệ sĩ", "Nhà văn", "Nhiếp ảnh gia"],
  },
  S: {
    name: "Xã hội",
    description: "Thích giúp đỡ người khác, dạy học, chăm sóc.",
    color: "#43aa8b",
    insights:
      "Người thuộc nhóm Xã hội thường có xu hướng thích giúp đỡ người khác, làm việc trong các lĩnh vực giáo dục, y tế hoặc các công việc liên quan đến cộng đồng.",
    advantages:
      "Họ có khả năng giao tiếp tốt, đồng cảm và có kỹ năng làm việc nhóm.",
    disadvantages:
      "Có thể gặp khó khăn trong các công việc đòi hỏi tính cạnh tranh cao hoặc áp lực lớn.",
    jobs: ["Giáo viên", "Nhân viên xã hội", "Nhà tâm lý học", "Y tá"],
  },
  E: {
    name: "Quản lý",
    description: "Thích lãnh đạo, thuyết phục, kinh doanh.",
    color: "#577590",
    insights:
      "Người thuộc nhóm Quản lý thường có khả năng lãnh đạo, thuyết phục và quản lý tốt. Họ thích làm việc trong môi trường kinh doanh hoặc các vị trí quản lý.",
    advantages:
      "Họ có khả năng đưa ra quyết định, quản lý thời gian và nguồn lực hiệu quả.",
    disadvantages:
      "Có thể gặp khó khăn trong các công việc đòi hỏi sự kiên nhẫn hoặc chú ý đến chi tiết.",
    jobs: ["Quản lý", "Nhân viên bán hàng", "Doanh nhân", "Nhà tiếp thị"],
  },
  C: {
    name: "Nghiệp vụ",
    description: "Thích làm việc với dữ liệu, quy trình, chi tiết.",
    color: "#277da1",
    insights:
      "Người thuộc nhóm Nghiệp vụ thường có khả năng làm việc với dữ liệu, quy trình và chi tiết. Họ thích các công việc liên quan đến quản lý thông tin, kế toán hoặc hành chính.",
    advantages:
      "Họ có khả năng tổ chức tốt, chú ý đến chi tiết và làm việc hiệu quả trong môi trường văn phòng.",
    disadvantages:
      "Có thể gặp khó khăn trong các công việc đòi hỏi tính sáng tạo cao hoặc giao tiếp xã hội.",
    jobs: ["Nhân viên kế toán", "Trợ lý hành chính", "Quản trị viên dữ liệu"],
  },
};
