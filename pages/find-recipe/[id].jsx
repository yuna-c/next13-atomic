import Breadcrumb from "@/components/molecules/breadcrumb/Breadcrumb";
import { useRouter } from "next/router";

export default function Detail() {
  const path = useRouter().asPath;

  return (
    <section>
      <Breadcrumb path={path} />
    </section>
  );
}
