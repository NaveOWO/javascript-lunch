import test from "../templates/category-chinese.png";
import 일식 from "../templates/category-japanese.png";
import 중식 from "../templates/category-chinese.png";
import 한식 from "../templates/category-korean.png";
import 양식 from "../templates/category-western.png";
import 아시안 from "../templates/category-asian.png";
import 기타 from "../templates/category-etc.png";

const Elements = {
  addListContents: `
  <form>
  <!-- 카테고리 -->
  <div class="form-item form-item--required">
    <label for="category text-caption">카테고리</label>
    <select name="category" id="category" required>
      <option value="">선택해 주세요</option>
      <option value="한식">한식</option>
      <option value="중식">중식</option>
      <option value="일식">일식</option>
      <option value="양식">양식</option>
      <option value="아시안">아시안</option>
      <option value="기타">기타</option>
    </select>
    <div class="alert hidden" id="alert-category"></div>
  </div>

  <!-- 음식점 이름 -->
  <div class="form-item form-item--required">
    <label for="name text-caption">이름</label>
    <input type="text" name="name" id="name" required />
    <div class="alert hidden" id="alert-name"></div>
  </div>

  <!-- 거리 -->
  <div class="form-item form-item--required">
    <label for="distance text-caption">거리(도보 이동 시간) </label>
    <select name="distance" id="distance" required>
      <option value="">선택해 주세요</option>
      <option value="5">5분 내</option>
      <option value="10">10분 내</option>
      <option value="15">15분 내</option>
      <option value="20">20분 내</option>
      <option value="30">30분 내</option>
    </select>
    <div class="alert hidden" id="alert-distance"></div>
  </div>

  <!-- 설명 -->
  <div class="form-item">
    <label for="description text-caption">설명</label>
    <textarea
      name="description"
      id="description"
      cols="30"
      rows="5"
    ></textarea>
    <span class="help-text text-caption"
      >메뉴 등 추가 정보를 입력해 주세요.</span
    >
  </div>

  <!-- 링크 -->
  <div class="form-item">
    <label for="link text-caption">참고 링크</label>
    <input type="url" name="link" id="link" />
    <span class="help-text text-caption"
      >매장 정보를 확인할 수 있는 링크를 입력해 주세요.</span
    >
    <div class="alert hidden" id="alert-link"></div>
  </div>

  <!-- 취소/추가 버튼 -->
  <div class="alert hidden" id="alert-submit"></div>
  <div class="button-container">
    <button
      type="button"
      class="button button--secondary text-caption"
    >
      취소하기
    </button>
    <button class="button button--primary text-caption">
      추가하기
    </button>
  </div>
</form>
  `,

  listDetailContents(infos, image,currentStarImage) {
    return `
    <div class="header-wrapper">
      <div class="restaurant__category">
        <img src="${image}" alt="image" class="category-icon"/>
      </div>
      <img src=${currentStarImage} alt="filled-star" class="star" style="height:32px" />
    </div>
    <h1 class="info__title">${infos.name}</h1>
    <strong class="info__distance">${infos.distance}분 내</strong>
    <div class="info__description">${infos.description}</div>
    <div class="info__link">${infos.link}</div>
    <div class="button-wrapper">
      <button class="button delete">삭제하기</button>
      <button class="button close">닫기</button>
    </div>
    `;
  },
};

export default Elements;
