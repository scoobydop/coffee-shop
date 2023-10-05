import APIClient from "@/services/APIClient";
import {useMutation} from "@tanstack/react-query";
import Cookies from "universal-cookie";

type UpdateAgencyPayload = {
    fullName: string;
    expiryDate: string;
    isActive: boolean;
}

type UpdateAgencyHookProps = {
    cb: () => void;
    cbSuccess: () => void;
    cbError: () => void;
    agencyId: string; // Add agencyId to the props
};

const useUpdateAgency = ({cb, cbSuccess, cbError, agencyId}: UpdateAgencyHookProps) => {
    const cookie = new Cookies()
    const token = cookie.get("access")
    const apiClient = new APIClient<UpdateAgencyPayload>(`/user/agent/${agencyId}/update-agent`, token!);
    return useMutation<UpdateAgencyPayload, Error, UpdateAgencyPayload>({
        mutationFn: ({
                         fullName,
                         expiryDate,
                         isActive
                     }: UpdateAgencyPayload) => {
            return apiClient.put({
                fullName: fullName,
                expiryDate: expiryDate,
                isActive: isActive
            });
        },
        onMutate: cb,
        onSuccess: cbSuccess,
        onError: cbError,
    });
}


export default useUpdateAgency;