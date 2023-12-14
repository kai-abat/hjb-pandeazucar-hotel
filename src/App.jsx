import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import CheckIn from "./pages/CheckIn";
import ProtectedRoute from "./ui/ProtectedRoute";
/* API USED
React Router - Routing and Remote state management
Styled Components - Styling
Redux - UI State management
React Query - (Tanstack Query) v4
*/

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/bookings/:bookingId" element={<Booking />} />
              <Route path="/checkin/:bookingId" element={<CheckIn />} />
              /
              <Route path="/cabins" element={<Cabins />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<Users />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 3000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0",
              color: "var(--color-grey-700",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;

// curl "https://kighqptumqibztqeobqm.supabase.co/rest/v1/cabins?select=*" ^
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZ2hxcHR1bXFpYnp0cWVvYnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTQ0ODksImV4cCI6MjAxNzI3MDQ4OX0.54BmR2Hvw5t-jdqSHHZhyhOZoGsrUrX4hz-XLP3eR3U" ^
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZ2hxcHR1bXFpYnp0cWVvYnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTQ0ODksImV4cCI6MjAxNzI3MDQ4OX0.54BmR2Hvw5t-jdqSHHZhyhOZoGsrUrX4hz-XLP3eR3U"
