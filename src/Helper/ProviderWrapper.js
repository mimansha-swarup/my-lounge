import {
  AuthProvider,
  ActivitiesProvider,
  ToastProvider,
  VideoProvider,
  PlayListProvider,
} from "../Context";

const ProvideWrapper = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <PlayListProvider>
          <ActivitiesProvider>
            <VideoProvider>{children}</VideoProvider>
          </ActivitiesProvider>
        </PlayListProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default ProvideWrapper;
