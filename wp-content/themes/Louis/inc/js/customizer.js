/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function ($) {
  // site title
  wp.customize('blogname', function (value) {
    value.bind(function (to) {
      $('.site-title').text(to);
    });
  });

  // tagline
  wp.customize('blogdescription', function (value) {
    value.bind(function (to) {
      $('.site-description').text(to);
    });
  });
  // header logo
  wp.customize('louis_header_logo_show', function (value) {
    value.bind(function (to) {
      if (to === 'text') {
        $('#site-branding h1, #site-branding span').show();
        $('#site-branding img').hide();
      }

      if (to === 'logo') {
        $('#site-branding h1, #site-branding span').hide();
        $('#site-branding img').show();
      }
    });
  });

  // louis header logo image
  wp.customize('louis_header_logo_image', function (value) {
    value.bind(function (to) {
      $('#site-branding img').attr('src', to);
    });
  });

  // louis hero banner
  wp.customize('louis_hero_show', function (value) {
    value.bind(function (to) {
      return to === 'yes' ? $('#hero').show() : $('#hero').hide();
    });
  });

  // louis hero banner bg image
  wp.customize('louis_hero_bg_image', function (value) {
    value.bind(function (to) {
      $('#hero .hero-bg').attr('style', 'background-image: url(' + to + ')');
    });
  });

  // louis hero banner title
  wp.customize('louis_hero_title', function (value) {
    value.bind(function (to) {
      $('#hero h2').text(to);
    });
  });

  // louis hero banner text
  wp.customize('louis_hero_text', function (value) {
    value.bind(function (to) {
      $('#hero .herotext').html(to);
    });
  });

  // louis hero button 1 show/hide
  wp.customize('louis_hero_button1_show', function (value) {
    value.bind(function (to) {
      return to === 'yes' ? $('.button.green').show() : $('.button.green').hide();
    });
  });

  // louis hero button 1 text
  wp.customize('louis_hero_button1_text', function (value) {
    value.bind(function (to) {
      $('.button.green').text(to);
    });
  });

  // louis hero button 1 link
  wp.customize('louis_hero_button1_link', function (value) {
    value.bind(function (to) {
      $('.button.green').attr('href', encodeURI(to));
    });
  });

  // louis hero button 2 show/hide
  wp.customize('louis_hero_button2_show', function (value) {
    value.bind(function (to) {
      return to === 'yes' ? $('.button.seethrough').show() : $('.button.seethrough').hide();
    });
  });

  // louis hero button 2 text
  wp.customize('louis_hero_button2_text', function (value) {
    value.bind(function (to) {
      $('.button.seethrough').text(to);
    });
  });

  // louis hero button 2 link
  wp.customize('louis_hero_button2_link', function (value) {
    value.bind(function (to) {
      $('.button.seethrough').attr('href', encodeURI(to));
    });
  });

  //louis hero overlay
  wp.customize('louis_hero_overlay_enabled', function (value) {
    value.bind(function (to) {
      $('.hero-overlay').hide();
      if (to === 'yes') {
        $('.hero-overlay').show();
      }
    });
  });

  //louis hero overlay color
  wp.customize('louis_hero_overlay_color', function (value) {
    value.bind(function (to) {
      if (to !== 'blank') {
        $('.hero-overlay').css({'background-color': to});
      } else {
        $('.hero-overlay').css({'background-color': undefined});
      }
    });
  });

  //louis hero overlay opacity
  wp.customize('louis_hero_overlay_opacity', function (value) {
    value.bind(function (to) {
      if (to !== 'blank') {
        $('.hero-overlay').css({'opacity': to / 100});
      } else {
        $('.hero-overlay').css({'opacity': undefined});
      }
    });
  });

  // louis hero blur
  wp.customize('louis_hero_blur_enabled', function (value) {
    value.bind(function (to) {
      $('.hero-bg').css({'filter': 'blur(' + to + 'px)', '-webkit-filter': 'blur(' + to + 'px)'});
    });
  });


  // louis hero social show/hide
  wp.customize('louis_header_social_show', function (value) {
    value.bind(function (to) {
      return to === 'yes' ? $('#hero .socialmediamenu').show() : $('#hero .socialmediamenu').hide();
    });
  });

  // louis hero social facebook
  wp.customize('louis_header_social_facebook', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .facebook').show().children('a').attr('href', to) : $('#hero .socialmediamenu .facebook').hide();
    });
  });

  // louis hero social twitter
  wp.customize('louis_header_social_twitter', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .twitter').show().children('a').attr('href', to) : $('#hero .socialmediamenu .twitter').hide();
    });
  });

  // louis hero social pinterest
  wp.customize('louis_header_social_pinterest', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .pinterest').show().children('a').attr('href', to) : $('#hero .socialmediamenu .pinterest').hide();
    });
  });

  // louis hero social linkedin
  wp.customize('louis_header_social_linkedin', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .linkedin').show().children('a').attr('href', to) : $('#hero .socialmediamenu .linkedin').hide();
    });
  });

  // louis hero social gplus
  wp.customize('louis_header_social_gplus', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .gplus').show().children('a').attr('href', to) : $('#hero .socialmediamenu .gplus').hide();
    });
  });

  // louis hero social behance
  wp.customize('louis_header_social_behance', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .behance').show().children('a').attr('href', to) : $('#hero .socialmediamenu .behance').hide();
    });
  });

  // louis hero social dribbble
  wp.customize('louis_header_social_dribbble', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .dribbble').show().children('a').attr('href', to) : $('#hero .socialmediamenu .dribbble').hide();
    });
  });

  // louis hero social flickr
  wp.customize('louis_header_social_flickr', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .flickr').show().children('a').attr('href', to) : $('#hero .socialmediamenu .flickr').hide();
    });
  });

  // louis hero social 500px
  wp.customize('louis_header_social_500px', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .social500px').show().children('a').attr('href', to) : $('#hero .socialmediamenu .social500px').hide();
    });
  });

  // louis hero social reddit
  wp.customize('louis_header_social_reddit', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .reddit').show().children('a').attr('href', to) : $('#hero .socialmediamenu .reddit').hide();
    });
  });

  // louis hero social wordpress
  wp.customize('louis_header_social_wordpress', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .wordpress').show().children('a').attr('href', to) : $('#hero .socialmediamenu .wordpress').hide();
    });
  });

  // louis hero social youtube
  wp.customize('louis_header_social_youtube', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .youtube').show().children('a').attr('href', to) : $('#hero .socialmediamenu .youtube').hide();
    });
  });

  // louis hero social youtube
  wp.customize('louis_header_social_soundcloud', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .soundcloud').show().children('a').attr('href', to) : $('#hero .socialmediamenu .soundcloud').hide();
    });
  });

  // louis hero social youtube
  wp.customize('louis_header_social_medium', function (value) {
    value.bind(function (to) {
      return to.length > 0 ? $('#hero .socialmediamenu .medium').show().children('a').attr('href', to) : $('#hero .socialmediamenu .medium').hide();
    });
  });

  // louis footer logo show/hide
  wp.customize('louis_footer_logo_show', function (value) {
    value.bind(function (to) {
      return to === 'yes' ? $('#footer #bottom .wrapper > a').show().children('a').attr('href', to) : $('#footer #bottom .wrapper > a').hide();
    });
  });

  // louis footer logo image
  wp.customize('louis_footer_logo_image', function (value) {
    value.bind(function (to) {
      $('#footer a img.bottomlogo').attr('src', to);
    });
  });

  //louis_google_fonts_heading_font

  // Background color.
  wp.customize('background_color', function (value) {
    value.bind(function (to) {
      if ('blank' === to) {
        $('body').css({
          'clip': 'rect(1px, 1px, 1px, 1px)',
          'position': 'absolute'
        });
      } else {
        $('body').css({
          'clip': 'auto',
          'background-color': to,
          'position': 'relative'
        });
      }
    });
  });

  // google fonts
  wp.customize('louis_google_fonts_body_font', function (value) {
    value.bind(function (to) {
      var font = to.replace(' ', '+');
      WebFontConfig = {
        google: { families: [ font + '::latin' ] }
      };
      (function () {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();

      // style the text
      if (to == 'none') {
        $('body').attr('style', '');
      }
      else {
        var myVar = setInterval(function () {
          if (typeof WebFont != 'undefined') {
            WebFont.load({
              google: {
                families: [font]
              }
            });
            clearInterval(myVar);
          }
        }, 100);

        $('body, p, span, small, input, li, li a, .block_cont_in :not(h1,h2,h3,h4,h5,.fa,h1 a, h2 a, h3 a, h4 a, h5 a), .banner_left .text a, .profile_cont :not(h1,h2,h3,h4,h5), .herotext, .herobuttons .button').attr("style", 'font-family:"' + to + '" !important');
      }
    });
  });
  wp.customize('louis_google_fonts_heading_font', function (value) {
    value.bind(function (to) {
      var font = to.replace(' ', '+');
      WebFontConfig = {
        google: { families: [ font + '::latin' ] }
      };
      (function () {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();

      // style the text
      if (to == 'none') {
        $('h1,h2,h3,h4,h5,h6, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a').attr("style", '');
      }
      else {
        var myVar = setInterval(function () {
          if (typeof WebFont != 'undefined') {
            WebFont.load({
              google: {
                families: [font]
              }
            });
            clearInterval(myVar);
          }
        }, 100);

        $('h1,h2,h3,h4,h5,h6, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a').attr("style", 'font-family:"' + to + '" !important');
      }
    });
  });

  // colors
  wp.customize('louis_accent_color', function (value) {
    value.bind(function (to) {
      if ('blank' === to) {
        // bg - .search input.submit, .tab_head li:hover, .tab_head li.active, .banner_left a.contact, .read_more, .pagination a, .pagination span
        $('.search input.submit, .tab_head li:hover, .tab_head li.active, #hero .green, .blogimage .fa, .blogpostmeta .fa, .featurewidgeticon .fa, .socialmediamenu .fa, .pagination a, .pagination span, .profile_cont .fa').css({});
        $('body #louis-selection-styles').remove();
      } else {
        $('body').append('<style id="louis-selection-styles">::selection {background: '+to+'}</style>')
        $('.block_cont_in ul li .fa-folder-open-o, .block_cont_in ul li .fa-calendar-check-o, .block_cont_in ul li .fa-comments-o, .profile_cont .fa, .comment-body a, #respond a, .post-edit-link, .authormeta a').css({
          'color': to
        });
        $('.postmeta li a')
          .on('mouseenter', function (e) {
            $(e.target).attr('style', 'color: ' + to);
          })
          .on('mouseleave', function (e) {
            $(e.target).attr('style', '');
          });
        $('.tab_head li')
          .on('mouseenter', function (e) {
            var el = e.target;
            while(e.target.localName !== 'LI') {
              el = e.target.parentElement;
            }
            $(el).attr('style', 'background-color: ' + to);
          })
          .on('mouseleave', function (e) {
            $(e.target).attr('style', '');
          });
        $('.blogpostmeta a, .postcontentmeta a')
          .on('mouseover', function (e) {
            $(e.target).attr('style', 'color: '+to);
          })
          .on('mouseleave', function (e) {
            //$(e.target).attr('style', '');
            e.target.color = 'initial';
          });
        $('.footerwidget a, .authormeta a, .post-edit-link')
          .on('mouseover', function (e) {
            $(e.target).css({
              borderTopColor: to,
              borderBottomColor: to,
              borderLeftColor: to,
              borderRightColor: to
            });
          })
          .on('mouseleave', function (e) {
            $(e.target).css({
              borderTopColor: undefined,
              borderBottomColor: undefined,
              borderLeftColor: undefined,
              borderRightColor: undefined
            });
          });
        $('.blogimage .fa, .search input.submit, .tab_head li:hover, .tab_head li.active, #hero .green, .pagination a, .pagination span, ::selection').css({
          'background-color': to
        });
        $('.blogpostmeta .fa, .featurewidgeticon .fa, .socialmediamenu .fa, .profile_cont .fa, .herotext a, .postcontentmeta .fa').css({color: to});
        $('.herobuttons .button.seethrough, .tab_cont .clear').attr('style', 'border-color: '+to);
      }
    })
  });
  // end colors

})(jQuery);
