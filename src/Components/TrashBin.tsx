import styled from "styled-components";
import React from "react";
import { Droppable } from "react-beautiful-dnd";

const TrashCan = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff0000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const TrashCanWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const TrashBin = () => {
  return (
    <TrashCanWrapper>
      <Droppable droppableId="trash">
        {(provided, snapshot) => (
          <TrashCan
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              backgroundColor: snapshot.isDraggingOver ? "#ff5555" : "#ff0000",
            }}
          >
            쓰레기통
          </TrashCan>
        )}
      </Droppable>
    </TrashCanWrapper>
  );
};

export default React.memo(TrashBin);
