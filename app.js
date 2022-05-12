const nav = document.querySelector(".nav");
const test = document.querySelector(".test");

const imgContent1 = document.getElementById("img-content-1");
const imgContent2 = document.getElementById("img-content-2");
const imgContent3 = document.getElementById("img-content-3");
const imgContent4 = document.getElementById("img-content-4");
const textContent1 = document.getElementById("text-content-1");
const textContent2 = document.getElementById("text-content-2");
const textContent3 = document.getElementById("text-content-3");
const textContent4 = document.getElementById("text-content-4");

const buttonChangeLanguage = document.querySelector(".switch-languages");
const h1Page1 = document.getElementById("h1-page1");
const h1Page2 = document.getElementById("h1-page2");
const h1Page3 = document.getElementById("h1-page3");
const h1Page4 = document.getElementById("h1-page4");

const h2Page1 = document.getElementById("h2-page1");
const h2Page2 = document.getElementById("h2-page2");
const h2Page3 = document.getElementById("h2-page3");
const h2Page4 = document.getElementById("h2-page4");

const pPage1 = document.getElementById("p-page1");
const pPage2 = document.getElementById("p-page2");
const pPage3 = document.getElementById("p-page3");
const pPage4 = document.getElementById("p-page4");

const dangKy = document.querySelector(".dang-ky");
const formz = document.querySelector('.sis')
const re = document.querySelector('.dong')
const res = document.querySelector('.register')
const stic = document.querySelector('.stic');
window.addEventListener("scroll", () => {
   console.log(window.scrollY);
   if (window.scrollY >= 500) {
      imgContent1.classList.add("img-content-1-active");
      textContent1.classList.add("img-content-1-active");
      // window.scrollTo(0, 1500)
   } else {
      imgContent1.classList.remove("img-content-1-active");
      textContent1.classList.remove("img-content-1-active");
   }

   if (window.scrollY < 400 || window.scrollY > 1200) {
      imgContent2.classList.add("img-content-2-active");
      textContent2.classList.add("img-content-2-active");
   } else {
      imgContent2.classList.remove("img-content-2-active");
      textContent2.classList.remove("img-content-2-active");
   }

   if (window.scrollY < 1100 || window.scrollY > 2100) {
      imgContent3.classList.add("img-content-1-active");
      textContent3.classList.add("img-content-2-active");
   } else {
      imgContent3.classList.remove("img-content-1-active");
      textContent3.classList.remove("img-content-2-active");
   }

   if (window.scrollY < 1800) {
      imgContent4.classList.add("img-content-1-active");
      textContent4.classList.add("img-content-2-active");
   } else {
      imgContent4.classList.remove("img-content-1-active");
      textContent4.classList.remove("img-content-2-active");
   }
});

buttonChangeLanguage.addEventListener("click", () => {
   buttonChangeLanguage.classList.toggle("switch-languages-active");
   if (buttonChangeLanguage.classList.contains("switch-languages-active")) {
      h1Page1.innerHTML = "Childhoods";
      h2Page1.innerHTML = "When we were kids";
      pPage1.innerText =
         "From the first time you held your baby in your arms, you have changed forever. \n  Sometimes you will miss your old self, when you were free and free.\n\ Theres nothing you have to worry about. \n  Now you have no idea how hard it is to be a parent.\n  Days go by the same, sleep and then lack of sleep. \n  A loop that doesnt know when to end.";
      h1Page2.innerHTML = "Trunks";
      h2Page2.innerHTML = "When we were young";
      pPage2.innerText =
         "But please, dont forget... \n Everything will have a last time. \n One day you put your baby down \n and never again, he needs you to pick him up. \n One day you give your baby a last bath, and from then on, he will bathe by himself.\n There will be one last time, when he needs you to hold his hand,\n and then he wont reach from behind. .";
      h1Page3.innerHTML = "Grownups";
      h2Page3.innerHTML = "When we were grownups";
      pPage3.innerText =
         "One afternoon, you sang your favorite song, \n it was the last time it played. \n Today I greet you in front of the school gate \n From tomorrow, I will go to class by myself. \n There will be a last time for all\n The last time I read the story, the last time I wiped my dirty hands,\n I ran into your lap for the last time.";
      h1Page4.innerHTML = "Old age";
      h2Page4.innerHTML = "When you get old";
      pPage4.innerText =
         "But you wont know its the last time \n Until you run out of time \n And even when it does, it wont be easy for you to notice. \n So friends, dont let it be too late \n Cherish everything while you are, \n Because when the memory is gone,\n you will look forward to it again \n Even though only one last time child.";
   } else {
      h1Page1.innerHTML = "Tuổi thơ";
      h2Page1.innerHTML = "Khi còn nhỏ";
      pPage1.innerText =
         "Từ lần đầu tiền bạn ôm trên tay đứa con của mình, con người bạn đã thay đổi mãi mãi. \n  Đôi khi bạn sẽ nhớ bản thân mình trước kia, khi còn rảnh rang và tự do.\n\ Chẳng có điều gì bạn phải lo nghĩ. \n  Giờ bạn chẳng ngờ làm cha mẹ vất vả đến nhường này.\n  Ngày ngày trôi qua đều giống nhau, những giấc ngủ rồi lại thiếu ngủ. \n  Một vòng lặp chẳng biết khi nào qua.";
      h1Page2.innerHTML = "Trẩu tre";
      h2Page2.innerHTML = "Khi còn trẻ";
      pPage2.innerText =
         "Nhưng bạn ơi, hãy đừng quên nhé... \n Gì cũng sẽ có lần cuối cùng. \n Một ngày bạn đặt con xuống \n và chẳng bao giờ nữa, con cần bạn bế lên. \n Một ngày bạn tắm cho con lần cuối, rồi từ đó trở đi, con tự tắm một mình.\n Sẽ có một lần cuối, con cần bạn nắm tay,\n rồi từ sau tay chẳng cần với đến.";
      h1Page3.innerHTML = "Trưởng thành";
      h2Page3.innerHTML = "Lúc trưởng thành";
      pPage3.innerText =
         "Một buổi chiều nọ, bạn hát bài con thích, \n cũng là lần cuối nó vang lên. \n Hôm nay con chào bạn trước cổng trường \n Từ mai, con tự mình đến lớp. \n Sẽ có lần cuối cho tất cả\n Lần cuối đọc truyện, lần cuối lau tay dơ,\n con chạy sà vào lòng bạn cũng một lần cuối.";
      h1Page4.innerHTML = "Lớn tuổi";
      h2Page4.innerHTML = "Khi về già";
      pPage4.innerText =
         "Thế nhưng bạn sẽ chẳng biết đó là lần cuối \n Cho đến khi bạn chẳng còn thời gian \n Và cả khi điều ấy đến, cũng chẳng dễ dàng để bạn nhận ra. \n Vậy bạn ơi, đừng để quá trễ \n Hãy trân trọng tất cả khi còn đang, \n Bởi vì khi kỉ niệm đã mất,\n bạn sẽ mong lại được một lần đi qua \n Dù chỉ một lần cuối cùng con.";
   }
});

const switchLanguages = document.querySelector(".switch-languages");
const language = document.querySelector(".language");

switchLanguages.addEventListener("click", SwitchLanguagesFunction);

function SwitchLanguagesFunction() {
   if (language.textContent == "EN") {
      language.textContent = "VN";
   } else {
      language.textContent = "EN";
   }
}

dangKy.addEventListener('click', () => {
   formz.classList.toggle('d-none');
   if (formz.classList.contains('d-none')) {
      formz.style.display = 'block'
   }
   else (formz.style.display = 'none')
})

res.addEventListener('click', () => {
   stic.style.display = 'block'
   formz.style.display = 'none'
   setInterval(()=>{
      stic.style.display = 'none'
   }, 1000)
})

re.addEventListener('click', () => {
   formz.style.display = 'none'
})

