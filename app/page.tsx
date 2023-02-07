import MainBox from "@/src/components/MainBox/mainBox";
import SourceSansPro from "@/src/utils/textFont";
import { Toaster } from "react-hot-toast";

export default async function Home() {
  return (
    <main className={SourceSansPro.className}>
      <MainBox />
    </main>
  );
}
