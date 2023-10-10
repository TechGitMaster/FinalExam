import axios from 'axios';

// Login ___________________________________________
export const loginCall = async (email, password) => {
  try{
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const { data } = await axios.post('https://psi-exam-api.praxxys.dev/api/auth/login', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data;
  }catch(e){
    return { error: 'invalid' }
  }
}

// Get All product _____________________________________
export const getAllProduct = async () => {
  try{
    var data = [];

    const getAll = '.'.repeat(5).split('').map(async (page, index) => {
      const perPage = await axios.get(`https://psi-exam-api.praxxys.dev/api/products?page=${ (index+1) }`, {
        headers: {
          'Authorization': `Bearer ${ localStorage.getItem('token') }`
        }
      })
      data = [...data, ...perPage.data.data.data];
    });
  
    await Promise.all(getAll);

    return data;


  }catch(e){
    console.log(e);
  }
}

// Add to cart the product ____________________________________
export const addToCart = async (itemProduct, quantity) => {
  try{
    const formData = new FormData();
    formData.append('quantity', quantity);

    await axios.post(`https://psi-exam-api.praxxys.dev/api/cart/add/${ itemProduct }`, formData, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('token') }`
      }
    })

  }catch(e){
    console.log(e);
  }
}

// Get cart product ____________________________________________
export const getCartProduct = async () => {
  try{
    const { data } = await axios.get('https://psi-exam-api.praxxys.dev/api/cart', {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('token') }`
      }
    });

    return data;
  }catch(e){
    console.log(e);
  }
}

// Delete Item__________________________________________________
export const deleteItemProduct = async (itemId) => {
  try{
    await axios.delete(`https://psi-exam-api.praxxys.dev/api/cart/delete/${ itemId }`, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('token') }`
      }
    });
  }catch(e){
    console.log(e);
  }
}