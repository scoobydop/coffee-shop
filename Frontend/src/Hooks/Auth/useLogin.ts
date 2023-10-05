import {useMutation} from "@tanstack/react-query";
import LoginPayload from "../../data/apiModel/Auth/LoginPayload";
import AuthResponse from "@/apiModel/Auth/AuthResponse";
import APIClient from "@/services/APIClient";

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
