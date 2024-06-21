import Hero from "../components/Hero";
import Works from "@/components/Works";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-200 selection:bg-neutral-200 selection:text-neutral-800">
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-5 lg:px-0 ">
          <Hero />
        </div>
      </div>
      <div className="bg-[#FFFFFF] min-h-[70vh]">
        <Statistics/>
      </div>
      <div className="bg-neutral-100">
        <div className="container mx-auto px-5 lg:px-0 ">
          <Works/>
        </div>
      </div>
    </main>
  );
}
