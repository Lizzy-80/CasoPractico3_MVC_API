class UserView {
  constructor() {
    this.$userContainer = $("#user-container");
  }

  displayUsers(users) {
    this.$userContainer.empty();

    users.forEach((user) => {
      const $userCard = $(`
        <div class="user-card">
          <h3>${user.name}</h3>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
          <p><strong>Company:</strong> ${user.company.name}</p>
        </div>
      `);

      this.$userContainer.append($userCard);
    });
  }
}
