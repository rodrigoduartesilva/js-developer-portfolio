function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    const name = document.getElementById('profile.name');
    const job = document.getElementById('profile.job');
    const location = document.getElementById('profile.location');
    const phone = document.getElementById('profile.phone');
    const email = document.getElementById('profile.email');


    photo.src = profileData.photo;
    photo.alt = profileData.name

    name.innerText = profileData.name;

    job.innerText = profileData.job;

    location.innerText = profileData.location.city;

    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;

}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
})();