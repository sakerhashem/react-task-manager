import TaskList from "../components/TaskList";

function Tasks() {
    const tasks = [
        { id: 1, title: "React leren" },
        { id: 2, title: "Task Manager bouwen" },
        { id: 3, title: "Github updaten" }
    ];

    return (
        <section className="page">
            <h2>My Tasks</h2>
            <p>Here you can manage your tasks.</p>
            <TaskList tasks={tasks} />
        </section>
    );
}

export default Tasks;