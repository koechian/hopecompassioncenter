<!DOCTYPE html>
<html lang=<?php language_attributes(); ?>>
  <head>
    <meta charset="<php? bloginfo('charset');?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>
  </head>
  <header>
  <div class="logo-container">
      <div class="logo-image">
        <img src='<?php echo get_template_directory_uri(); ?>/assets/Title.svg' />
      </div>
    </div>
    <div class="menu">
      <?php
if(has_nav_menu('header-menu')){
  wp_nav_menu(array(
    'theme_location'=>'header-menu'
  ));
}
      ?>
      <ul>
        <li><a href="<?php echo get_template_directory_uri(); ?>/about.php">About </a></li>
        <li><a href="">Projects </a></li>
        <li><a href="">Contacts</a></li>
      </ul>
    </div>
  </header>
    