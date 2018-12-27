// valores diferentes da tabela pois a empresa se baseia na variação do mes anterior


var values = [
    // {
    //     month: '10/2017',
    //     value: 0.20
    // },
    // {
    //     month: '11/2017',
    //     value: 0.52
    // },
    {
        month: '12/2017',
        value: 0.20
        // value: 0.89
    },
    {
        month: '01/2018',
        value: 0.52
        // value: 0.76
    },
    {
        month: '02/2018',
        value: 0.89
        // value: 0.07
    },
    {
        month: '03/2018',
        value: 0.76
        // value: 0.64
    },
    {
        month: '04/2018',
        value: 0.07
        // value: 0.57
    },
    {
        month: '05/2018',
        value: 0.64
        // value:  1.38
    },
    {
        month: '06/2018',
        value: 0.57
        // value: 1.87
    },
    {
        month: '07/2018',
        value:  1.38
        // value: 0.51
    },
    {
        month: '08/2018',
        value: 1.87
        // value: 0.70
    },
    {
        month: '09/2018',
        value: 0.51
        // value: 1.52
    },
    {
        month: '10/2018',
        value: 0.70
        // value: 0.89
    },
    {
        month: '11/2018',
        value: 1.52
        // value: -0.49
    },
    {
        month: '12/2018',
        value: 0.89
        // value: -0.49
    }
    
]


function calcPrice({ price, month, target }){

    var newPrice = price;
    target.empty();


    values.forEach((value) => {

        newPrice = (newPrice / 100) * value.value + newPrice
        newPrice = parseFloat(newPrice)
        var tr = $('<tr>');
        $('<td>').text('R$ ' + newPrice.toFixed(2)).appendTo(tr);
        $('<td>').text(value.month).appendTo(tr);
        $('<td>').text(value.value.toFixed(2)).appendTo(tr);
        $('<td>').text('R$ ' + parseFloat(newPrice - price).toFixed(2)).appendTo(tr);

        tr.appendTo(target);
    })

}


$('#myValueButton').on('click', function(ev){
    ev.preventDefault();

    var value = parseFloat($('#myValue').val());

    if(isNaN(value)){
        alert('Insira um valor válido');
    }else{
        calcPrice({ price: value, month : '12/2017', target: $('#mySimulation') })
    }
})

calcPrice({ price: 476.29, month : '', target: $('#simulation') })