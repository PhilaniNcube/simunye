import PromptForm from "../components/PromptForm";
import { fraunces } from "../components/home/HomeHero";

const advice = () => {
  return <main className="max-w-7xl mx-auto my-16">
     <h1 className={`${fraunces.className} text-2xl md:text-4xl font-bold text-slate-700 text-center`}>Use AI to do some research on organic herb farming </h1>
     <div className="mt-6">
      <PromptForm />
     </div>
  </main>;
};
export default advice;
