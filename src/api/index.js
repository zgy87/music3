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
