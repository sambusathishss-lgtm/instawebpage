
document.addEventListener('DOMContentLoaded', () => {
  const followBtn = document.getElementById('follow-btn');
  const followersSpan = document.getElementById('followers');
  let followers = parseInt(followersSpan.innerText);
  let followed = false;

  followBtn.addEventListener('click', () => {
    if (!followed) {
      followers++;
      followersSpan.innerText = followers;
      followBtn.innerText = 'Following';
      followBtn.style.background = '#ccc';
      followed = true;
    } else {
      followers--;
      followersSpan.innerText = followers;
      followBtn.innerText = 'Follow';
      followBtn.style.background = '#4CAF50';
      followed = false;
    }
  });

  const videos = document.querySelectorAll('.highlight video');
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const closeBtn = document.querySelector('.close');

  videos.forEach((video) => {
    video.addEventListener('click', () => {
      modal.style.display = 'block';
      modalVideo.src = video.src;
      modalVideo.play();
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause();
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalVideo.pause();
    }
  });
});