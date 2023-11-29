export const validatePassword = (password) => {
  
  const trimmedPassword = password.trim()
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLength = password.length >= 8
  const hasSpecialCharacter = /[!@#$%^&*()-_+=<>?]/.test(trimmedPassword)

  if (hasUpperCase && hasSpecialCharacter && hasLength) {
    return false
  } else {
    return true
  }

};
