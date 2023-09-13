
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseStyles = 'py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none';
  const primaryStyles = 'bg-blue-500 text-white hover:bg-blue-600';
  const secondaryStyles = 'bg-gray-200 text-gray-700 hover:bg-gray-300';

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button onClick={onClick} className={`${baseStyles} ${styles}`}>
      {children}
    </button>
  );
};
