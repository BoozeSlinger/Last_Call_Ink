import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Proof | Last Call Collective",
  description: "See the proof — real results and case studies from Last Call Collective's work with bars and restaurants.",
};

export default function TheProofLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
