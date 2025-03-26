"use client";

import NavButtons from "./nav-buttons";
import { useQueryState, parseAsInteger } from "nuqs";
import BackButton from "../ui/back-button";
import ArrayCompBody from "./array-comp-body";

export default function ArrayComp() {
  // State (nuqs)
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(0));

  return (
    <div>
      <div className="flex justify-between content-center">
        <BackButton />
        <NavButtons page={page} setPage={setPage} />
      </div>
      <ArrayCompBody page={page} />
    </div>
  );
}
