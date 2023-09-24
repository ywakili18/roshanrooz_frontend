type ButtonProps = {
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children
}) => {
  const baseStyles =
    'py-2 px-4 rounded-md shadow-lg focus:outline-none transition-colors text-[.9rem]'

  // For the Primary Button
  const primaryStyles = `
    bg-primary text-background hover:bg-secondary hover:text-text
  `

  // For the Secondary Button
  const secondaryStyles = `
    bg-textAccent text-background border-header 
    hover:bg-header hover:text-background
  `

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles

  return (
    <button onClick={onClick} className={`${baseStyles} ${styles}`}>
      {children}
    </button>
  )
}
