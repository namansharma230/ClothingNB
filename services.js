'use strict';

/**
 * Handle navbar toggle and preloader
 */
const header = document.querySelector('.header');
const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const preloader = document.querySelector('.preloader');

navToggleBtn.addEventListener('click', () => {
  navToggleBtn.classList.toggle('active');
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
});

overlay.addEventListener('click', () => {
  navToggleBtn.classList.remove('active');
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('nav-active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    preloader.classList.add('loaded');
    document.body.classList.add('loaded');
  }, 1000);
});