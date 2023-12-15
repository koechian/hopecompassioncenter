<?php

get_header();

?>
      <div class="logo-image">
        <img src='<?php echo get_template_directory_uri(); ?>/assets/Title.svg' />
      </div>
    </div>
    <div class="menu">
      <ul>
        <li><a href="">Home </a></li>
        <li><a href="">About </a></li>
        <li><a href="">Projects </a></li>
        <li><a href="">Contacts</a></li>
      </ul>
      <button>Donate</button>
    </div>
  </header>
  <body>
    <main>
      <section class="hero">
        <div>
          <img src='<?php echo get_template_directory_uri(); ?>/assets/Banner.png'/>
        </div>
        <div class="twins">
          <div>
            <h1>Transforming Lives, One Act of Compassion at a time</h1>
            <p>
              At the heart of Hope Compassion Center lies a journey sparked by
              one individual's compassion and fueled by a collective commitment
              to uplift lives. Join us in building a future where hope prevails,
              dreams flourish, and communities thrive. Together, we make a
              lasting difference, one step at a time.
            </p>
          </div>
          <div>
            <div class="image-container">
              <img src='<?php echo get_template_directory_uri(); ?>/assets/hero.jpg' />
            </div>
          </div>
        </div>
      </section>
 <?php

 get_footer();
 ?>
