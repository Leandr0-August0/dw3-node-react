import styles from "@/components/TaskList/TaskList.module.css";

export const TaskList = ({ tasks }) => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", width: "100%", placeContent: "center" }}>
                <h4>Lista de tarefas</h4>
                <ol className={styles.items}>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.title}
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
};
