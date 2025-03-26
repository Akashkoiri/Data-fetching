import { Pokemon } from "@/lib/types/pokemon-types";
import Link from "next/link";

type props = {
  pokemon: Pokemon;
};

export default function ArrayCompItem({ pokemon }: props) {
  return (
    <Link href={pokemon.url}>
      <div className="border border-blue-600 p-4">
        {pokemon.name.toUpperCase()}
      </div>
    </Link>
  );
}
