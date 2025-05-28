
const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="text-black text-center py-2 my-4 max-w-xl mx-auto">
      {message}
    </div>
  );
};

export default ErrorMessage;
