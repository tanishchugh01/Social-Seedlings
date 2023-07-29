const ErrorComponent = ({ message }: { message: string }) => {
  return (
    <div className="">
      <div className="">ERROR: {message}</div>
    </div>
  );
};

export default ErrorComponent;
