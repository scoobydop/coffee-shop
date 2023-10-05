import {createBrowserRouter} from "react-router-dom";
import App from "./presentation/layout/App";
import PrivateRoutes from "./presentation/layout/PrivateRoutes.tsx";
import DashboardView from "@/view/DashboardView/DashboardView";
import LoginView from "@/view/AuthView/LoginView/LoginView";
import Root from "./presentation/layout/RootLayout/Root.tsx";
import ErrorView from "./presentation/view/ErrorView";
import AuthRoutes from "./presentation/layout/AuthRoutes/AuthRoutes.tsx";
import DashboardLayout from "./presentation/layout/DashboardLayout/DashboardLayout.tsx";
import AgencyManagementView from "./presentation/view/AgencyManagementView/AgencyManagementView.tsx";
import UserManagementView from "./presentation/view/UserManagementView/UserManagementView.tsx";
import AnalyticsView from "@/view/AnalyticsView/AnalyticsView.tsx";
import SettingsView from "./presentation/view/SettingsView/SettingsView.tsx";
import ForgotPasswordView from "@/view/AuthView/ForgotPasswordView/ForgotPasswordView.tsx";
import AgencyUsersTableView from "./presentation/view/AgencyManagementView/AgencyUsersTableView";

const routes = createBrowserRouter([
    {
        element: <Root/>,
        errorElement: <ErrorView/>,
        children: [
            {
                element: <AuthRoutes/>,
                children: [
                    {
                        path: "/login",
                        element: <LoginView/>,
                    },
                    {
                        path: "/forgot-password",
                        element: <ForgotPasswordView/>,
                    },
                ],
            },
            {
                element: <PrivateRoutes/>,
                children: [
                    {
                        element: <App/>,
                        children: [
                            {
                                path: "/",
                                element: <DashboardLayout/>,
                                children: [
                                    {
                                        index: true,
                                        element: <DashboardView/>
                                    },
                                    {
                                        path: 'agency-management',
                                        children: [
                                            {
                                                index: true,
                                                element: <AgencyManagementView/>,
                                            },
                                            {
                                                path: ':agencyId',
                                                element: <AgencyUsersTableView/>
                                            }
                                        ]
                                    },
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

                                ]
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

export default routes;
