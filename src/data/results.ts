import type { TopperResult, ResultStat } from "@/lib/types";

export const topResults: TopperResult[] = [
  {
    id: "r1",
    name: "Arjun Patel",
    exam: "CAT 2024",
    rank: 5,
    college: "IIM Ahmedabad",
    year: 2024,
    category: "cat",
    image: "/assets/images/results/arjun-patel.jpg",
  },
  {
    id: "r2",
    name: "Sneha Rao",
    exam: "IPMAT 2024",
    rank: 12,
    college: "IIM Indore",
    year: 2024,
    category: "ipmat",
    image: "/assets/images/results/sneha-rao.jpg",
  },
  {
    id: "r3",
    name: "Priya Gupta",
    exam: "CAT 2024",
    rank: 22,
    college: "IIM Bangalore",
    year: 2024,
    category: "cat",
    image: "/assets/images/results/priya-gupta.jpg",
  },
  {
    id: "r4",
    name: "Vikram Singh",
    exam: "CLAT 2024",
    rank: 7,
    college: "NLSIU Bangalore",
    year: 2024,
    category: "clat",
    image: "/assets/images/results/vikram-singh.jpg",
  },
  {
    id: "r5",
    name: "Meera Krishnan",
    exam: "IPMAT 2024",
    rank: 3,
    college: "IIM Rohtak",
    year: 2024,
    category: "ipmat",
    image: "/assets/images/results/meera-krishnan.jpg",
  },
  {
    id: "r6",
    name: "Rohan Mehta",
    exam: "CAT 2024",
    rank: 18,
    college: "IIM Calcutta",
    year: 2024,
    category: "cat",
    image: "/assets/images/results/arjun-patel.jpg",
  },
  {
    id: "r7",
    name: "Ananya Desai",
    exam: "CAT 2024",
    rank: 31,
    college: "FMS Delhi",
    year: 2024,
    category: "cat",
    image: "/assets/images/results/priya-gupta.jpg",
  },
  {
    id: "r8",
    name: "Kabir Nair",
    exam: "CAT 2024",
    rank: 44,
    college: "IIM Lucknow",
    year: 2024,
    category: "cat",
    image: "/assets/images/results/vikram-singh.jpg",
  },
  {
    id: "r9",
    name: "Ishita Verma",
    exam: "CAT 2024",
    rank: 9,
    college: "IIM Kozhikode",
    year: 2024,
    category: "cat",
    image: "/assets/images/results/sneha-rao.jpg",
  },
];

export const overallStats: ResultStat[] = [
  { label: "Selections", value: "10,000", suffix: "+", description: "across all exams" },
  { label: "Top 100 Ranks", value: "250", suffix: "+", description: "in the last 3 years" },
];

export const categoryStats: Record<string, ResultStat[]> = {
  cat: [
    { label: "99+ Percentilers", value: "150", suffix: "+" },
    { label: "IIM Calls", value: "800", suffix: "+" },
    { label: "Average Score", value: "95", suffix: "%ile" },
  ],
  ipmat: [
    { label: "Top 50 Ranks", value: "25", suffix: "+" },
    { label: "IIM Indore Selections", value: "40", suffix: "+" },
  ],
  gdpi: [
    { label: "Conversion Rate", value: "85", suffix: "%" },
    { label: "IIM Converts", value: "200", suffix: "+" },
  ],
  clat: [
    { label: "Top 100 Ranks", value: "30", suffix: "+" },
    { label: "NLU Selections", value: "60", suffix: "+" },
  ],
};

export function getResultsByCategory(categoryId: string): TopperResult[] {
  return topResults.filter((r) => r.category === categoryId);
}
