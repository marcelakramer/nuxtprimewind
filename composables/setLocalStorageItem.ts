export default function () {

    const setLocalStorageItem = (item: string, value: string) => {
        if (process.client) {
          localStorage.setItem(item, value)
          return true
        } else {
          return false
        }
      }

    return { setLocalStorageItem };
}


