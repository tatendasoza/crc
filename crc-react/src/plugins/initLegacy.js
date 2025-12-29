export default function initLegacy() {
  const $ = window.jQuery || window.$
  if (!$) return
  try {
    $('#status').fadeOut()
    $('#preloader').delay(350).fadeOut('slow')
  } catch { void 0 }
  try {
    $('[data-toggle="tooltip"]').tooltip()
  } catch { void 0 }
  try {
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    })
  } catch { void 0 }
  try {
    if ($('#gridWrapper').length > 0 && $.fn.shuffle) {
      const $grid = $('#gridWrapper')
      $grid.shuffle({ itemSelector: '.portfolio-wrapper' })
      $('#filter a').off('click').on('click', function (e) {
        e.preventDefault()
        $('#filter a').removeClass('active')
        $(this).addClass('active')
        const groupName = $(this).attr('data-group')
        $grid.shuffle('shuffle', groupName )
      })
    }
  } catch { void 0 }
  const owl = $.fn.owlCarousel
  if (owl) {
    try {
      $('.gc_slider_img_section .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        items: 1
      })
    } catch { void 0 }
    ;[
      { sel: '.gc_com_event_slider_wrapper .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 900: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_testi_slider_wrapper .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'], animateOut: 'slideOutDown', animateIn: 'flipInX', items: 1, smartSpeed: 450, responsive: { 0: { items: 1, nav: true }, 900: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_recent_slider_wrapper .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_serm_slider_wrapper .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true }, 1500: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_blog_slider_wrapper .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true }, 1500: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_client_slider_wrapper .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true }, 1500: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_partner_slider_wrapper .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_about_sec_slider_wrapper .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_about_team_slider .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 900: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_causes_single_Slider .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true, margin: 20 } } } },
      { sel: '.gc_blog_categorie_Slider_wrapper .owl-carousel', opts: { loop: true, margin: 10, autoplay: true, responsiveClass: true, navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'], responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: true }, 1000: { items: 1, nav: true, loop: true, margin: 20 } } } }
    ].forEach(({ sel, opts }) => {
      try {
        const $el = $(sel)
        if ($el.length && !$el.hasClass('owl-loaded')) $el.owlCarousel(opts)
      } catch { void 0 }
    })
  }
}
