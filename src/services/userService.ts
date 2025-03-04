import apiClient from "./api-client";

export interface User {
    id: number;
    name: string;
  }

class UserService {
  getAllUsers(){
    const controller = new AbortController();

    const request = apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      });

      return {request, cancel: () => controller.abort()};
  }

  deleteUser(userId: number){
    const request = apiClient.delete("/users/" + userId);

    return request;
  }

  createUser(newUser: User){
        const request = apiClient.post("/users/", newUser);
        return request;
  }

  updateUser(updatedUser: User){
    return apiClient.patch("/users/" + updatedUser.id, updatedUser);
  }
}

export default new UserService();