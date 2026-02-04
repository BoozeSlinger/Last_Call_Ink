import { generateStaticParams } from "./page.server"; // Separate server logic file if needed, or inline

export { generateStaticParams };

import WorkDetail from "@/components/WorkDetail";

export default function Page() {
  return <WorkDetail />;
}
