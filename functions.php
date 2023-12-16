<?php
/**
*
*   Template Name: functions.php
*   Description: Add features 
*
*/

function fn_theme_scripts(){
    wp_enqueue_style('styles', get_stylesheet_uri());
}


function fn_theme_supports(){
    add_theme_support('title-tag');
}

function register_my_menus() {
    register_nav_menus(
      array(
        'header-menu' => __( 'Header Menu' , 'text_domain'),
        'foooter-menu' => __( 'Footer Menu', 'text_domain' )
       )
     );
   }
   

   
add_action( 'init', 'register_my_menus' );
add_Action('wp_enqueue_scripts', 'fn_theme_scripts');
add_action('after_setup_theme', 'fn_theme_supports');


?>