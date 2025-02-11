import {createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import Page from "./pages/Page";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/ProjectPage";
import DashBoard from "./pages/dashboard/DashBoard";
import DashBaordPage from "./pages/dashboard/DashBaordPage";
import PlaceBid from "./pages/dashboard/proposal/PlaceBid";
import ViewProposal from "./pages/dashboard/proposal/ViewProposal";
import EditProposal from "./pages/dashboard/proposal/EditProposal";
import PostProject from "./pages/client/PostProject";
import ViewProjectDetails from "./pages/projects/ViewProjectDetails";
import OnboardingForm from "./pages/onboarding/freelancer/OnBoarding";
import ClientOnboardingForm from "./pages/onboarding/client/ClientOnBaording";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      { path: "/", element: <LandingPage /> },
          { path: "/signin", element: <SigninPage /> },
          { path: "/signup", element: <SignupPage /> },
          { path: "/profile", element: <ProfilePage />},
          { path: "/projects", element: <JobPage />},
          { path: "/dashboard", element: <DashBaordPage><DashBoard /></DashBaordPage>},
          { path: "/place-bid/:projectId", element: <PlaceBid />},
          { path: "/view-bid/:projectId", element: <ViewProposal />},
          { path: "/bid/edit/:projectId", element: <EditProposal />},
          { path: "/post-project", element: <DashBaordPage><PostProject /></DashBaordPage>},
          { path: "/view-deatils/:projectId", element: <DashBaordPage><ViewProjectDetails /></DashBaordPage>},
          { path: "/freelancer/onboarding", element: <OnboardingForm />},
          { path: "/client/onboarding", element: <ClientOnboardingForm/>},
          { path: "*", element: <NotFound />},
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
