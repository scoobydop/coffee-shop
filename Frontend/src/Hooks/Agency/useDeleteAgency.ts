import APIClient from "@/services/APIClient";
import {useMutation} from "@tanstack/react-query";
import Cookies from "universal-cookie";

interface DeleteAgencyPayload {
   agencyId:string;
   }

type DeleteAgencyHookProps ={
    cb: () => void ;
    cbSuccess: () => void ;
    cbError: () => void ;
    agencyId  : string
}
const useDeleteAgency = ( {cb, cbSuccess, cbError}: DeleteAgencyHookProps) => {
    const cookie = new Cookies();
    const token = cookie.get("access");
    // const apiClient = new APIClient<AddAgencyPayload>('/user/agent/add-agent');
    return useMutation<DeleteAgencyPayload, Error, DeleteAgencyPayload>({
        mutationFn: ( {agencyId}  ) => {
            const apiClient = new APIClient<DeleteAgencyPayload>(`/user/agent/${agencyId}/delete-agent` , token!);

            return apiClient.delete()  ;
        },
        onMutate: cb,
        onSuccess: cbSuccess,
        onError: cbError,
    });
}

export default useDeleteAgency;

