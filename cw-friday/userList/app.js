const API_URL ="https://reqres.in/api/users";
const row = $("#userRow");

function addToDom(user){
    row.append (`<div class ="col-4"><div class="card mb-3" style="max-width: 540px;">
    <div class="main-card row g-0 border border-warning rounded bg border-2 p-3 h-25">
      <div class="col-md-4">
        <div class="imageBox">
            <img src="${user.avatar}" class="avatar img-fluid rounded-start h-100 w-100" alt="...">
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-primary">${user.first_name}</h5>
          <h6 class="text-white">${user.last_name}</h6>
          <p class="card-text text-light"><small class="text-secondary">${user.email}</small></p>
        </div>
      </div>
    </div>
  </div></div>`)
};

function getUsers(page){
    return $.ajax({
        url: `${API_URL}?page=${page}`,
        type: "get",
    })

}
$(document).ready(
    async function runPages(){
        let user1 = await getUsers(1);
        let user2 = await getUsers(2);
        let users = [...user1.data, ...user2.data];
        users.map(user => addToDom(user));
    }
);