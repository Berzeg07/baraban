$(document).ready(function() {
    $('.drum-btn').click(function() {

        function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }

        var num = randomInteger(1, 8);

        switch (num) {
            case 1:
                $('#drum').addClass('drum-animate_1');
				function drumRes1() {
					$(".drum-result").html("10%");
				}
				setTimeout(drumRes1, 7200);
                break;
            case 2:
                $('#drum').addClass('drum-animate_2');
				function drumRes2() {
					$(".drum-result").html("5%");
				}
				setTimeout(drumRes2, 7200);
                break;
            case 3:
                $('#drum').addClass('drum-animate_3');
				function drumRes3() {
					$(".drum-result").html("Пирог с Малиной в подарок");
				}
				setTimeout(drumRes3, 7200);
                break;
            case 4:
                $('#drum').addClass('drum-animate_4');
				function drumRes4() {
					$(".drum-result").html("7%");
				}
				setTimeout(drumRes4, 7200);
                break;
            case 5:
                $('#drum').addClass('drum-animate_5');
				function drumRes1() {
					$(".drum-result").html("10%");
				}
				setTimeout(drumRes1, 7200);
                break;
            case 6:
                $('#drum').addClass('drum-animate_6');
				function drumRes1() {
					$(".drum-result").html("10%");
				}
				setTimeout(drumRes1, 7200);
                break;
            case 7:
                $('#drum').addClass('drum-animate_7');
				function drumRes7() {
					$(".drum-result").html("Пирог в подарок");
				}
				setTimeout(drumRes7, 7200);
                break;
            case 8:
                $('#drum').addClass('drum-animate_8');
				function drumRes8() {
					$(".drum-result").html("Попробуйте еще раз");
				}
				setTimeout(drumRes8, 7200);
                break;
        }
		function delClass() {
			$("#drum").removeAttr("class");
		}
		setTimeout(delClass, 8000);
    });
});
