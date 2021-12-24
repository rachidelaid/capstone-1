const speakers = [
  {
    name: 'Leonardo Murillo',
    title: 'Founder of Cloud Native Architects',
    image: './images/Murillo.jpg',
    description:
      "I'm a CTO and Entrepreneur. I'm passionate about Cloud Native Solutions, DevOps and AllTheOps that followed. I'm also organizer of the DevOps + Cloud Native Community in Costa Rica and a DevOps Institute Ambassador.",
  },
  {
    name: 'Zain Asgar',
    title: 'GVP & Product GM @ New Relic',
    image: './images/zain.png',
    description:
      'Zain Asgar is part of Stanford Profiles, official site for faculty, postdocs, students and staff information (Expertise, Bio, Research, Publications, and more). The site facilitates research and collaboration in academic endeavors.',
  },
  {
    name: 'Gerta Sheganaku',
    title: 'GVP & Product GM @ New Relic',
    image: './images/gerta.jpg',
    description:
      'Gerta Sheganaku is a Product Manager for AI/ML solutions at Tricentis where she focuses on building AI based tool that enable testers to focus on the fun parts of QA.',
  },
  {
    name: 'Michael Stahnke',
    title: 'Vice President of Platform @ CircleCI',
    image: './images/Stahnke.jpg',
    description:
      'Michael Stahnke is VP Platform at CircleCI running SRE, Security, and tooling. Prior to this, he worked at Puppet running PE, Platform engineering as well as SRE.',
  },
  {
    name: 'Cem Yildirim',
    title: 'VP & Head of Engineering @ Fast',
    image: './images/cem.jpeg',
    description:
      'Cem Yalçın Yıldırım is a Turkish mathematician who specializes in number theory. He obtained his B.Sc from Middle East Technical University in Ankara, Turkey and his PhD from the University of Toronto in 1990.',
  },
  {
    name: 'Dan Sturman',
    title: 'Chief Technology Officer @ Roblox',
    image: './images/dan.jpeg',
    description:
      'Dan holds a Ph.D. and MS in Computer Science from the University of Illinois at Urbana-Champaign and a BS in Computer Science from Cornell University. ',
  },
];

const speakersWrap = document.querySelector('.speakers .list');
for (let i = 0; i < speakers.length; i += 1) {
  const speaker = speakers[i];
  speakersWrap.innerHTML += `
    <div class="card">
      <div class="image">
        <img src="${speaker.image}" alt="picture of ${speaker.name}" />
      </div>
      <div class="details">
        <h4>${speaker.name}</h4>
        <span>${speaker.title}</span>
        <hr />
        <p>
          ${speaker.description}
        </p>
      </div>
    </div>
  `;
}

const moreBtn = document.querySelector('.more-btn');
moreBtn.addEventListener('click', () => {
  if (moreBtn.classList.contains('less-btn')) {
    moreBtn.querySelector('span').textContent = 'MORE';
    moreBtn.classList.remove('less-btn');
    document
      .querySelectorAll('.speakers .card:not(:first-child):not(:nth-child(2))')
      .forEach((c) => {
        c.style.display = 'none';
      });
    return;
  }

  moreBtn.querySelector('span').textContent = 'LESS';
  moreBtn.classList.add('less-btn');
  document.querySelectorAll('.speakers .list > .card').forEach((c) => {
    c.style.display = 'grid';
  });
});
