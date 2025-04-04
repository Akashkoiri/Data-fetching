import ArrayComp from "@/components/infinite-scroll/array-comp";
import BackButton from "@/components/ui/back-button";

export default function InfiniteScroll() {
  return (
    <div className="h-150 w-xl mx-auto my-15 flex flex-col border border-red-600 ">
      <div className="text-4xl font-bold text-center p-5">Infinite Scroll</div>
      <BackButton />
      <div className="flex flex-col gap-4 p-4 pt-0 overflow-auto ">
        <ArrayComp />
      </div>
    </div>
  );
}
