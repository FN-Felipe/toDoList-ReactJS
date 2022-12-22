import { Trash } from "phosphor-react";
import { useState } from "react";
import { Checked, CheckPersonalizado, TasksContainer, TrashButton } from "./styles";
import { BsCheck } from 'react-icons/bs'

type Tasks = {
  task: string
  removeTask: (task: string) => void
}

export function Tasks({ task, removeTask }: Tasks) {

  const [check, setCheck] = useState(false)

  function handleRemoveTask() {
    removeTask(task)
  }

  function isChecked() {
    setCheck(true)
  }

  function noChecked(){
    setCheck(false)
  }

  return (
    <TasksContainer>
      {check === false ?
        <>
          <CheckPersonalizado onClick={isChecked} />
          <p>{task}</p>
          <TrashButton onClick={handleRemoveTask}>
            <Trash size={20} />
          </TrashButton>
        </>
        :
        <>
          <Checked onClick={noChecked}>
            <BsCheck size={30}/>
          </Checked>
          <p><s>{task}</s></p>
          <TrashButton onClick={handleRemoveTask}>
            <Trash size={20} />
          </TrashButton>
        </>
      }

    </TasksContainer>
  )
}