async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/rodrigoduartesilva/js-developer-portfolio/projeto-base/data/profile.json';
    const fetching = await fetch(url);

    return await fetching.json();
}
