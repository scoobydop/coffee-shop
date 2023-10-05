import APIClient from "@/services/APIClient";
import Agency from "@/apiModel/Agency";
import {useQuery} from "@tanstack/react-query";

const useAgencies = () => {
    const apiClient = new APIClient<Agency>('/user/agent/list-agent');
    return useQuery<Agency[], Error>({
        queryKey: ["agencies"],
        queryFn: () => apiClient.getAll(),
    });
}

export default useAgencies;
