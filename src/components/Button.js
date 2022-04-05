import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <>
      <button className={props.className} onClick={props.btnClick}>{props.btnText}</button>
    </>
  )
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired
}

export default Button
