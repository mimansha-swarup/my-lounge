import {
  AuthProvider,
  ActivitiesProvider,
  ToastProvider,
  VideoProvider,
  PlayListProvider,
  CategoriesProvider,
} from "../Context";

const ProvideWrapper = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <PlayListProvider>
          <ActivitiesProvider>
            <CategoriesProvider>
            <VideoProvider>{children}</VideoProvider>
            </CategoriesProvider>
          </ActivitiesProvider>
        </PlayListProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default ProvideWrapper;
