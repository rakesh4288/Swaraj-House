import { useState } from "react";

const ToDoByArrayofObject = () => {
    const initialTask = [
        {
            id: 1,
            taskName: 'Breakfast',
            isCompleted: false
        },
        {
            id: 2,
            taskName: 'Reading',
            isCompleted: false
        },
        {
            id: 3,
            taskName: 'Washing',
            isCompleted: false
        }
    ]

    const [allTaskList, setAllTaskList] = useState(initialTask);
    const [copyAllTaskList, setCopyAllTaskList] = useState(initialTask);
    const [taskInput, setTaskInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const handleInput = (e) => {
        const inputValue = e.target.value;
        setTaskInput(inputValue);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            setAllTaskList((prevState) => prevState.map((item) => {
                if (item.id === editIndex) {
                    return {
                        ...item,
                        id: editIndex,
                        taskName: taskInput,
                        isCompleted: false
                    }
                }
                return item;
            }));
            setIsEdit(null);
            setIsEdit(false);
            setTaskInput('');
        } else {
            setAllTaskList([
                ...allTaskList,
                {
                    id: allTaskList.length + 1,
                    taskName: taskInput,
                    isCompleted: false
                }
            ]);
            setCopyAllTaskList([
                ...copyAllTaskList,
                {
                    id: copyAllTaskList.length + 1,
                    taskName: taskInput,
                    isCompleted: false
                }
            ]);
            setTaskInput('');
        }
    }

    const handleEdit = (id) => {
        // console.log('handleEdit id =', id);
        setEditIndex(id);
        setIsEdit(true);
        const getTask = allTaskList.filter((item) => item.id === id);
        // console.log('getTask =', getTask);
        setTaskInput(getTask[0].taskName);
    }

    const handleStatus = (id) => {
        setAllTaskList((prevStatus) => prevStatus.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            }
            return item;
        }));
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure want to delete ?")) {
            setAllTaskList((prevStatus) => prevStatus.filter((item) => item.id !== id));
        }
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        if (searchValue === '') {
            setAllTaskList(copyAllTaskList);
        } else {
            const newList = copyAllTaskList.filter((item) => item.taskName.toLowerCase().includes(searchValue.toLowerCase()));
            setAllTaskList(newList);
        }
    }

    console.log('taskInput =', taskInput);
    console.log('allTaskList =', allTaskList);
    return (
        <>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h5 className="mb-4 text-center">To Do Practice By Using Array of Objects <i className="bi bi-check2-square me-2"></i></h5>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="mb-0">
                                <i className="bi bi-plus-circle me-2"></i>
                                {isEdit ? 'Update Task' : 'Add New Task'}
                            </h6>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="text"
                                        id="task-name-input"
                                        className="form-control"
                                        name="task-input-value"
                                        placeholder="Type your task here..."
                                        value={taskInput}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <button className="btn btn-primary btn-sm w-100">
                                        {isEdit ? 'Update Task' : 'Add New Task'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div>
                        <input type="search"
                            className="form-control mb-3"
                            placeholder="🔍 Search tasks..."
                            onChange={handleSearch}
                        />
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h6 className="mb-0">
                                <i className="bi bi-list-check me-2"></i>Task List
                            </h6>
                        </div>
                        <div className="card-body">
                            {allTaskList && allTaskList.length > 0 ? (
                                <table className="table table-bordered table-striped mb-0">
                                    <thead>
                                        <tr>
                                            <td> #</td>
                                            <td><i className="bi bi-file-text"></i> Task</td>
                                            <td><i className="bi bi-circle-half"></i> Status</td>
                                            <td><i className="bi bi-tools"></i> Actions</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {allTaskList.map((item) => {
                                            return (
                                                <tr key={item.id} className={item.isCompleted ? "table-success" : ""}>
                                                    <td>{item.id}</td>
                                                    <td>{item.taskName}</td>
                                                    <td>{item.isCompleted ? "Done" : "Pending"}</td>
                                                    <th>
                                                        <button
                                                            className="btn btn-sm btn-outline-success me-2"
                                                            onClick={() => handleStatus(item.id)}
                                                            title="Mark as Done"
                                                        >
                                                            <i className="bi bi-check2-circle"></i>
                                                        </button>

                                                        <button
                                                            className="btn btn-sm btn-outline-primary me-2"
                                                            onClick={() => handleEdit(item.id)}
                                                            title="Edit Task"
                                                        >
                                                            <i className="bi bi-pencil"></i>
                                                        </button>

                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => handleDelete(item.id)}
                                                            title="Delete Task"
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </th>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            ) :
                                <div className="text-center pt-4 pb-4">
                                    <i className="bi bi-inbox" style={{ fontSize: '3rem', color: '#ccc' }}></i>
                                    <p className="text-muted mt-3">No tasks found. Create one to get started!</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoByArrayofObject;