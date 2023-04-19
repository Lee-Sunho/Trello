import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((old) => [{ text: toDo, id: Date.now(), category }, ...old]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      ></input>
      <button>Add</button>
    </form>
  );
};
export default CreateToDo;
