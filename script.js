"use strict";

const githubApiURL = "https://api.github.com/users/";

const userProfile = document.getElementById('userProfile');
const form = document.getElementById('form'); // Changed to getElementById
const search = document.getElementById('search');

userProfile.style = 'opacity:0';
getUser('');

async function getUser(user){
    const response = await fetch(githubApiURL + user);
    const responseData = await response.json();
    
    getUserInfo(responseData);
}

// Showing results.....

function getUserInfo(user) {
    const userBox = `
    <div class="user-box">
    <div>
      <a href="${user.html_url}" target="_blank">
        <img
          src="${user.avatar_url}"
          alt="${user.name}"
          class="avatar"
        />
      </a>
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <div class="user-bio">
        <p>User bio goes here</p>
        <a href="${user.html_url}" target="_blank">View profile</a>
      </div>
      <ul class="meta-data">
        <li>${user.followers} <strong>Follows</strong></li>
        <li>${user.following} <strong>following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
    </div>
    `;
    userProfile.innerHTML = userBox;
  }
  
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const user = search.value;
    userProfile.style = 'opacity:1';
    
  if(user){
    getUser(user);
    search.value = '';
  }
});
