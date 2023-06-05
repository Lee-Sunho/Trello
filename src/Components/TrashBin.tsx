import styled from "styled-components";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrashCan = styled.div`
  width: 7.5rem;
  height: 3.75rem;
  background-color: #ff0000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 100rem 100rem;
  position: fixed;
  top: -3.75rem;
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
            className="trash"
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              backgroundColor: snapshot.isDraggingOver ? "#ff5555" : "#ff0000",
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} size="2x" />
          </TrashCan>
        )}
      </Droppable>
    </TrashCanWrapper>
  );
};

export default React.memo(TrashBin);
