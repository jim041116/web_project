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
    });


    //點擊時座標點，出現info
    marker.addListener("click", () => {
      const name = marker.name; // 獲取地名資訊
      const image = marker.image; // 獲取圖片 URL
      const description = marker.description; // 獲取文字介紹
      const content = `<h3>${name}</h3><img src="${image}" width="200px"><p>${description}</p><br>經度：${marker.getPosition().lat()}<br>緯度：${marker.getPosition().lng()}`;

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
  { lat: 25.023889199222097, lng: 121.44483719119938 ,name:"西盛環保河濱公園",image:"./images/新莊西盛環保河濱公園.png",description:"天氣好"},
  { lat: 25.009102161764517, lng: 121.5911060906252 ,name:"福德坑公園",image:"./images/福德坑.png",description:"天氣好"},
  { lat: 25.010917943938747, lng: 121.53148257955303 ,name:"寶巖寺國際藝術村",image:"./images/寶巖寺國際藝術村.png",description:"天氣好"},
  { lat: 25.007671614744414, lng: 122.00261115203108 ,name:"三貂角燈塔",image:"./images/三貂角燈塔.png",description:"天氣好"},
  { lat: 25.136346867729348, lng: 121.5063190657894 ,name:"北投公園",image:"./images/北投公園.png",description:"天氣好"},
  { lat: 25.284468410428037, lng: 121.51722803924918 ,name:"白沙灣海水浴場",image:"./images/白沙灣海水浴場.png",description:"天氣好"},
  { lat: 25.206267408023585, lng: 121.69054831284139 ,name:"野柳地質公園",image:"./images/野柳地質公園.png",description:"天氣好"}, 
  { lat: 25.022525036351016, lng: 121.94203218569635 ,name:"福隆海水浴場",image:"./images/福隆海水浴場.png",description:"天氣好"},
  { lat: 25.109318786131766, lng: 121.8467904499523 ,name:"九份",image:"./images/九份.png",description:"天氣好"},
  { lat: 25.030130458040986, lng: 121.45176956079577 ,name:"新莊新月橋",image:"./images/新莊新月橋.png",description:"天氣好"}, 
  { lat: 24.933974993147007, lng: 121.45176956079577 ,name:"三峽祖師廟",image:"./images/三峽祖師廟.png",description:"天氣好"}, 
  { lat: 25.165497589307627, lng: 121.41399024835924 ,name:"十三行文化公園",image:"./images/十三行文化公園.png",description:"天氣好"},
  { lat: 24.911325579916316, lng: 121.3047802132503 ,name:"中庄調整池",image:"./images/大溪中庄調整池.png",description:"天氣好"}, 
  { lat: 24.681671917770643, lng: 121.37909673371328 ,name:"巴陵大橋",image:"./images/復興巴陵大橋.png",description:"天氣好"}, 
  { lat: 24.8096821326255, lng: 121.3478282477232 ,name:"新溪口吊橋",image:"./images/新溪口吊橋.png",description:"天氣好"}, 
  { lat: 24.89114811802003, lng: 121.29649028513586 ,name:"李騰芳古宅",image:"./images/大溪李騰芳古宅.png",description:"天氣好"}, 
  { lat: 24.89161336235011, lng: 121.28824068077762,name:"月眉休閒農業區",image:"./images/月眉休閒農業區.png",description:"天氣好"}, 
  /* 新竹區 */
  { lat: 24.679483192225614, lng: 120.98536300118606,name:"大埔水庫",image:"./images/大埔水庫.png",description:"天氣好"},
  { lat: 24.8491056987138, lng:120.92540000107775,name:"南寮漁港",image:"./images/南寮漁港.png",description:"天氣好"},
  { lat:  24.656021321519024, lng: 120.9224124214919,name:"山水庫",image:"./images/山水庫.png",description:"天氣好"},
  { lat:  24.700254438131367, lng: 120.8569045781074,name:"龍鳳漁港",image:"./images/龍鳳漁港.png",description:"天氣好"},
  /* 苗栗 */ 
  { lat:  24.568668401369376, lng: 120.84164088290885,name:"模型飛機場",image:"./images/模型飛機場.png",description:"天氣好"},
  /* 台中市 */ 
  { lat:  24.167072155005684, lng: 120.73288987786282,name:"廍子公園",image:"./images/廍子公園.png",description:"天氣好"},
  { lat:  24.133871945461248, lng: 120.60990714325847,name:"彩虹眷村",image:"./images/彩虹眷村.png",description:"天氣好"},





];























window.initMap = initMap;
