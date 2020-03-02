import React, { Component } from 'react';
import google from '../../images/google.png';
import logo from '../../images/Hlogo.png';

class Login extends Component{


  Logueo(){
    var login = document.querySelector('#login');
    var register = document.querySelector('#register');

    login.classList.toggle('ocultar')
    register.classList.toggle('ocultar')
  }

  EnviarLogueo(event){
    var email = document.querySelector('input#email1');
    var formulario = document.querySelector('#user');
    var next = document.querySelector('#next');
    var divPass = document.querySelector('.pass');
    var pass = document.querySelector('#pass');


        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)){
          divPass.classList.remove('ocultar');
          next.classList.add('deshabilitado');

          email.disabled = true;

        }

        if(pass.value.length > 4){
          formulario.submit();
        }

  }

  ValidarBotonNext(){
    var email = document.querySelector('input#email1');
    var next = document.querySelector('#next');
    var pass = document.querySelector('#pass');
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value) && pass.value == ''){
      if(next.classList.contains('deshabilitado')){
        next.classList.remove('deshabilitado');
        email.style.borderColor = "green";
      }
    }else{
      if(!(next.classList.contains('deshabilitado'))){
        next.classList.add('deshabilitado');
        email.style.borderColor = "#ccc";
      }
    }

    if(pass.value.length > 4){
      next.classList.remove('deshabilitado');
      pass.style.borderColor = "green";
    }
  }

  /*-------------------------------------------------------*/

  ValidarBotonSign(){
    var email = document.querySelector('#email2');
    var nombre = document.querySelector('#first-name');
    var apellido = document.querySelector('#last-name');
    var password = document.querySelector('#pass2');
    var telefono = document.querySelector('#number');
    var company = document.querySelector('#comp-name');
    var jobs = document.querySelector('.jobs');

    var signUp = document.querySelector('#signUp');

    var check_email = false;
    var check_nombre = false;
    var check_apellido = false;
    var check_password = false;
    var check_telefono = false;
    var check_company = false;
    var check_jobs = false;



    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)){
        email.style.borderColor = "green";
        check_email = true;
    }else{
        email.style.borderColor = "#ccc";
        check_email = false;
    }

    if(/^[A-Za-z]{3,40}$/.test(nombre.value)){
      nombre.style.borderColor = "green";
      check_nombre = true;
    }else{
      nombre.style.borderColor = "#ccc";
      check_nombre = false;
    }

    if(/^[A-Za-z]{3,40}$/.test(apellido.value)){
      apellido.style.borderColor = "green";
      check_apellido = true;
    }else{
      apellido.style.borderColor = "#ccc";
      check_apellido = false;
    }

    if(password.value.length > 4){
      password.style.borderColor = "green";
      check_password = true;
    }else{
      password.style.borderColor = "#ccc";
      check_password = false;
    }

    if(telefono.value.length > 8){
      telefono.style.borderColor = "green";
      check_telefono = true;
    }else{
      telefono.style.borderColor = "#ccc";
      check_telefono = false;
    }

    if(/^[A-Za-z0-9]{3,20}$/.test(company.value)){
      company.style.borderColor = "green";
      check_company = true;
    }else{
      company.style.borderColor = "#ccc";
      check_company = false;
    }

    if(jobs.value != ''){
      check_jobs = true;
    }else{
      check_jobs = false;
    }


    if(check_email && check_nombre && check_apellido && check_password && check_telefono && check_company && check_jobs) {
      if(signUp.classList.contains('deshabilitado')){
        signUp.classList.remove('deshabilitado');
      }
      console.log('true');
      return true
    }else{
      if(!(signUp.classList.contains('deshabilitado'))){
        signUp.classList.add('deshabilitado');
      }
      console.log('false');
      return false
    }
  }


  EnviarUsuario(){
    var formulario = document.querySelector('#newUser');
    if(this.ValidarBotonSign()){
      formulario.submit();
    }else{
      console.log('Funciono asi pero completa todo gil')
    }
  }


  render(){
    return(
      <div>
        <div id="login">

          <form className="login" action="index.html" method="post" id="user">
            <div>
            <img className="h-logo" src={logo} alt="logo"/>
            </div>

            <div className="google">
              <div>
                <img className="logo-google" src={google} alt="google"/>
              </div>
                <p>Log in with Google</p>
            </div>
            <div className="or">
              <div className="linea">

              </div>
              <span>or</span>
              <div className="linea">

              </div>
            </div>
            <div>
            <label htmlFor="email1">Email Address</label>
            <input type="text" name="email1" id="email1" onKeyUp={()=>{this.ValidarBotonNext()}}/>
            </div>
            <div className="ocultar pass">
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" onKeyUp={()=>{this.ValidarBotonNext()}}/>
            </div>
            <button type="button" className="deshabilitado" id="next" name="button" onClick={()=>{this.EnviarLogueo()}}>Next</button>
          </form>
            <p className="sign">Don't have an account? <a href="#" id="loginButton" onClick={()=>{this.Logueo()}}>Sign Up</a></p>
        </div>


        <div className="ocultar" id="register">
          <form className="login" action="index.html" method="post" id="newUser">
            <div>
            <img className="h-logo" src={logo} alt="logo"/>
            </div>
            <h2>
              Create your account
            </h2>
            <div className="google">
              <div>
                <img className="logo-google" src={google} alt="google"/>
              </div>
                <p>Log in with Google</p>
            </div>
            <div className="or">
              <div className="linea">

              </div>
              <span>or</span>
              <div className="linea">

              </div>
            </div>
            <div id="recommend">
            <p>
              <label htmlFor="email2">Email Address</label>
            <input type="text" name="email2" id="email2" onKeyUp={()=>{this.ValidarBotonSign()}}/>
            </p>
            <span className="recommend">We recommend using your work email</span>
          </div>

            <p>
              <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" onKeyUp={()=>{this.ValidarBotonSign()}}/>
            </p>
            <p>
              <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" onKeyUp={()=>{this.ValidarBotonSign()}}/>
            </p>
            <p>
              <label htmlFor="pass">Password</label>
            <input type="password" name="pass" maxlength="12" id="pass2" onKeyUp={()=>{this.ValidarBotonSign()}}/>
            </p>
            <p>
              <label htmlFor="number">Phone Number</label>
            <input type="tel" name="number" id="number" maxlength="16" onKeyUp={()=>{this.ValidarBotonSign()}}/>
            </p>
            <p>
              <label htmlFor="comp-name">Company Name</label>
            <input type="text" name="comp-name" id="comp-name" maxlength="20" onKeyUp={()=>{this.ValidarBotonSign()}}/>
            </p>
            <p>
              <label htmlFor="jobs">Job Function</label>
              <select className="jobs" name="jobs" id="jobs" required onClick={()=>{this.ValidarBotonSign()}}>
                <option value="">None Selected</option>
                <option value="IT Executive (CIO, CTO, VP Engineering, etc.)">IT Executive (CIO, CTO, VP Engineering, etc.)</option>
                <option value="Business Executive (CEO, COO, CMO, etc.)">Business Executive (CEO, COO, CMO, etc.)</option>
                <option value="Software Developer / Engineer">Software Developer / Engineer</option>
                <option value="Director / Development Manager">Director / Development Manager</option>
                <option value="Architect">Architect</option>
                <option value="DBA">DBA</option>
                <option value="Technical Operations">Technical Operations</option>
                <option value="Product / Project Manager">Product / Project Manager</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </select>
            </p>
            <p>
              <label htmlFor="country">Country</label>
              <select className="country" name="country" id="country" required>
                <option value="0">Argentina</option>
                <option value="1">Brasil</option>
                <option value="2">Chile</option>
                <option value="3">Colombia</option>
                <option value="4">Venezuela</option>
                <option value="5">Uruguay</option>
              </select>
            </p>
            <button type="button" name="button" className="deshabilitado" id="signUp" onClick={()=>{this.EnviarUsuario()}}>Sign Up</button>
          </form>
          <p className="sign">Do you already have an account? <a href="#" id="sign" onClick={()=>{this.Logueo()}}>Log in</a></p>
        </div>
      </div>
    );
  }
}

export default Login;
