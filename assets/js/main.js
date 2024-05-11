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

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');

    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');

    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');

    languages.innerHTML = profileData.languages.map((language) => `<li>${language}</li>`).join('');

    console.log(languages);
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileData.portfolio.map((project) => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('');
}



(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
})();