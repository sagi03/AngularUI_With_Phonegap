// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var slider = new PageSlider($('body'));

    var service = new EmployeeService();
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());

    service.initialize().done(function () {
        console.log("Service initialized");
        router.addRoute('', function() {
            //$('body').html(new HomeView(service).render().$el);
            slider.slidePage(new HomeView(service).render().$el);
        });
      
        router.addRoute('employees/:id', function(id) {
            service.findById(parseInt(id)).done(function(employee) {
              //  $('body').html(new EmployeeView(employee).render().$el);
              slider.slidePage(new EmployeeView(employee).render().$el);
            });
        });
        router.start();
      //  $('body').html(new HomeView(service).render().$el);
    });

    /* --------------------------------- Event Registration -------------------------------- */
    // $('.search-key').on('keyup', findByName);
    // $('.help-btn').on('click', function() {
    //     alert("Employee Directory v3.4");
    // });

    document.addEventListener('deviceready', function () {
        console.log("deviceready")
       // window.alert("hi");
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
      }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    // function findByName() {
    //     service.findByName($('.search-key').val()).done(function (employees) {
    //         $('.content').html(employeeListTpl(employees));
    //     });
    // }
    // function renderHomeView(){
    //     var html =
    //     "<h1>Directory</h1>" +
    //     "<input class='search-key' type='search' placeholder='Enter name'/>" +
    //     "<ul class='employee-list'></ul>";
    //   $('body').html(homeTpl());
    //   $('.search-key').on('keyup', findByName);
    // }

}());