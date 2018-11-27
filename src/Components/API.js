class API {
    static init () {
     
      this.baseUrl = 'http://localhost:3000'
      this.businessURL = 'http://localhost:3000/businesses'
      this.reviewsURL = 'http://localhost:3000/reviews'
      this.citiesURL = this.baseUrl + '/cities'
      this.categoriesURL = this.baseUrl + '/categories'
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

    static getCities(){
      return this.get(this.citiesURL)
    }

    static getCategories(){
      return this.get(this.categoriesURL)
    }

    static createReview (latitude, longitude, name, places_id, category, city, state, country, review, up, user_id) {
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
  
  } 
  
  API.init()
  
  window.API = API
  
  export default API