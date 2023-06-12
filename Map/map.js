function initMap() {
  //創建map % 定位 & 縮放
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 25.03746, lng: 121.564558 },
    // mapTypeId: 'satellite',
  });
  //創建 info
  const infoWindow = new google.maps.InfoWindow({
    content: '',
    disableAutoPan: true,
  });

  //創建markers
  const markers = locations.map((position, i) => {
    const marker = new google.maps.Marker({
      position,
      name: position.name,// 新增地名資訊作為自定義屬性
      image: position.image, // 圖片 URL
      description: position.description,
      height: position.height,
    });

    //點擊時座標點，出現info
    marker.addListener("click", () => {
      const name = marker.name; // 獲取地名資訊
      const image = marker.image; // 獲取圖片 URL
      const description = marker.description; // 獲取空域地圖顏色
      const height = marker.height; // 獲取飛行高度
      const content = `<h3>${name}</h3><img src="${image}" width="200px"><p>${description}</p><p>${height}</p>`;
      // <br>經度：${marker.getPosition().lat()}<br>緯度：${marker.getPosition().lng()}

      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });

    return marker;
  });

  //叢集
  const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
  new MarkerClusterer({ markers, map });
}

//設定 座標 & 相關資訊
const locations = [
  /* 台北&新北 */
  { lat: 25.127882662132667, lng: 121.42719359879781, name: "觀音山", image: "./images/DJI_0054.jpg", description: "綠區", height:"飛行高度120公尺以下" }, 
  { lat: 25.023889199222097, lng: 121.44483719119938, name: "西盛環保河濱公園", image: "./images/新莊西盛環保河濱公園.png", description: "黃區-飛行高度60公尺以下" },
  { lat: 25.009102161764517, lng: 121.5911060906252, name: "福德坑公園", image: "./images/福德坑.png", description: "綠區-飛行高度120公尺以下" },
  { lat: 25.010917943938747, lng: 121.53148257955303, name: "寶藏巖台北國際藝術村", image: "./images/寶巖寺國際藝術村.png", description: "綠區-飛行高度120公尺以下" },
  { lat: 25.135605654376672, lng: 121.82443174417389, name: "象鼻岩", image: "./images/dji_fly_01111.jpg", description: "綠區-飛行高度120公尺以下" },
  { lat: 25.136346867729348, lng: 121.5063190657894, name: "北投公園", image: "./images/北投公園.png", description: "綠區-飛行高度120公尺以下" },
  { lat: 25.284468410428037, lng: 121.51722803924918, name: "白沙灣海水浴場", image: "./images/白沙灣海水浴場.png", description: "綠區-飛行高度120公尺以下" },
  { lat: 25.109318786131766, lng: 121.8467904499523, name: "九份", image: "./images/九份.png", description: "綠區-飛行高度120公尺以下" },
  { lat: 25.030130458040986, lng: 121.45176956079577, name: "新莊新月橋", image: "./images/新莊新月橋.png", description: "黃區-飛行高度60公尺以下" },
  { lat: 25.12020737180223, lng: 121.88754809594474, name: "南子吝步道", image: "./images/Nanzihlin.jpg", description: "綠區-飛行高度120公尺以下" },
  { lat: 25.104623353873148, lng: 121.87005576763376, name: "鋸齒稜", image: "./images/share鋸齒嶺-3.jpg", description: "綠區-飛行高度120公尺以下" },

  // 基隆
  { lat: 25.145767501376323, lng: 121.79880625984227, name: "忘憂谷步道", image: "./images/DJI_0157.jpg", description: "綠區-飛行高度120公尺以下" }, 

  // 桃園
  { lat: 24.8096821326255, lng: 121.3478282477232, name: "新溪口吊橋", image: "./images/新溪口吊橋.png", description: "綠區-飛行高度120公尺以下" },
  { lat: 24.89114811802003, lng: 121.29649028513586, name: "李騰芳古宅", image: "./images/大溪李騰芳古宅.png", description: "綠區-飛行高度120公尺以下" },
  { lat: 24.89161336235011, lng: 121.28824068077762, name: "月眉休閒農業區", image: "./images/月眉休閒農業區.png", description: "綠區-飛行高度120公尺以下" },
  { lat: 24.681671917770643, lng: 121.37909673371328, name: "巴陵大橋", image: "./images/復興巴陵大橋.png", description: "綠區-飛行高度120公尺以下" },

  /* 新竹區 */
  { lat: 24.700254438131367, lng: 120.8569045781074, name: "龍鳳漁港", image: "./images/龍鳳漁港.png", description: "黃區-飛行高度60公尺以下" },
  { lat: 24.910286446794743, lng: 120.97224357723326, name: "新豐紅樹林生態保護區", image: "./images/DJI_0361.jpg", description: "黃區-飛行高度60公尺以下" }, 

  /* 苗栗 */


  /* 台中市 */
  { lat: 24.167072155005684, lng: 120.73288987786282, name: "廍子公園", image: "./images/廍子公園.png", description: "綠區-飛行高度120公尺以下" },
  { lat: 24.13052563999928, lng: 120.61960672549804, name: "台中地標", image: "./images/dji_fly_20221231_110254_380_1672456083730_photo_optimized.jpg", description: "黃區-飛行高度60公尺以下" },

  // 台南
  { lat: 23.242243441291066, lng: 120.54664960590627, name: "曾文水庫", image: "./images/share曾文水庫-4.jpg", description: "綠區-飛行高度120公尺以下" },
  { lat: 22.989477211199045, lng: 120.15737443022748, name: "德陽艦園區", image: "./images/安平.jpg", description: "黃區-飛行高度60公尺以下" },
  { lat: 22.975044873196165, lng: 120.15560068703897, name: "漁光島", image: "./images/com安平軍港-4.jpg", description: "黃區-飛行高度60公尺以下" }, 
  { lat: 23.219345496165932, lng: 120.20698641660623, name: "老塘湖藝術村", image: "./images/dji_fly_20230123_093054_418_1674438074130_photo_optimized.jpg", description: "綠區-飛行高度120公尺以下" },
  { lat: 23.263282563576453, lng: 120.33906238056167, name: "德元埤荷蘭村", image: "./images/forget_password.jpg", description: "綠區-飛行高度120公尺以下" }, 

  // 高雄
  { lat: 23.2714747959911, lng: 120.96208444730581, name: "關山嶺山", image: "./images/DJI_0263.jpg", description: "灰區-飛行高度120公尺以下(不需申請)" },  

  // 花蓮
  { lat: 24.061529746629176, lng: 121.28174813595828, name: "奇萊南峰", image: "./images/dji_fly_20230317_060406_494_1679004451789_photo_optimized.jpg", description: "灰區-飛行高度120公尺以下(需申請)" },
  { lat: 24.045522843516963, lng: 121.28005430553566, name: "天池山莊", image: "./images/share奇萊南峰-3.jpg", description: "灰區-飛行高度120公尺以下(需申請)" }, 
  { lat: 24.141381750834004, lng: 121.28578515227181, name: "合歡山-松雪樓", image: "./images/news_DJI_0150.jpg", description: "灰區-飛行高度120公尺以下(需申請)" },
  { lat: 24.181711245421354, lng: 121.28189611368214, name: "合歡北峰", image: "./images/com合歡山-4.jpg", description: "灰區-飛行高度120公尺以下(需申請)" }, 
  { lat: 24.169083609752658, lng: 121.66106988862296, name: "清水斷崖", image: "./images/DJI_0323.jpg", description: "灰區-飛行高度120公尺以下(需申請)" }, 
  { lat: 24.173751686413997, lng: 121.56434300720699, name: "太魯閣", image: "./images/DJI_0292.jpg", description: "灰區-飛行高度120公尺以下(需申請)" },  

  // 台東
  { lat: 23.09940991451246, lng: 121.21321334635167, name: "池上-伯朗大道", image: "./images/伯朗.jpg", description: "綠區-飛行高度120公尺以下" },




];























window.initMap = initMap;
