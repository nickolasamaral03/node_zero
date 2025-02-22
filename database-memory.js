import {randomUUID} from "node:crypto"

export class DataBaseMemory{
    #videos = new Map()

    list(){
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0] 
            const data = videoArray[1] 

            return{
                id,
                ...data,
            }
        })
    }

    create(video){
        const videoId = randomUUID()

        this.#videos.set(videoId ,video)
    }


    uptade(id, video){
        this.#videos.set(id, video)
    }

    delete(id){
        this.#videos.delete(id)
    }
}