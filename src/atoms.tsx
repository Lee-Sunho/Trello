import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "todo",
  default: {
    "To Do": ["a", "d", "f"],
    Doing: ["b", "c"],
    Done: ["e"],
  },
});
