import './style.css'

export default function CustomButton({ action, type }) {
    return (
        <button className={type !== "reset" ? 'blue-button' : 'cancel-button'}
            type={type}
        >
            {action.toUpperCase()}
        </button>

    )
}