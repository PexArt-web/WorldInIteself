import { getAllLetters } from "@/services/AllLetters";
import { defer } from "react-router-dom";

export const LetterLoader = () => {
  const getLetters = getAllLetters();
  return defer({ getLetters });
};
