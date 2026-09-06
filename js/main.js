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
  {
    name: "장제윤",
    front: "assets/characters/jang-jeyun-front.webp",
    back: "assets/characters/jang-jeyun-back.webp",
  },
  {
    name: "정의민",
    front: "assets/characters/jeong-uimin-front.webp",
    back: "assets/characters/jeong-uimin-back.webp",
  },
  {
    name: "정현오",
    front: "assets/characters/jeong-hyeono-front.webp",
    back: "assets/characters/jeong-hyeono-back.webp",
  },
];

function createCard(character) {
  const item = document.createElement("article");
  item.className = "character";

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-face--front">
        <img src="${character.front}" alt="${character.name} 대표 이미지" loading="lazy" width="720" height="1080" />
      </div>
      <div class="card-face card-face--back">
        <img src="${character.back}" alt="${character.name} 상세 설정" loading="lazy" width="720" height="1800" />
      </div>
    </div>
    <button
      type="button"
      class="flip-hotspot"
      aria-pressed="false"
      aria-label="${character.name} 카드 뒤집기. 가운데를 누르면 상세 설정이 보입니다."
    ></button>
  `;

  const name = document.createElement("h2");
  name.className = "character-name";
  name.textContent = character.name;

  const hotspot = card.querySelector(".flip-hotspot");

  const setFlipped = (flipped) => {
    card.classList.toggle("is-flipped", flipped);
    hotspot.setAttribute("aria-pressed", String(flipped));
    hotspot.setAttribute(
      "aria-label",
      flipped
        ? `${character.name} 상세 설정. 가운데를 다시 누르면 대표 이미지로 돌아갑니다.`
        : `${character.name} 카드 뒤집기. 가운데를 누르면 상세 설정이 보입니다.`
    );
  };

  hotspot.addEventListener("click", (event) => {
    event.stopPropagation();
    setFlipped(!card.classList.contains("is-flipped"));
  });

  item.append(card, name);
  return item;
}

const gallery = document.getElementById("gallery");
characters.forEach((character) => {
  gallery.append(createCard(character));
});
