import {uploadImage} from "../api/Api";

export const actionCreate = (path)=>{
  return dispatch =>{
      uploadImage(path).then(data=>{
        //  alert(JSON.stringify(data));
      });
  }
};