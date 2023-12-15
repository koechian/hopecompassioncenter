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

add_Action('wp_enqueue_scripts', 'fn_theme_scripts');

function fn_theme_supports(){
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'fn_theme_supports');


?>