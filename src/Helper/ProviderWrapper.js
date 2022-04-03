import { AuthProvider, ToastProvider } from "../Context";

const ProvideWrapper = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
};

export default ProvideWrapper;
