type ButtonProps = {
  variant?: 'primary' | 'secondary'
  onClick: () => void
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children
}) => {
  const baseStyles = 'py-2 px-4 rounded-lg shadow-md focus:outline-none'
  const secondaryStyles =
    'bg-primary text-secondary hover:bg-secondary hover:text-primary transition-colors'
  const primaryStyles =
    'bg-secondary text-primary  hover:text-secondary hover:bg-primary transition-colors'

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles

  return (
    <button onClick={onClick} className={`${baseStyles} ${styles}`}>
      {children}
    </button>
  )
}
