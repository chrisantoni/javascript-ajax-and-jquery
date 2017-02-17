function getColor() {
    $.ajax({
        url: `http://localhost:3000/color`,
        method: "GET",
        contentType: 'application/x-www-form-urlencoded',
        success: function (color) {
          console.log(color);
            var randomColumn = Math.floor((Math.random() * 9) + 1);
            $("div").find(`#col${randomColumn}`).css('background-color',color)
        }
    })
}
