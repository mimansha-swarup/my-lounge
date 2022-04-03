import { ToastProvider } from "../Context";

const ProvideWrapper = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default ProvideWrapper;
