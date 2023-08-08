interface ICreateNewAlbum {
	artist: string
    albumTitle: string
    albumImage: string
    musics: [{     
        songTitle: string 
        songLink: string
        timeInMilliseconds?: string
    }],
    genre: string
    type: string
}


export interface IinsertNewSound {
	id: string
	songTitle: string | any
	songLink: string | any
	timeInMilliseconds: number | any
}

// export interface IListMusics {
// 	musics: Array<any>[{     
//         songTitle: string 
//         songLink: string
//         timeInMilliseconds?: string
//     }]
// }