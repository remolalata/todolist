import styles from './Button.module.css';

const Button = props => {
    return (
        <button
            className={`${styles.button}`}
            disabled={props.disabled ? true : false}
            {
                ...(props.onClick && { onclick: props.onClick })
            }
            style={props.style}
        >
            {props.children}
        </button>
    )
}

export default Button;