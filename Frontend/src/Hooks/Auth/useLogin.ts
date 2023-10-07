import {useMutation} from "@tanstack/react-query";
import LoginPayload from "../../../../../Downloads/everything-green-admin-master(1)/everything-green-admin-master/src/data/apiModel/Auth/LoginPayload";
import AuthResponse from "../../../../../Downloads/everything-green-admin-master(1)/everything-green-admin-master/src/data/apiModel/Auth/AuthResponse";
import APIClient from "../../../../../Downloads/everything-green-admin-master(1)/everything-green-admin-master/src/services/APIClient";

const useAdminLogin = ({cb, cbSuccess, cbError}: IMutationHookProps) => {
    const apiClient = new APIClient<LoginPayload>('/auth/admin-login');
    return useMutation<AuthResponse, Error, LoginPayload>({
        mutationKey: ["login"],
        mutationFn: (payload: LoginPayload) => apiClient.post<AuthResponse>(payload),
        onMutate: cb,
        onSuccess: cbSuccess,
        onError: cbError,
    });
}

export default useAdminLogin;
