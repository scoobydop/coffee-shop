import APIClient from "@/services/APIClient";
import {useMutation} from "@tanstack/react-query";
import Cookies from "universal-cookie";

type UpdateUsersPayload = {
    fullName: string;
    expiryDate: string;
    company : string;
    isActive: boolean;
}

type UpdateUsersHookProps = {
    cb: () => void;
    cbSuccess: () => void;
    cbError: () => void;
    userId: string; // Add agencyId to the props
};

const useUpdateUsers= ({cb, cbSuccess, cbError, userId}: UpdateUsersHookProps) => {
    const cookie = new Cookies()
    const token = cookie.get("access")
    const apiClient = new APIClient<UpdateUsersPayload>(`/user/${userId}/update-user`, token!);
    return useMutation<UpdateUsersPayload, Error, UpdateUsersPayload>({
        mutationFn: ({
                         fullName,
                         expiryDate,
                         company,
                         isActive,
                     }: UpdateUsersPayload) => {
            return apiClient.put({
                fullName: fullName,
                expiryDate: expiryDate,
                company : company,
                isActive: isActive,
            });
        },
        onMutate: cb,
        onSuccess: cbSuccess,
        onError: cbError,
    });
}


export default useUpdateUsers;