import * as THREE from 'three'
import { WEBGL } from './webgl'


if (WEBGL.isWebGLAvailable()) {

    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        camera.aspect = width / height; // 카메라 종횡비 업데이트
        camera.updateProjectionMatrix(); // 변경된 값 적용
    
        renderer.setSize(width, height); // 렌더러 크기 업데이트
    });

    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setSize(window.innerWidth, window.innerHeight);


} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}



const hamburger = document.getElementById('hamburger');
const popupMenu = document.getElementById('popupMenu');

hamburger.addEventListener('click', () => {
    popupMenu.classList.toggle('open'); // Toggle the "open" class to show/hide the menu
});

document.addEventListener('click', (event) => {
    const isClickInside = hamburger.contains(event.target) || popupMenu.contains(event.target);

    if (!isClickInside) {
        popupMenu.classList.remove('open'); // Close the menu if click is outside
    }
});

document.querySelector('.logo a').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'index.html'; // Redirect to the home page
});


document.addEventListener("DOMContentLoaded", () => {
    const popupMenu = document.querySelector(".popup-menu"); // 팝업 메뉴 DOM 선택
  
    // 카테고리 목록
    const categories = ["Home", "About", "Services", "Contact"];
  
    // 기존 내용 초기화 (필요 시)
    popupMenu.innerHTML = "";
  
    // 카테고리 추가 함수
    const ul = document.createElement("ul"); // 카테고리 리스트 컨테이너
    ul.style.listStyle = "none"; // 불릿 제거
    ul.style.padding = "20px"; // 내부 여백 추가
    ul.style.margin = "0"; // 외부 여백 제거
  
    categories.forEach((category) => {
      const li = document.createElement("li");
      li.style.marginBottom = "15px"; // 각 항목 간격 조정
  
      const link = document.createElement("a");
      link.href = `#${category.toLowerCase()}`; // 카테고리 앵커 설정
      link.textContent = category; // 텍스트 설정
      link.style.color = "#fff"; // 텍스트 색상
      link.style.textDecoration = "none"; // 밑줄 제거
      link.style.fontSize = "18px";
  
      link.addEventListener("mouseover", () => {
        link.style.color = "#ff4b4b"; // 호버 시 색상 변경
      });
  
      link.addEventListener("mouseout", () => {
        link.style.color = "#fff"; // 원래 색상으로 복원
      });
  
      li.appendChild(link);
      ul.appendChild(li);
    });
  
    popupMenu.appendChild(ul); // 팝업 메뉴에 리스트 추가
  });
  

  document.querySelectorAll('.popup-menu nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('toggle').checked = false; // 메뉴 닫기
    });
});