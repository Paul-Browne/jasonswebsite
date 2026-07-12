import { span } from "javascript-to-html";

export default ({
    text = "New",
    color = "white",
    backgroundColor = "black"
} = {}) => {
    return span({
        class: "badge",
        style: {
            color: color,
            backgroundColor: backgroundColor
        }
    }, text)
}