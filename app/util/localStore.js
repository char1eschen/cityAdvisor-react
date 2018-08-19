export default {
  getItem: function(key) {
    let value
    try {
      value = localStorage.getItem(key)
    } catch ( ex ) {
      // show error message in dev mode
      if (__DEV__) {
        console.error('localStorage.getItem error, ', ex.message)
      }
    }
    finally {
      return value
    }
  },
  setItem: function(key, value) {
    try {
      //  when enable Private Browsing in ios safari, 
      //  use localStorage.setItem will get an error
      localStorage.setItem(key, value)
    } catch ( ex ) {
      // show error message in dev mode
      if (__DEV__) {
        console.error('localStorage.setItem error, ', ex.message)
      }
    }
  }
}
