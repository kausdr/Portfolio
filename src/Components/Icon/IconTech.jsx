import "./IconTech.css";

function IconTech({src, customStyle}) {
    return (
        <div style={customStyle} id="iconImg-container">
            <img id="iconImg" src={src}  width="100" height="100" alt="React Logo" />
        </div>
    )
}

export default IconTech