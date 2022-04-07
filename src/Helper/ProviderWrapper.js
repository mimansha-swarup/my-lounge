import {
  AuthProvider,
  ActivitiesProvider,
  ToastProvider,
  VideoProvider,
  PlayListProvider,
  CategoriesProvider,
  FilterProvider,
} from "../Context";

const ProvideWrapper = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <PlayListProvider>
          <ActivitiesProvider>
            <CategoriesProvider>
              <FilterProvider>
                <VideoProvider>{children}</VideoProvider>
              </FilterProvider>
            </CategoriesProvider>
          </ActivitiesProvider>
        </PlayListProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default ProvideWrapper;
