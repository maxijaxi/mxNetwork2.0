import Filter from "bad-words";
import bannedWords from "./bannedWords";

const filter = new Filter({ list: bannedWords });

export const containsBannedWords = (input) => {
  return filter.isProfane(input);
};
