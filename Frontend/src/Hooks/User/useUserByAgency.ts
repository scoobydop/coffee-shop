import APIClient from "@/services/APIClient";
import User from "@/apiModel/User";
import {useQuery} from "@tanstack/react-query";

const useUserByAgency = (agencyId: string) => {
    const apiClient = new APIClient<User>(`/user/agent/${agencyId}/list-user`);
    return useQuery<User[], Error>({
        queryKey: ["agency-user-list", agencyId],
        queryFn: () => apiClient.getAll(),
    });
}

export default useUserByAgency;
