import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./presentation/layout/App";
import DashboardView from "@/view/DashboardView/DashboardView";
import LoginView from "@/view/AuthView/LoginView/LoginView";
import Root from "./presentation/layout/RootLayout/Root.tsx";
import ErrorView from "./presentation/view/ErrorView";
import AuthRoutes from "./presentation/layout/AuthRoutes/AuthRoutes.tsx";
import DashboardLayout from "./presentation/layout/DashboardLayout/DashboardLayout.tsx";
import ForgotPasswordView from "@/view/AuthView/ForgotPasswordView/ForgotPasswordView.tsx";
import AgencyUsersTableView from "@/view/AgencyManagementView/AgencyUsersTableView";
import UserManagementView from "@/view/UserManagementView/UserManagementView.tsx";
import AnalyticsView from "@/view/AnalyticsView/AnalyticsView.tsx";
import SettingsView from "@/view/SettingsView/SettingsView.tsx";
import MenutView from "@/view/AgencyManagementView/AgencyManagementView.tsx";

const routes = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorView />,
    children: [
      {
        element: <AuthRoutes />,
        children: [
          {
            path: "/login",
            element:  <LoginView />  // Conditional rendering
          },
          {
            path: "/forgot-password",
            element: <ForgotPasswordView />,
          },
        ],
      },
      {
        element: <App />,
        children: [
          {
            path: "/",
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <DashboardView />,
              },
              {
                path: "agency-management",
                children: [
                 
                  {
                    path: 'user-management',
                    element: <UserManagementView/>
                },
                {
                    path: 'analytics',
                    element: <AnalyticsView/>
                },
                {
                    path: 'settings',
                    element: <SettingsView/>
                },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default routes;
