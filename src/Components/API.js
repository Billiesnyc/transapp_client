class API {
    static init () {
     
      this.baseUrl = 'http://localhost:3000'
      this.businessURL = 'http://localhost:3000/businesses'
      this.loginUrl = this.baseUrl + '/login'
      this.signupUrl = this.baseUrl + '/signup'
      this.validateUrl = this.baseUrl + '/validate'
  
    }
  
    static login (email, password) {
      return fetch(this.loginUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password
        })
      }).then(resp => resp.json())
    }
  
    static signup (email, password, city, gender) {
      return fetch(this.signupUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          email,
          password,
          city,
          gender
        })
      }).then(resp => resp.json())
    }
  
    static validate () {
      return this.get(this.validateUrl)
    }
  
    static get (url) {
      const token = localStorage.getItem('token')
      return fetch(url, {
        headers: {'Authorization': token}
      }).then(resp => resp.json())
    }

    static getBusinesses() {
      return this.get(this.businessURL)
    }

    static getBusiness(id){
      return this.get(this.businessURL + '/' + id)
    }


  
  } 
  
  API.init()
  
  window.API = API
  
  export default API