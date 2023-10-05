import APIClient from "@/services/APIClient";
import {useMutation} from "@tanstack/react-query";

interface AddAgencyPayload {
    email: string;
    fullName: string;
    password: string;
}

const useAddAgency = ({cb, cbSuccess, cbError}: IMutationHookProps) => {
    const apiClient = new APIClient<AddAgencyPayload>('/user/agent/add-agent');
    return useMutation<any, Error, AddAgencyPayload>({
        mutationFn: (payload: AddAgencyPayload) => apiClient.post(payload),
        onMutate: cb,
        onSuccess: cbSuccess,
        onError: cbError,
    });
}

export default useAddAgency;
