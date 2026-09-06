const characters = [
  {
    name: "송주환",
    front: "assets/characters/song-juhwan-front.webp",
    back: "assets/characters/song-juhwan-back.webp",
  },
  {
    name: "김근우",
    front: "assets/characters/kim-geunu-front.webp",
    back: "assets/characters/kim-geunu-back.webp",
  },
  {
    name: "김민준",
    front: "assets/characters/kim-minjun-front.webp",
    back: "assets/characters/kim-minjun-back.webp",
  },
  {
    name: "김청현",
    front: "assets/characters/kim-cheonghyeon-front.webp",
    back: "assets/characters/kim-cheonghyeon-back.webp",
  },
  {
    name: "김현율",
    front: "assets/characters/kim-hyeonyul-front.webp",
    back: "assets/characters/kim-hyeonyul-back.webp",
  },
  {
    name: "송유환",
    front: "assets/characters/song-yuhwan-front.webp",
    back: "assets/characters/song-yuhwan-back.webp",
  },
  {
    name: "양시완",
    front: "assets/characters/yang-siwan-front.webp",
    back: "assets/characters/yang-siwan-back.webp",
  },
  {
    name: "이유림",
    front: "assets/characters/lee-yurim-front.webp",
    back: "assets/characters/lee-yurim-back.webp",
  },
];

function createCard(character) {
  const item = document.createElement("article");
  item.className = "character";

  const card = document.createElement("div");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-pressed", "false");
  card.setAttribute(
    "aria-label",
    `${character.name} 카드. 누르면 상세 설정이 보입니다.`
  );

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-face--front">
        <img src="${character.front}" alt="${character.name} 대표 이미지" loading="lazy" width="720" height="1080" />
        <span class="card-hint" aria-hidden="true">탭해서 설정 보기</span>
      </div>
      <div class="card-face card-face--back">
        <img src="${character.back}" alt="${character.name} 상세 설정" loading="lazy" width="720" height="1800" />
      </div>
    </div>
  `;

  const name = document.createElement("h2");
  name.className = "character-name";
  name.textContent = character.name;

  const setFlipped = (flipped) => {
    card.classList.toggle("is-flipped", flipped);
    card.setAttribute("aria-pressed", String(flipped));
    card.setAttribute(
      "aria-label",
      flipped
        ? `${character.name} 상세 설정. 다시 탭하면 대표 이미지로 돌아갑니다.`
        : `${character.name} 카드. 누르면 상세 설정이 보입니다.`
    );
  };

  const toggle = () => setFlipped(!card.classList.contains("is-flipped"));

  let pointerStartY = 0;
  let didScrollGesture = false;

  card.addEventListener("pointerdown", (event) => {
    pointerStartY = event.clientY;
    didScrollGesture = false;
  });

  card.addEventListener("pointermove", (event) => {
    if (Math.abs(event.clientY - pointerStartY) > 10) {
      didScrollGesture = true;
    }
  });

  card.addEventListener("click", () => {
    // 뒷면 스크롤 제스처와 탭을 구분
    if (didScrollGesture) return;
    toggle();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });

  item.append(card, name);
  return item;
}

const gallery = document.getElementById("gallery");
characters.forEach((character) => {
  gallery.append(createCard(character));
});
