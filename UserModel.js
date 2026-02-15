class UserModel {
  constructor() {
    this.users = [];
    this.apiUrl = "https://jsonplaceholder.typicode.com/users";
  }

  async fetchUsers() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();

      this.users = data;
      return this.users;
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return [];
    }
  }
}
