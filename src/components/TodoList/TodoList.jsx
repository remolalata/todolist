import styles from './TodoList.module.css';

const TodoList = props => {
    return (
        <ul className={styles.todoList}>
            {props.items.map(item => {
                return <li
                    key={item.id}
                    className={item.done ? styles.done : null}
                    {
                        ...(props.onItemClick && { onClick: () => props.onItemClick(item.id) })
                    }
                >
                    {item.label}
                </li>
            })}
        </ul>
    )
}

export default TodoList;