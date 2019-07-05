$(document).ready(function() {

    // var counter_1 = 1;
    // var move_1_begin = 1980;
    // var move_1 = 1980;
    // var move_1_end = 'rotate(' + move_1 + 'deg)';
    //
    // var counter_2 = 1;
    // var move_2_begin = 2025;
    // var move_2 = 2025;
    // var move_2_end = 'rotate(' + move_2 + 'deg)';
    var moveCountTotal = 0;
    var moveCountStart = 1800;
    // var moveCountStart_1 = 1845;
    // var moveCountTotal_2 = 1890;
    // var moveCountTotal_3 = 1835;
    // var moveCountTotal_4 = 1875;
    // var moveCountTotal_5 = 1920;
    // var moveCountTotal_6 = 1945;
    // var moveCountTotal_7 = 1985;
    // var moveCountTotal_8 = 2030;

    // var moveCount_1 = 45;
    // var moveCount_2 = 90;

    var counter = 0;
    var resultNum = 0;
    // var resCount = '';




    function drumResult(text) {
        function drumResultInner() {
            $(".drum-result").html(text);
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

        var num = randomInteger(1, 8);
        console.log(num);

        // var num = 8;

        if (num == 1) {
            if (counter > 1) {
                if (resultNum == 1 || resultNum == 0) {
                    moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 45);
                }
				if (resultNum == 2) {
                    moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 45);
                }
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 45);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 45);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 45);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 45);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 45);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 45);
				}
            } else {
                moveCountTotal = moveCountTotal + (moveCountStart + 45);
            }

            resultNum = 1;
			drumResult('10%');
        }
		if (num == 2) {
			if (counter > 1) {
				if (resultNum == 2 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 90);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 90);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 90);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 90);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 90);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 90);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 90);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 90);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 90);
			}

			resultNum = 2;
			drumResult('Пирог в подарок');

		}
		if (num == 3) {
			if (counter > 1) {
				if (resultNum == 3 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 135);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 135);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 135);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 135);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 135);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 135);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 135);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 135);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 135);
			}

			resultNum = 3;
			drumResult('Попробуйте еще раз');

		}

		if (num == 4) {
			if (counter > 1) {
				if (resultNum == 4 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 180);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 180);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 180);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 180);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 180);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 180);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 180);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 180);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 180);
			}

			resultNum = 4;
			drumResult('10%');

		}

		if (num == 5) {
			if (counter > 1) {
				if (resultNum == 5 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 225);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 225);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 225);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 225);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 225);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 225);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 225);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 225);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 225);
			}

			resultNum = 5;
			drumResult('5%');

		}

		if (num == 6) {
			if (counter > 1) {
				if (resultNum == 6 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 270);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 270);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 270);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 270);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 270);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 270);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 270);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 270);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 270);
			}

			resultNum = 6;
			drumResult('Пирог с малиной в подарок');

		}

		if (num == 7) {
			if (counter > 1) {
				if (resultNum == 7 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 315);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 315);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 315);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 315);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 315);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 315);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 315);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 315);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 315);
			}

			resultNum = 7;
			drumResult('7%');

		}

		if (num == 8) {
			if (counter > 1) {
				if (resultNum == 8 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 360);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 360);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 360);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 360);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 360);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 360);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 360);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 360);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 360);
			}

			resultNum = 8;
			drumResult('10%');

		}

        counter++;

        moveStyle = 'rotate(' + moveCountTotal + 'deg)';
        $('#drum').css({
            'transform': moveStyle
        });
        counter++;

        // switch (num) {
        //     case 1:
        //         if (counter_1 > 1) {
        //             move_1 = move_1 + move_1_begin;
        //             move_1_end = 'rotate(' + move_1 + 'deg)';
        //         }
        //         $('#drum').css({
        //             'transform': move_1_end
        //         });
        //         counter_1++;
        // 		drumResult('10%');
        //         break;
        // 	case 2:
        //         if (counter_2 > 1) {
        //             move_2 = move_2 + move_2_begin;
        //             move_2_end = 'rotate(' + move_2 + 'deg)';
        //         }
        //         $('#drum').css({
        //             'transform': move_2_end
        //         });
        //         counter_2++;
        // 		drumResult('5%');
        //         break;
        // }

        // function delClass() {
        // 	$("#drum").removeAttr("class");
        // }
        // setTimeout(delClass, 8000);

        // switch (num) {
        //     case 1:
        //         $('#drum').addClass('drum-animate_1');
        // 		function drumRes1() {
        // 			$(".drum-result").html("10%");
        // 		}
        // 		setTimeout(drumRes1, 7200);
        //         break;
        //     case 2:
        //         $('#drum').addClass('drum-animate_2');
        // 		function drumRes2() {
        // 			$(".drum-result").html("5%");
        // 		}
        // 		setTimeout(drumRes2, 7200);
        //         break;
        //     case 3:
        //         $('#drum').addClass('drum-animate_3');
        // 		function drumRes3() {
        // 			$(".drum-result").html("Пирог с Малиной в подарок");
        // 		}
        // 		setTimeout(drumRes3, 7200);
        //         break;
        //     case 4:
        //         $('#drum').addClass('drum-animate_4');
        // 		function drumRes4() {
        // 			$(".drum-result").html("7%");
        // 		}
        // 		setTimeout(drumRes4, 7200);
        //         break;
        //     case 5:
        //         $('#drum').addClass('drum-animate_5');
        // 		function drumRes1() {
        // 			$(".drum-result").html("10%");
        // 		}
        // 		setTimeout(drumRes1, 7200);
        //         break;
        //     case 6:
        //         $('#drum').addClass('drum-animate_6');
        // 		function drumRes1() {
        // 			$(".drum-result").html("10%");
        // 		}
        // 		setTimeout(drumRes1, 7200);
        //         break;
        //     case 7:
        //         $('#drum').addClass('drum-animate_7');
        // 		function drumRes7() {
        // 			$(".drum-result").html("Пирог в подарок");
        // 		}
        // 		setTimeout(drumRes7, 7200);
        //         break;
        //     case 8:
        //         $('#drum').addClass('drum-animate_8');
        // 		function drumRes8() {
        // 			$(".drum-result").html("Попробуйте еще раз");
        // 		}
        // 		setTimeout(drumRes8, 7200);
        //         break;
        // }
        // function delClass() {
        // 	$("#drum").removeAttr("class");
        // }
        // setTimeout(delClass, 8000);
    });
});
