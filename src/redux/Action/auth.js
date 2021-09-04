import firebase from "firebase";
export const LoginFaceBook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("user_birthday");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
