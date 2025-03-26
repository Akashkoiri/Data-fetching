import ArrayComp from "@/components/pagination/array-comp";
import { Suspense } from "react";

export default function Pagination() {
  return (
    <div className="h-150 w-xl mx-auto my-15 flex flex-col border border-red-600 ">
      <div className="text-4xl font-bold text-center p-5">Pagination</div>
      <div className="flex flex-col gap-4 p-4 pt-0 overflow-auto ">
        <Suspense>
          <ArrayComp />
        </Suspense>
      </div>
    </div>
  );
}
