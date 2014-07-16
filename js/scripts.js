// var cost = function(fromZip, toZip, weight, dim1, dim2, dim3) {
//   return (Math.abs(fromZip - toZip)+1)*weight*(dim1+dim2+dim3)/100;
// };


$(document).ready(function() {
  $('#add-package').click(function() {
    $('#new-packages').append('<div class="new-package">' +
                                '<div class="form-group">' +
                                '<input type="text" class="form-control weight" placeholder="Weight">' +
                                '</div>' +
                                '<div class="form-group">' +
                                '<input type="text" class="form-control dim1" placeholder="Length">' +
                                '</div>' +
                                '<div class="form-group">' +
                                '<input type="text" class="form-control dim2" placeholder="Height">' +
                                '</div>' +
                                '<div class="form-group">' +
                                '<input type="text" class="form-control dim3" placeholder="Width">' +
                                '</div>' +
                                '</div>');
  });

  $('form').submit(function(event) {
    var fromZip = parseInt($('input#fromZip').val());
    var toZip = parseInt($('input#toZip').val());

    var quote = {from: fromZip, to: toZip, packages: [],
      cost: function() {
        var total = 0;
        this.packages.forEach(function(package) {
          total+=package.weight*(package.dim1 + package.dim2 + package.dim3)
        });
        return total*(Math.abs(this.from - this.to)+1)/100;
      }
    };

    $('.new-package').each(function() {
      var weightInput = parseFloat($(this).find('input.weight').val());
      var dim1Input = parseFloat($(this).find('input.dim1').val());
      var dim2Input = parseFloat($(this).find('input.dim2').val());
      var dim3Input = parseFloat($(this).find('input.dim3').val());
      quote.packages.push({weight: weightInput, dim1: dim1Input, dim2: dim2Input, dim3: dim3Input});
    });

    $("#quote").text(quote.cost());

    event.preventDefault();
  });
});
