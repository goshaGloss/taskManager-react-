const Button = ({ color, text, onShow }) => {
  return <button style={{ backgroundColor:color }} onClick={onShow} className="btn">{text}</button>
}

export default Button
