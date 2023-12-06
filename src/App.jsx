import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
/* API USED
React Router - Routing and Remote state management
Styled Components - Styling
Redux - UI State management
*/

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// curl "https://kighqptumqibztqeobqm.supabase.co/rest/v1/cabins?select=*" ^
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZ2hxcHR1bXFpYnp0cWVvYnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTQ0ODksImV4cCI6MjAxNzI3MDQ4OX0.54BmR2Hvw5t-jdqSHHZhyhOZoGsrUrX4hz-XLP3eR3U" ^
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZ2hxcHR1bXFpYnp0cWVvYnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTQ0ODksImV4cCI6MjAxNzI3MDQ4OX0.54BmR2Hvw5t-jdqSHHZhyhOZoGsrUrX4hz-XLP3eR3U"
