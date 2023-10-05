import APIClient from "@/services/APIClient";
import User from "@/apiModel/User";
import {useQuery} from "@tanstack/react-query";

const useUsers = () => {
    const apiClient = new APIClient<User>('/user/list-user');
    return useQuery<User[], Error>({
        queryKey: ["users"],
        queryFn: () => apiClient.getAll(),
    });
}

export default useUsers;
