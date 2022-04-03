import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <>
      <button onClick={props.btnClick}>{props.btnText}</button>
    </>
  )
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired
}

export default Button
