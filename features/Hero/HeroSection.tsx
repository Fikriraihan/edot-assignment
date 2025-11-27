import { ArrowUpRight } from "lucide-react";
import { TextParallaxContent } from "./TextParallax";

export default function HeroSection() {
  return (
    <TextParallaxContent
      imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      subheading="Innovate"
      heading="eDOT Powers Business Growth"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-semibold md:col-span-4">
          About us.
        </h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-600 md:text-xl leading-9">
            eDOT adalah perusahaan penyedia solusi teknologi dan pemasaran yang
            inovatif, yang berkomitmen untuk memberdayakan bisnis melalui
            inovasi.
          </p>
          <p className="mb-8 text-xl text-neutral-600 md:text-xl leading-9">
            Dengan keahlian teknis kami, solusi pemasaran yang kami tawarkan
            membantu merek terhubung dengan audiens sasaran melalui strategi
            yang disesuaikan, memungkinkan mereka untuk membangun kehadiran
            pasar yang kuat dan berkelanjutan.
          </p>
          <button className="w-full rounded-2xl cursor-pointer bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
            Learn more <ArrowUpRight className="inline" />
          </button>
        </div>
      </div>
    </TextParallaxContent>
  );
}
