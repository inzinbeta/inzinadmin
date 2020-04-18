import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/UserModel';
import { CategoryModel } from '../models/CategoryModel';
import {BrandsModel} from '../models/BrandsModel';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

// check for email if its already registered

checkEmail(email:string)
{
 return this.http.post(`http://${environment.url}:${environment.port}/admin/checkEmail`,{email:email});

}

// check for username if its already registered

checkUsername(username:string)
{
 return this.http.post(`http://${environment.url}:${environment.port}/admin/checkUsername`,{usernam:username});

}

registerUser(data)
{
 
 return this.http.post(`http://${environment.url}:${environment.port}/admin/registeruser`,data);

}

// ge users

getUsers()
{
 return this.http.post<UserModel[]>(`http://${environment.url}:${environment.port}/admin/getUsers`,{});

}

deleteUser(data)
{
 return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteUser`,data);

}
editUser(data)
{
 return this.http.post(`http://${environment.url}:${environment.port}/admin/registeruser`,data);

}

/*
Categories Service 
*/
getParentCategory()
{
return this.http.post<string[]>(`http://${environment.url}:${environment.port}/admin/getParentsCategory`,{});

}

getAllCategory()
{
return this.http.post<CategoryModel[]>(`http://${environment.url}:${environment.port}/admin/getAllCategory`,{});

}

saveCategory(formdata)
{

return this.http.post(`http://${environment.url}:${environment.port}/admin/saveCategory`,formdata);

}


deleteCategory(category)
{
  console.log(category);
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteCategory`,category);

}
editCategory(formdata)
{
return this.http.post(`http://${environment.url}:${environment.port}/admin/updateCategory`,formdata);

}


/**
* 
* Brands Services
*/

getAllBrands()
{
return this.http.post<BrandsModel[]>(`http://${environment.url}:${environment.port}/admin/getAllBrands`,{});

}


saveBrand(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveBrand`,formdata);

}


deleteBrand(category)
{
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteBrand`,category);

}
editBrandCity(formdata)
{
return this.http.post(`http://${environment.url}:${environment.port}/admin/updateBrandCity`,formdata);

}

getAllBrandavailability()
{
return this.http.post<BrandsModel[]>(`http://${environment.url}:${environment.port}/admin/getAllBrandavailability`,{});

}
/**
* Premium Brands
*/

getAllServices()
{
return this.http.post<BrandsModel[]>(`http://${environment.url}:${environment.port}/admin/getAllServices`,{});

}


saveServices(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveServices`,formdata);

}


deleteServices(category)
{
 
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteServices`,category);

}


/**
 * 
 * offers
 */


getAllHome()
{
return this.http.post<BrandsModel[]>(`http://${environment.url}:${environment.port}/admin/getAllHome`,{});

}


saveHome(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveHome`,formdata);

}


deleteHome(category)
{
 
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteHome`,category);

}



getAllHowItworks()
{
return this.http.post<BrandsModel[]>(`http://${environment.url}:${environment.port}/admin/getAllHowItworks`,{});

}


saveHowItworks(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveHowItworks`,formdata);

}


deleteHowItworks(category)
{
 
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteHowItworks`,category);

}



getAllOffers()
{
return this.http.post<BrandsModel[]>(`http://${environment.url}:${environment.port}/admin/getAllOffers`,{});

}


saveOffer(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveOffer`,formdata);

}


deleteOffer(category)
{
 
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteOffer`,category);

}




editPremiumBrand(formdata)
{
return this.http.post(`http://${environment.url}:${environment.port}/admin/updatePremiumBrand`,formdata);

}



/**
 * Site Info
 */

saveInfo(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveSiteInfo`,formdata);

}



getSiteInfo()
{
return this.http.post<BrandsModel[]>(`http://${environment.url}:${environment.port}/admin/getSiteInfo`,{});

}


saveBusinessProfile(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveBusinessProfile`,formdata);

}


getBusinessProfile()
{

return this.http.post(`http://${environment.url}:${environment.port}/admin/getBusinessProfile`,{});

}

deleteBusinessProfile(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteBusinessProfile`,formdata);

}



/**
 * Tags
 */




getAllTags(type)
{
return this.http.post<BrandsModel[]>(`http://${environment.url}:${environment.port}/admin/getAllTags`,{type:type});

}


saveTags(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveTags`,formdata);

}


deleteTags(category)
{
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteTags`,category);

}


/**
 * Enquiries
 */



getAllEnquiries()
{
return this.http.post<BrandsModel[]>(`http://${environment.url}:${environment.port}/admin/getAllEnquiries`,{});

}


saveEnquiries(formdata)
{
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveEnquiry`,formdata);

}


deleteEnquiry(category)
{
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteEnquiry`,category);

}





/**
* States and Districts
*/
getAllStates()
{
return this.http.post(`http://${environment.url}:${environment.port}/admin/getAllStates`,{});

}

/**
 * All Products
 */

getAllProducts()
{
return this.http.post(`http://${environment.url}:${environment.port}/admin/getAllProducts`,{});

}


saveProduct(formdata)
{
  
console.log("fd",formdata);
return this.http.post(`http://${environment.url}:${environment.port}/admin/saveProduct`,formdata);

}


deleteProduct(category)
{
return this.http.post(`http://${environment.url}:${environment.port}/admin/deleteProduct`,category);

}


getProfilePic(type)
{
  return this.http.post(`http://${environment.url}:${environment.port}/admin/getPic`,{type:type});

}


}
