import Statistics from "@/components/Statistics";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-200 selection:bg-neutral-200 selection:text-neutral-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-5 lg:px-0">
        <Hero />
      </div>
      <div className="bg-[#FFFFFF] min-h-[70vh]">
        <Statistics/>
      </div>
    </main>
  );
}
