import {
  AuthProvider,
  ActivitiesProvider,
  ToastProvider,
  VideoProvider,
} from "../Context";

const ProvideWrapper = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <ActivitiesProvider>
          <VideoProvider>{children}</VideoProvider>
        </ActivitiesProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default ProvideWrapper;
