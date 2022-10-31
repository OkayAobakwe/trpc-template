import { PokemonClient } from "pokenode-ts";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";
const api = new PokemonClient();
export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
  pokemons: publicProcedure.query(async () => {
    return {
      pokemonList: await api
        .listPokemons(0, 10)
        .then((data) => {
          return data.results;
        })
        .catch((error) => {
          return error;
        }),
    };
  }),
  pokemon: publicProcedure
    .input(
      z.object({
        name: z.string().nullish(),
      })
    )
    .query(async ({ input }) => {
      return {
        pokemon: await api
          .getPokemonByName(`${input.name}`)
          .then((data) => {
            return data;
          })
          .catch((error) => {
            return error;
          }),
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
