import { Header } from '../components/common/';
import Table from "../components/customs/Table";
import TaskModal from "../components/customs/TaskModal";

import { useSelector } from 'react-redux';
import ViewTaskModal from '../components/customs/ViewTaskModal';
import FilterMenu from '../components/customs/FilterMenu';
import Footer from "../components/customs/Footer";

import usePagination from '../hooks/usePagination';

import DeleteModal from '../components/customs/DeleteModal';

function TodoManager() {
    
  const showTaskModal = useSelector(store=>store.showTaskModal)
  const showViewTaskModal = useSelector(store=>store.showViewTaskModal)
  const showFilterMenu = useSelector(store=>store.showFilterMenu)
  const showDeleteModal = useSelector(store=>store.showDeleteModal)
  const {filteredTodos} = useSelector(store=>store.todos)
  const {row,page} = useSelector(store=>store.pagination)

  const data = usePagination(filteredTodos,row,page)
  
  

  return (
    <div>
      <Header/>
      <Table data={data}/>
      <Footer/>
      {showTaskModal && <TaskModal/>}
      {showViewTaskModal && <ViewTaskModal/>}
      {showFilterMenu && <FilterMenu/>}
      {showDeleteModal && <DeleteModal/>}
    </div>
  );
}

export default TodoManager;
