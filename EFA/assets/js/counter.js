(function ($) {
  $.fn.countTo = function (options) {
      options = options || {};

      return $(this).each(function () {
          var settings = $.extend({}, $.fn.countTo.defaults, {
              from: $(this).data("from"),
              to: $(this).data("to"),
              speed: $(this).data("speed"),
              refreshInterval: $(this).data("refresh-interval"),
              decimals: $(this).data("decimals")
          }, options);

          var loops = Math.ceil(settings.speed / settings.refreshInterval),
              increment = (settings.to - settings.from) / loops;

          var self = this,
              $self = $(this),
              loopCount = 0,
              value = settings.from,
              data = $self.data("countTo") || {};

          $self.data("countTo", data);

          if (data.interval) {
              clearInterval(data.interval);
          }
          data.interval = setInterval(updateTimer, settings.refreshInterval);

          render(value);

          function updateTimer() {
              value += increment;
              loopCount++;

              render(value);

              if (typeof settings.onUpdate == "function") {
                  settings.onUpdate.call(self, value);
              }

              if (loopCount >= loops) {
                  $self.removeData("countTo");
                  clearInterval(data.interval);
                  value = settings.to;

                  if (typeof settings.onComplete == "function") {
                      settings.onComplete.call(self, value);
                  }
              }
          }

          function render(value) {
              var formattedValue = settings.formatter.call(self, value, settings);
              $self.html(formattedValue);
          }
      });
  };

  $.fn.countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1000,
      refreshInterval: 100,
      decimals: 0,
      formatter: formatter,
      onUpdate: null,
      onComplete: null
  };

  function formatter(value, settings) {
      return value.toFixed(settings.decimals);
  }

  $(document).ready(function () {
      $(".count-number").data("countToOptions", {
          formatter: function (value, options) {
              return value
                  .toFixed(options.decimals)
                  .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
          }
      });

      function startCount() {
          $(".timer").each(function () {
              var $this = $(this);
              $this.countTo($this.data("countToOptions"));
          });
      }

      var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                  $(entry.target).addClass("visible");
                  startCount();
                  observer.unobserve(entry.target);
              }
          });
      }, {
          threshold: 0.5
      });

      $(".counter").each(function () {document.addEventListener('DOMContentLoaded', function () {
    // Options for CountUp.js
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    };

    // Initialize CountUp.js counters
    var happyStudents = new CountUp('happy-students', 0, 250, 0, 2, options);
    var courseHours = new CountUp('course-hours', 0, 150, 0, 2, options);
    var employedStudents = new CountUp('employed-students', 0, 75, 0, 2, options);
    var yearsExperience = new CountUp('years-experience', 0, 15, 0, 2, options);

    // Start counters when they are visible on screen
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var target = entry.target;
                if (target.id === 'happy-students') happyStudents.start();
                if (target.id === 'course-hours') courseHours.start();
                if (target.id === 'employed-students') employedStudents.start();
                if (target.id === 'years-experience') yearsExperience.start();
                observer.unobserve(target); // Stop observing once the counter starts
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.count-number').forEach(function(el) {
        observer.observe(el);
    });
});

          observer.observe(this);
      });
  });
  
})(jQuery);
