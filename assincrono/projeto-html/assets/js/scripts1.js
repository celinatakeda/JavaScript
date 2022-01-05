// outra forma de fazer, sem o try e catch

const BASE_URL1 = 'https://thatcopy.pw/catapi/rest/';
const catBtn1 = document.getElementById('change-cat');
const catImg1 = document.getElementById('cat');

const getCats1 = async () => {
    const data = await fetch(BASE_URL1)
      .then(res => res.json())
      .catch(e => console.log(e));
    
    return data.webpurl;
    
};

const loadImg1 = async () => {
    catImg1.src = await getCats();
};

catBtn1.addEventListener('click', loadImg1);

loadImg1();