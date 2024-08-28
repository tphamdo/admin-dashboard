/* Add project cards to html */

const projectsContainer = document.querySelector(".projects");
const starSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
const eyeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
const shareSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`


const projects = [
    {
        name: "Super Cool Project",
        description: "Adipisicing itaque architecto excepturi labore eos. Quasi accusamus provident commodi repellendus repellendus Error optio.",
    },
    {
        name: "Less Cool Project",
        description: "Ipsum repellat alias molestiae elit deleniti amet Ducimus quas voluptatum sapiente voluptates et error sit. Ullam saepe iste autem quos.",
    },
    {
        name: "Impossible App",
        description: "Amet saepe soluta repudiandae optio architecto! Eaque tempora laborum repellendus ratione voluptates Error magni possimus.",
    },
    {
        name: "Easy Peasy App",
        description: "Amet consequuntur laudantium nostrum repellendus laudantium. Nostrum eveniet veniam alias rem consectetur? Odio quaerat modi eius doloribus eveniet? At sint placeat optio delectus labore? Sunt tempora natus fugit perferendis ipsum",
    },
    {
        name: "Ad Blocker",

        description: "Elit unde qui totam similique dolor placeat nemo. Dolor eum!",
    },
    {
        name: "Money Maker",
        description: "Sit obcaecati accusamus totam dicta omnis Soluta nesciunt modi blanditiis maiores hic aspernatur? Explicabo nesciunt reprehenderit odit veniam velit. Saepe saepe vel placeat illum provident?",
    },
];


projects.forEach(project => {
    let projectCard = createProjectCard(project);
    projectsContainer.appendChild(projectCard);
});

function createProjectCard(project) {
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let description = document.createElement('p');
    card.classList.add("card");

    name.textContent = project.name
    name.classList.add("name");

    description.textContent = project.description;
    description.classList.add("description");

    card.appendChild(name);
    card.appendChild(description);

    addIcons(card);

    return card;
}

function addIcons(card) {
    let icons = document.createElement('div');
    icons.classList.add("icons")
    icons.innerHTML = starSvg + eyeSvg + shareSvg;
   card.appendChild(icons);
}


/* Add announcement cards to html */

const announcementsContainer = document.querySelector(".announcements");
const announcements = [
    {
        title: "Site Maintenance",
        description: "Adipisicing rem incidunt ipsam laborum ullam reprehenderit. Excepturi nulla suscipit..."
    },
    {
        title: "Community Share Day",
        description: "Ipsum cumque quis obcaecati voluptate aliquid Sapiente dolorem sequi laboriosam..."
    },
    {
        title: "Updated Privacy Policy",
        description: "Dolor nam accusamus aperiam modi repellat? Porro commodi eius recusandae ullam distinctio Molestiae..."
    },
]

announcements.forEach((announcement) => {
    let card = createAnnouncementCard(announcement);
    announcementsContainer.appendChild(card);
});

function createAnnouncementCard(announcement) {
    let card = document.createElement('div');
    card.classList.add("announcement-card");

    let title = document.createElement('h4');
    title.classList.add("title");
    title.textContent = announcement.title;

    let description = document.createElement('p');
    description.classList.add("description");
    description.textContent = announcement.description;

    card.appendChild(title);
    card.appendChild(description);

    return card;
}

/* Add trending cards to html */

const trendingUsersContainer = document.querySelector(".trending-users");
const trendingUsers = [
    {
        username: "@JayD5",
        description: "Rookie Of The Year",
        avatar: "images/avatar-2.png",
    },
    {
        username: "@tphamdo",
        description: "Grind Never Stops",
        avatar: "images/avatar-1.png",
    },
    {
        username: "@kendall",
        description: "Not The Jenner",
        avatar: "images/avatar-3.png",
    },
    {
        username: "@kawhi",
        description: "On The Bench",
        avatar: "images/avatar-4.png",
    },
]

trendingUsers.forEach((user) => {
    let card = createUsersCard(user);
    trendingUsersContainer.appendChild(card);
});

function createUsersCard(user) {
    let card = document.createElement('div');
    card.classList.add("user-card");

    let avatar = document.createElement('img');
    avatar.classList.add("avatar");
    avatar.setAttribute("src", user.avatar);

    let div = document.createElement('div');

    let username = document.createElement('h4');
    username.classList.add("username");
    username.textContent = user.username;

    let description = document.createElement('p');
    description.classList.add("description");
    description.textContent = user.description;

    card.appendChild(avatar);
    div.appendChild(username);
    div.appendChild(description);
    card.appendChild(div);

    return card;
}

