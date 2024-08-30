import './style.css'

import { Header } from './components/header';
import { LandingPage } from './pages/landing';
import { LoginPage } from './pages/login';
import { aboutUs } from './pages/about';


const pathname = window.location.pathname;

const $app = document.querySelector("#app");

$app.appendChild(Header());

if (pathname === "/") $app.appendChild(LandingPage());
if (pathname === "/login") $app.appendChild(LoginPage());
if (pathname === "/about") $app.appendChild(aboutUs());