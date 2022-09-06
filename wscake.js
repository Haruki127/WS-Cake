function onload() {
    $("#body #lrvinstall").hide();
    $("#body #lrverror").hide();
    $("#body #lrvnote").hide();
    documentfun();
}

function documentfun() {
    $(document).ready(function () {

        $("#liinstall").click(function () {
            $("#body #lrvinstall").show();
            $("#body #lrverror").hide();
            $("#body #lrvnote").hide();
        });

        $("#lierror").click(function () {
            $("#body #lrverror").show();
            $("#body #lrvinstall").hide();
            $("#body #lrvnote").hide();
        });

        $("#linote").click(function () {
            $("#body #lrvnote").show();
            $("#body #lrvinstall").hide();
            $("#body #lrverror").hide();
        });

    });
}
