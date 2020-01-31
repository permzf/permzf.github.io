const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    lrcType: 3,
    audio: [
      {
        name: "monster",
        artist: 'starset',
        url: 'http://music.163.com/song/media/outer/url?id=439076801.mp3',
        cover: 'http://p2.music.126.net/X0akTthxu28CdYtO74e1MQ==/17959422928314714.jpg?param=130y130',
        lrc: 'song-post/monster.lrc'
      },
      {
  		name: "unbecoming",
  		artist: 'starset',
  		url: 'http://music.163.com/song/media/outer/url?id=454711161.mp3',
  		cover: 'http://p2.music.126.net/MYIl1dPJCMt0ay9zmIJRtQ==/17783501068032491.jpg?param=130y130',
  		lrc: 'song-post/unbecoming.lrc'    
      },
    ]
});
