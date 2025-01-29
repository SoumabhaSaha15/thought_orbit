(() => {
  const user_login = document.getElementById('user-login');
  const user_signup = document.getElementById('user-signup');
  const hero = document.getElementById('hero');
  const footer = document.getElementById('footer');
  const load_hero = () => {
    user_signup.classList.replace('hero', 'hidden');
    user_login.classList.replace('hero', 'hidden');
    hero.classList.replace('hidden', 'hero');
    footer.classList.replace('hidden', 'footer');
  };
  const hashChange = {
    '#user-login': () => {
      user_signup.classList.replace('hero', 'hidden');
      user_login.classList.replace('hidden', 'hero');
      hero.classList.replace('hero', 'hidden');
      footer.classList.replace('footer', 'hidden');
      user_login.dataset['aos'] = 'zoom-out';
      user_login.dataset['aosDelay'] = '100';
    },
    '#user-signup': () => {
      user_signup.classList.replace('hidden', 'hero');
      user_login.classList.replace('hero', 'hidden');
      hero.classList.replace('hero', 'hidden');
      footer.classList.replace('footer', 'hidden');
      user_signup.dataset['aos'] = 'zoom-out';
      user_signup.dataset['aosDelay'] = '100';
    }
  };
  window.onhashchange = () => {
    hashChange[location.hash] ? hashChange[location.hash]() : load_hero();
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });
  }
  onload = onhashchange;

  document.getElementById('password').ondblclick = (event) => {
    event.target.type = (event.target.type == "text") ? "password" : "text";
  }

  document.getElementById('avatar').oninput = (event) => {
    try {
      if (event.target.files && (event.target.files)[0].size <= (5 * 1024 * 1024)) {
        document.querySelector('img#avatar-preview').src = URL.createObjectURL(event.target.files[0]);
      } else window.alert('file is larger than 5 MB');
    } catch (error) {
      window.alert('file is larger than 5 MB');
    }
  }
})();