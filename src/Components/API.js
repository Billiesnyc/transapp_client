class API {
    static init () {
     
      this.baseUrl = 'https://affirm-space.herokuapp.com/'
      this.businessURL = this.baseUrl + '/businesses'
      this.reviewsURL = this.baseUrl + '/reviews'
      this.citiesURL = this.baseUrl + '/cities'
      this.categoriesURL = this.baseUrl + '/categories'
      this.usersURL = this.baseUrl + '/account'
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
  
    static signup (email, username, password, city, gender) {
      return fetch(this.signupUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          email,
          username,
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

    static getCities(){
      return this.get(this.citiesURL)
    }

    static getCategories(){
      return this.get(this.categoriesURL)
    }

    static createReview (latitude, longitude, name, places_id, category, city, country, review, up, user_id) {
      return fetch(this.businessURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          latitude, 
          longitude,
          name,
          places_id,
          category,
          city,
          country, 
          review, 
          up,
          user_id
        })
      }).then(resp => resp.json())
    }

    static createUSAReview (latitude, longitude, name, places_id, category, city, state, country, review, up, user_id) {
      return fetch(this.businessURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          latitude, 
          longitude,
          name,
          places_id,
          category,
          city,
          state,
          country, 
          review, 
          up,
          user_id
        })
      }).then(resp => resp.json())
    }

    static createOnlyReview (business_id, review_text, up, user_id) {
      return fetch(this.reviewsURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          business_id,
          review_text, 
          up,
          user_id
        })
      }).then(resp => resp.json())
    }

    static updateAccount (email, username, password, city, gender){
      const token = localStorage.getItem('token')
      return fetch(this.usersURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': token}, 
        body: JSON.stringify({
          email, 
          username,
          password, 
          city, 
          gender 
      })}).then(resp => resp.json())
    }
  
  } 
  
  API.init()
  
  window.API = API
  
  export default API