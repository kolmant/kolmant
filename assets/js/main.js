jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    



    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });

    /*var lang_es = {
      "spanish" : "Español",
      "english" : "Inglés",
      "selector" : "Selecciona tu lenguaje preferido:",
      "about_me" : "Acerca de mí",
      "about_me_data" : "",
      "experiences" : "Experiencia laboral",
      "experiences_data" : "Experiencia laboral",
      "projects" : "Proyectos",
      "projects_data" : "Proyectos",
      "skills" : "Habilidades y competencia",
      "skills_data" : "Habilidades y competencia",
      "awards" : "Premios y reconocimientos",
      "awards_data" : "Premios y reconocimientos",
      "education" : "Educación",
      "education_data" : "Educación",
      "languages" : "Lenguajes",
      "languages_data" : "Lenguajes",
      "interests" : "Intereses"
      "interests_data" : "Intereses"
    };

        var lang_en = {
      "spanish" : "Spanish",
      "english" : "English",
      "selector" : "Select your preferred language:",
      "about_me" : "ABOUT ME",
      "about_me_data" : "<p>So... Hi! I am a Systems Engineering student but above all I'm a passionate programmer. I'm currently a programming competitive contestant. I represent my university as an active contestant in the Colombian Collegiate Programming League and in the “Maratón Nacional de Programación ACIS REDIS”. I represented my country twice in the “ACM-ICPC South America-North Finals” competition. I also usually compete in the Google Code Jam and in the Codeforces rounds.</p>                    <p>I love to look for security gaps in the web pages too. For example, in 2014, I found a serious vulnerability in UVa Online Judge, one of the most important online automated judges for programming problems in the world.</p>",
      "experiences" : "EXPERIENCES",
      "experiences_data" : 'Experiencia laboral',
      "projects" : "Proyectos",
      "projects_data" : "Proyectos",
      "skills" : "Habilidades y competencia",
      "skills_data" : "Habilidades y competencia",
      "awards" : "Premios y reconocimientos",
      "awards_data" : "Premios y reconocimientos",
      "education" : "Educación",
      "education_data" : "Educación",
      "languages" : "Lenguajes",
      "languages_data" : "Lenguajes",
      "interests" : "Intereses"
      "interests_data" : "Intereses"
    };
   
    */

});