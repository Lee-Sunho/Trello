import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 10px rgba(0, 0, 0, 0.05)" : "none"};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-left: 50px;
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
  boardId: string;
}

function DraggableCard({
  toDoId,
  toDoText,
  index,
  boardId,
}: IDraggableCardProps) {
  const setToDos = useSetRecoilState(toDoState);

  const onEdit = () => {
    const newToDo = window.prompt("", toDoText);

    if (newToDo === null || newToDo === undefined) {
      return;
    }

    if (newToDo === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    setToDos((allBoards) => {
      const targetBoard = [...allBoards[boardId]];
      const taskObj = { ...targetBoard[index] };
      taskObj.text = newToDo!;
      targetBoard.splice(index, 1, taskObj);
      return { ...allBoards, [boardId]: targetBoard };
    });
  };
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
          <FontAwesomeIcon icon={faPen} onClick={onEdit} />
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
