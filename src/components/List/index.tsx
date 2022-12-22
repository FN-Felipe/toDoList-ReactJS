import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import clipboard from '../../assets/clipboard.svg';
import { Tasks } from "../Tasks";
import { BodyContainer, CowntContainer, CowntItens, PesquisaContainer, VoidContainer } from "./styles";

export function List() {

  const [list, setList] = useState(['Tirar o lixo'])
  const [newTask, setNewTask] = useState('')

  function addList(event: FormEvent) {
    event.preventDefault()
    setList([...list, newTask])
    setNewTask('')
  }

  function handleNewTask(e: any) {
    setNewTask(e.target.value)
  }

  function removeTask(taskToRemove: string) {
    const removeTask = list.filter(task => {
      return task !== taskToRemove
    })

    setList(removeTask)
  }

  return (
    <>
      <PesquisaContainer onSubmit={addList}>
        <textarea
          name='tasks'
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTask}
          value={newTask}
        />
        <button type='submit'>
          Criar
          <PlusCircle />
        </button>
      </PesquisaContainer>

      <BodyContainer>
        <CowntContainer>
          <CowntItens>
            <p>Tarefas criadas</p>
            <div>{list.length}</div>
          </CowntItens>
          <CowntItens>
            <p>Concluidas</p>
            <div>0 de {list.length}</div>
          </CowntItens>
        </CowntContainer>

        {list.length !== 0 ?
          list.map(list => {
            return <Tasks task={list} key={uuidv4()} removeTask={removeTask} />
          }) 
          :
          <VoidContainer>
            <img src={clipboard} />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </VoidContainer>
        }
      </BodyContainer>
    </>
  )
}