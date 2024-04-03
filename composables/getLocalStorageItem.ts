export default function () {

    const getLocalStorageItem = (item: string) => {
        if (process.client) {
            return localStorage.getItem(item)
          } else {
            return undefined
          }
    }

    return { getLocalStorageItem };
}


