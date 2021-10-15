// 管理接口
import Network from './network'

export const getBanner = () => Network.get('/banner?type=2')
export const getPersonalized = () => Network.get('/personalized?limit=6')
export const getNewAlbum = () => Network.get('/album/newest')
export const getNewSong = () => Network.get('/personalized/newsong')
export const getPlayList = (data) => Network.get('/playlist/detail', data)
export const getAlbum = (data) => Network.get('/album', data)
export const getSongDetail = (data) => Network.get('/song/detail', data)
export const getSongLyric = (data) => Network.get('/lyric', data)
export const getSongURL = (data) => Network.get('/song/url', data)
export const getArtistsSong = (data) => Network.get('/artists', data)
// export const getTest = () => Network.get('/artist/list?type=-1&area=96&limit=15&initial=a')
export const getHotArtists = () => {
  return new Promise(function (resolve, reject) {
    Network.get('/top/artists?offset=0&limit=5')
      .then(function (result) {
        console.log(result.artists)
        resolve(result.artists)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
export const getLetterArtists = (letter) => {
  return new Promise(function (resolve, reject) {
    const letterArtists = []
    Network.all([
      Network.get(`/artist/list?type=-1&area=7&limit=15&initial=${letter}`),
      Network.get(`/artist/list?type=-1&area=96&limit=15&initial=${letter}`)
    ])
      .then(function (result) {
        result.forEach(function (item) {
          // console.log(item.artists, 'item.artists')
          letterArtists.push(...item.artists)
        })
        resolve(letterArtists)
        // console.log(letterArtists)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
export const getAllArtists = () => {
  return new Promise(function (resolve, reject) {
    const keys = ['热']
    const list = [getHotArtists()]
    for (let i = 65; i < 91; i++) {
      const char = String.fromCharCode(i)
      // console.log(char)
      keys.push(char)
      list.push(getLetterArtists(char))
    }
    // console.log(keys)
    Network.all(list)
      .then(function (result) {
        const obj = {}
        obj.keys = keys
        obj.list = result
        // console.log(obj)
        resolve(obj)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
export const getTopListDetail = () => {
  return new Promise(function (resolve, reject) {
    const category = {
      officialList: [
        { name: '飙升榜', id: 3 },
        { name: '新歌榜', id: 0 },
        { name: '原创榜', id: 2 },
        { name: '热歌榜', id: 1 }
      ],
      recList: [
        { name: '云音乐说唱榜', id: 23 },
        { name: '云音乐电音榜', id: 25 },
        { name: '云音乐欧美新歌榜', id: 32 },
        { name: '抖音排行榜', id: 26 }
        // { name: '云音乐ACG音乐榜', id: 22 },
        // { name: '云音乐古典音乐榜', id: 24 }
      ],
      globalList: [
        { name: '美国Billboard榜', id: 6 },
        { name: 'UK排行榜周榜', id: 5 },
        { name: 'Beatport全球电子舞曲榜', id: 21 },
        { name: '日本Oricon榜', id: 10 },
        { name: 'iTunes榜', id: 8 }
        // { name: '英国Q杂志中文版周榜', id: 29 }
      ],
      otherList: [
        { name: 'KTV唛榜', id: 7 },
        { name: '法国 NRJ Vos Hits 周榜', id: 19 },
        { name: '新声榜', id: 27 },
        { name: '云音乐韩语榜', id: 28 },
        { name: '电竞音乐榜', id: 30 },
        { name: '云音乐欧美热歌榜', id: 31 }
      ],
      titles: { officialList: '官方榜', recList: '推荐榜', globalList: '全球榜', otherList: '更多榜单' }
    }
    Network.get('/toplist/detail')
      .then(function (data) {
        console.log(data)
        data.list.forEach(function (obj) {
          let flag = false
          for (const key in category) {
            for (let i = 0; i < category[key].length; i++) {
              if (category[key][i].name === obj.name) {
                category[key][i].rank = obj
                flag = true
                break
              }
            }
            if (flag) {
              break
            }
          }
        })
        console.log(category, '处理之前')
        for (const key in category.titles) {
          console.log(key)
          for (let i = 0; i < category[key].length; i++) {
            if (!category[key][i].rank) {
              category[key].splice(i, 1)
              // delete category[key][i]
            }
          }
        }
        console.log(category, '处理之后')
        // for (const key in category.titles) {
        //   for (let i = 0; i < category[key].length; i++) {
        //     console.log(category[key][i].rank.name, category[key][i].rank.coverImgUrl)
        //   }
        // }
        resolve(category)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
export const getTopList = (data) => Network.get('/top/list', data)
export const getSearchList = (data) => Network.get('/search?type=1', data)
export const getSearchHot = () => Network.get('/search/hot')
