$(document).ready(function() {

    var resultArr = ['10%', 'Пирог с картошкой в подарок', 'Попробуйте еще раз', '3%', '5%', 'Пирог с капустой в подарок', '7%', 'Попробуйте еще раз'];
    var promoArr = ['M10410', 'P30420', '', 'M1043', 'S1045', 'M104PS', 'SK1047', ''];
    var moveCountTotal = 0;
    var moveCountStart = 1800;
    var resultNum = 0;
    var resultLast = 0;

    function drumResult(text, promo) {
        function drumResultInner() {
            $(".drum-result").html(text);
            $(".promo").html(promo);
            $(".drum-btn").removeAttr("disabled");
        }
        setTimeout(drumResultInner, 7200);
    }

    $('.drum-btn').click(function() {
        $(".drum-btn").attr("disabled", 'disabled');

        function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }
        var rotate = 0;
        var num = randomInteger(1, 8);

        rotate = num * 45;

        if (moveCountTotal > 0) {
            moveCountTotal = (moveCountTotal - resultLast) + (moveCountStart + rotate);
        } else {
            moveCountTotal = moveCountTotal + (moveCountStart + rotate);
        }

        moveStyle = 'rotate(' + moveCountTotal + 'deg)';
        $('#drum').css({
            'transform': moveStyle
        });

        var resultInner = resultArr[num - 1];
        var promoInner = promoArr[num - 1];

        drumResult(resultInner, promoInner);

        resultNum = num;
        resultLast = num * 45;

    });
});
