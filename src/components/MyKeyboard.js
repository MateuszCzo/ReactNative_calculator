import React, { useState, useEffect } from "react";
import Button from "./Button";
import { View, Text, Dimensions } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default function MyKeyboard() {
    const [orientation, setOrientation] = useState(true);
    const isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };

    useEffect(() => {
        const callback = () => setOrientation(isPortrait() ? true : false);
        Dimensions.addEventListener('change',callback);
    }, []);

    const buttons = [
        {
            style : Styles.btnDark,
            title: 'sin',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("Math.sin(")
                handleButton2("sin(")
            }
        },
        {
            style : Styles.btnDark,
            title: 'cos',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("Math.cos(")
                handleButton2("cos(")
            }
        },
        {
            style : Styles.btnDark,
            title: 'C',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                clear()
            }
        },
        {
            style : Styles.btnDark,
            title: '<',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                deleteLastChar();
            }
        },
        {
            style : Styles.btnDark,
            title: '%',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("%")
                handleButton2("%")
            }
        },
        {
            style : Styles.btnOrange,
            title: '/',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("/")
                handleButton2("/")
            }
        },
        {
            style : Styles.btnDark,
            title: '(',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("(")
                handleButton2("(")
            }
        },
        {
            style : Styles.btnDark,
            title: ')',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton(")")
                handleButton2(")")
            }
        },
        {
            style : Styles.btnGray,
            title: '7',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("7")
                handleButton2("7")
            }
        },
        {
            style : Styles.btnGray,
            title: '8',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("8")
                handleButton2("8")
            }
        },
        {
            style : Styles.btnGray,
            title: '9',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("9")
                handleButton2("9")
            }
        },
        {
            style : Styles.btnOrange,
            title: 'x',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("*")
                handleButton2("*")
            }
        },
        {
            style : Styles.btnDark,
            title: 'ln2',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("Math.LN2")
                handleButton2("ln2")
            }
        },
        {
            style : Styles.btnDark,
            title: 'log10',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("Math.LN10")
                handleButton2("ln10")
            }
        },
        {
            style : Styles.btnGray,
            title: '4',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("4")
                handleButton2("4")
            }
        },
        {
            style : Styles.btnGray,
            title: '5',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("5")
                handleButton2("5")
            }
        },
        {
            style : Styles.btnGray,
            title: '6',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("6")
                handleButton2("6")
            }
        },
        {
            style : Styles.btnOrange,
            title: '-',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("-")
                handleButton2("-")
            }
        },
        {
            style : Styles.btnDark,
            title: 'e',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("Math.E")
                handleButton2("e")
            }
        },
        {
            style : Styles.btnDark,
            title: '^',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("**")
                handleButton2("^")
            }
        },
        {
            style : Styles.btnGray,
            title: '1',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("1")
                handleButton2("1")
            }
        },
        {
            style : Styles.btnGray,
            title: '2',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("2")
                handleButton2("2")
            }
        },
        {
            style : Styles.btnGray,
            title: '3',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("3")
                handleButton2("3")
            }
        },
        {
            style : Styles.btnOrange,
            title: '+',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("+")
                handleButton2("+")
            }
        },
        {
            style : Styles.btnDark,
            title: 'π',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("Math.PI")
                handleButton2("π")
            }
        },
        {
            style : Styles.btnDark,
            title: '√',
            isPortrait: false,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("Math.sqrt(")
                handleButton2("√(")
            }
        },
        {
            style : Styles.btnGray,
            title: '.',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton(".")
                handleButton2(".")
            }
        },
        {
            style : Styles.btnGray,
            title: '0',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("0")
                handleButton2("0")
            }
        },
        {
            style : Styles.btnGray,
            title: '+/-',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                handleButton("-"),
                handleButton2("-")
            }
        },
        {
            style : Styles.btnOrange,
            title: '=',
            isPortrait: true,
            portraitHeight: 72,
            landscapeHeight: 40,
            portraitWidth: '25%',
            landscapeWidth: '16.666%',
            onPress: () => {
                getResult()
            }
        }
    ];

    const [result, setResult] = React.useState("");
    const [equation, setEquation] = React.useState("");
    const [displayEquation, setDisplayEquation] = React.useState("");

    const handleButton = (buttonValue: string) => {
        setEquation(equation + buttonValue);
    };

    const handleButton2 = (buttonValue: string) => {
        setDisplayEquation(displayEquation + buttonValue);
    };

    const deleteLastChar = () => {
        setEquation(equation.slice(0, equation.length-1));
        setDisplayEquation(displayEquation.slice(0, displayEquation.length-1));
    }

    const clear = () => {
        setResult("");
        setEquation("");
        setDisplayEquation("");
    };

    const getResult = () => {
        clear();
        setResult(eval(equation));
    };

    const numberDisplay = () => {
        if(result !== "") {
            return (
                <Text style={result.length < 7 ? [Styles.screenNumber, {color: myColors.result}] : [Styles.screenNumber, {fontSize: 50, color: myColors.result}]}>
                    {result?.toString()}
                </Text>
            );
        }
        if(equation && equation.length < 6) {
            return <Text style={Styles.screenNumber}>{displayEquation}</Text>;
        }
        if(equation === "") {
            return <Text style={Styles.screenNumber}>{"0"}</Text>;
        }
        if(equation.length > 5 && equation.length < 8) {
            return <Text style={[Styles.screenNumber, {fontSize: 75}]}>{displayEquation}</Text>;
        }
        else {
            return <Text style={[Styles.screenNumber, {fontSize: 50}]}>{displayEquation}</Text>;
        }
    }

    return (
        <View style={Styles.viewBottom}>
            <View style={{height: 120, width: "90%", justifyContent: "flex-end", alignSelf: "center"}}>
                {numberDisplay()}
            </View>
            <View style={Styles.row}>
            {
                buttons.map((button, i) => {
                    return (
                        <Button key={i} title={button.title} onPress={button.onPress} buttonStyle={[{display: orientation ? (button.isPortrait ? 'flex' : 'none') : 'flex'},{width: orientation ? button.portraitWidth : button.landscapeWidth},{height: orientation ? button.portraitHeight : button.landscapeHeight}, button.style]} />
                    )
                })
            }
            </View>
        </View>
    )
}