//select
$(document).ready(function () {

    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }

    DropDown.prototype = {
        initEvents: function () {
            var obj = this;

            obj.dd.on('click', function (event) {
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click', function () {
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                //obj.placeholder.text('Производитель: ' + obj.val);
                obj.placeholder.text(obj.val);
            });
        },
        getValue: function () {
            return this.val;
        },
        getIndex: function () {
            return this.index;
        }
    };

    $(function () {

        var dd = new DropDown($('#dd'));

        $(document).click(function () {
            // all dropdowns
            $('.select-1').removeClass('active');
        });

    });


//end select

//number
    function catalogItemCounter(field) {

        var fieldCount = function (el) {
            var
                min = el.data('min') || false,      // Мин. значение
                max = el.data('max') || false,      // Макс. значение
                dec = el.prev('.dec'),              // Кнопка уменьшения кол-ва
                inc = el.next('.inc');              // Кнопка увеличения кол-ва

            function init(el) {
                if (!el.attr('disabled')) {
                    dec.on('click', decrement);
                    inc.on('click', increment);

                }

                // Уменьшим значение
                function decrement() {
                    var value = parseInt(el[0].value);
                    value--;

                    if (!min || value >= min) {
                        el[0].value = value;
                    }
                };

                // Увеличим значение
                function increment() {
                    var value = parseInt(el[0].value);

                    value++;

                    if (!max || value <= max) {
                        el[0].value = value++;
                    }
                };
            }

            el.each(function () {
                init($(this));
            });
        };



        $(field).each(function () {
            fieldCount($(this));
        });


    }


    catalogItemCounter('.fieldCount');

    //запрещаем вводить буквы в number (можно цифры, точку и запятую)
    $('.input-number').keypress(function(e) {

       if (e.which != 8 && e.which != 0 && e.which != 44 && e.which != 46 && e.which != 189 && e.which != 190 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

//end number


});